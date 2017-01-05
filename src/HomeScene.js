import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }

  gotoCalendar = () => Actions.calendar({text: this.state.text});

  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={this.gotoCalendar}>What do you want to say?</Text>
        <Text>{this.state.text}</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Tell your future self something."
          onChangeText={(text) => this.setState({text})}
        />
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
