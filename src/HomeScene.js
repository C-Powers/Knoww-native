import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={{marginTop: 50, alignItems: 'center'}}>
        <Text>Current Scene: {this.props.title}</Text>

        <Text style={styles.mainHead}>Welcome to Map-Schedule!</Text>
        <Text style={styles.secondaryText}>Put in your schedule, and get a map</Text>
        <Text style={styles.secondaryText}>Know where and when you need to go! </Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
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
