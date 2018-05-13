import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../reducers';
import LibraryList from './LibraryList';


export default class TechnologyList extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View>
        <View>
          <LibraryList />
        </View>
      </View>
      </Provider>
    );
  }
}
