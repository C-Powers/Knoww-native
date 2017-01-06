import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Calendar } from 'react-native-calendar';

const Schedule = () => {
  return (
    <View style={{margin: 128}}>
      <Text> howdy </Text>
    </View>
  )
}

export default Schedule

// export default class Schedule extends Component {
//
//   render() {
//     return (
//       <View style={{margin: 128}}>
//
//       </View>
//     )
//   }
// }


// export default class Schedule extends Component {
//
//   render() {
//     return (
//       <View style={{margin: 128}}>
//         <Text>You said....</Text>
//         <Text style={{marginTop:50}}>{this.props.text}</Text>
//         <Text style={{marginTop:50}} onPress={() => Actions.pop()}>Want to tell yourself something again? </Text>
//       </View>
//     )
//   }
// }
