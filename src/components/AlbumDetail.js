import React from 'react';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>{this.props.album.title}</Text>
        </CardSection>
      </Card>
    );
  }
}
