import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}>Click Here</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#007aff',
    paddingTop: 10,
    paddingBottom: 10
  }
};
