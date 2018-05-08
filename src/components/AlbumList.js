import React from 'react';
import { View, Text } from 'react-native';

export default class AlbumList extends React.Component {

  componentWillMount() {
    console.log('AlbumList mount');
  }

  render() {
    return (
        <View>
          <Text>Album List!</Text>
        </View>
      );
  }
}
