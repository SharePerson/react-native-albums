import React from 'react';
import firebase from 'firebase';
import { Text, Alert } from 'react-native';

import { Button, Card, CardSection, TextBox, Spinner } from '../common';

export default class Login extends React.Component {

  state = { email: '', password: '', error: '', loading: false };

  onLoginButtonPress() {
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch((error) => this.onLoginFail(error.message));
    });
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', loading: false, error: '' });
  }

  onLoginFail(errorMessage) {
    this.setState({ error: 'Authentication Failed!', loading: false });
    Alert.alert(errorMessage);
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button click={this.onLoginButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextBox
          label="Email"
          placeholder="user@email.com"
          value={this.state.email}
          textChanged={value => {
            this.setState({ email: value });
          }}
          type="email-address"
          />
        </CardSection>

        <CardSection>
          <TextBox
            label="Password"
            placeholder="password"
            value={this.state.password}
            textChanged={value => {
              this.setState({ password: value });
            }}
            secure
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
