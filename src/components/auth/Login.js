import React from 'react';
import { Text } from 'react-native';
import connect from 'react-redux';

import { Button, Card, CardSection, TextBox } from '../common';
import { emailChanged, passwordChanged } from '../../actions';

class Login extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextBox
          label="Email"
          placeholder="user@email.com"
          value={this.props.email}
          type="email-address"
          textChanged={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <TextBox
            label="Password"
            placeholder="password"
            value={this.props.password}
            textChanged={this.onPasswordChange.bind(this)}
            secure
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <Button click={this.onLoginButtonPress.bind(this)}>Login</Button>
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

const mapStateToProps = state => ({ email: state.auth.email, password: state.auth.password });

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login);
