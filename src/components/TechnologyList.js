import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../reducers';
import { Header } from './common';


export default class TechnologyList extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Technologies" />
        <View>
          <Text>Technology List Component</Text>
        </View>
      </View>
      </Provider>
    );
  }
}
