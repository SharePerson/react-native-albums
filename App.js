import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './src/components/common';
import AlbumList from './src/components/AlbumList';
import Login from './src/components/auth/Login';

export default class App extends React.Component {

  state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyDZ56iqRtcILZYvE29n0DWQMth6-Ehd-V4',
      authDomain: 'react-native-albums-79433.firebaseapp.com',
      databaseURL: 'https://react-native-albums-79433.firebaseio.com',
      projectId: 'react-native-albums-79433',
      storageBucket: 'react-native-albums-79433.appspot.com',
      messagingSenderId: '710741411860'
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: user != null });
    });
  }

  renderAuthBased() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <View>
          <Header headerText="Albums" />
          <View>
            <Button click={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
          <AlbumList />
        </View>
      );
      case false:
      return (
        <View>
          <Header headerText="Log In" />
          <Login />
        </View>
      );
      default:
      return (
        <Spinner size="large" />
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderAuthBased()}
      </View>
    );
  }
}
