import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.calendar}>This is PageOne!</Text>
      </View>
    )
  }
}



// import React, { Component, PropTypes } from 'react';
// import { View, Text, TouchableHighlight } from 'react-native';
//
// export default class HomeScene extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Current Scene: {this.props.title}</Text>
//
//         <TouchableHighlight onPress={this.props.onForward}>
//           <Text>Tap me to load the next scene</Text>
//         </TouchableHighlight>
//
//         <TouchableHighlight onPress={this.props.onBack}>
//           <Text>Tap me to go back</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }
//
// HomeScene.propTypes = {
//   title: PropTypes.string.isRequired,
//   onForward: PropTypes.func.isRequired,
//   onBack: PropTypes.func.isRequired,
// };
