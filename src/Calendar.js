import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={{marginTop: 50, alignItems: 'center'}}>
        <Text>Current Scene: {this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainHead: {
    fontSize: 50
  },
  secondaryText: {
    fontSize: 30
  }
})

HomeScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
