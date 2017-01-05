import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Calendar extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.home}>This is Two!</Text>
      </View>
    )
  }
}

// import React, { Component, PropTypes } from 'react';
// import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
//
// export default class HomeScene extends Component {
//   render() {
//     return (
//       <View style={{marginTop: 50, alignItems: 'center'}}>
//         <Text>Current Scene: {this.props.title}</Text>
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   mainHead: {
//     fontSize: 50
//   },
//   secondaryText: {
//     fontSize: 30
//   }
// })
//
// HomeScene.propTypes = {
//   title: PropTypes.string.isRequired,
//   onForward: PropTypes.func.isRequired,
//   onBack: PropTypes.func.isRequired,
// };
