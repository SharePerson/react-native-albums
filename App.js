import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Spinner } from './src/components/common';
import Login from './src/components/auth/Login';
import Home from './src/components/Home';
import AlbumList from './src/components/AlbumList';
import TechnologyList from './src/components/TechnologyList';

export default class App extends React.Component {

  state = { loggedIn: null, screen: 'home' };

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

  renderHome() {
    switch (this.state.screen) {
      case 'home':
      return (
        <View>
      <Header headerText="Home" />
      <Home
      click={screen => {
          switch (screen) {
            case 'albums':
            this.setState({ screen: 'albums' });
            break;
            case 'technologies':
            this.setState({ screen: 'technologies' });
            break;
            default:
            this.setState({ screen: 'home' });
            break;
          }
      }}
      />
      </View>
    );
      case 'albums':
      return (
        <View>
          <Header headerText="Albums" />
          <AlbumList />
        </View>
      );
      case 'technologies':
      return (
          <View>
            <Header headerText="Technologies" />
            <TechnologyList />
          </View>
      );
      default:
      break;
    }
  }

  renderAuthBased() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <View>
          {this.renderHome()}
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
