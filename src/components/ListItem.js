import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {
    render() {
      return (
        <CardSection>
          <Text style={styles.titleStyle}>{this.props.item.title}</Text>
        </CardSection>
      );
    }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => ({ selectedLibraryId: state.selectedLibraryId });

export default connect(mapStateToProps)(ListItem);
