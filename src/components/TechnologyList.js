import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../reducers';
import LibraryList from './LibraryList';


export default class TechnologyList extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LibraryList />
      </Provider>
    );
  }
}
