import React from 'react';
import { View, Text } from 'react-native';

import { CardSection } from './common';

export default class ListItem extends React.Component {
    render() {
      return (
        <View>
          <CardSection>
            <Text>{this.props.item.title}</Text>
          </CardSection>
        </View>
      );
    }
}
