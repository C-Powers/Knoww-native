import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import { Text, TouchableHighlight, StyleSheet, Navigator, View } from 'react-native';

import HomeScene from './HomeScene';
import Schedule from './Schedule';

export default class MapSchedule extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeScene} title="HomeScene" initial={true} />
          <Scene key="schedule" component={Schedule} title="Schedule"/>
        </Scene>
      </Router>
    )
  }
}






// import React, { Component } from 'react';
// import { Text, TouchableHighlight, StyleSheet, Navigator, View } from 'react-native';
//
// import HomeScene from './HomeScene';
// import Schedule from './Schedule'
//
// const styles = StyleSheet.create({
//   center: {
//         marginTop: 50
//       }
// });
//
// export default class MapSchedule extends Component {
//   navigatorRenderScene(route, navigator) {
//     _navigator = navigator;
//     switch (route.id) {
//       case 'first':
//         return (<First navigator={navigator} title="first"/>);
//       case 'second':
//         return (<Second navigator={navigator} title="second" />);
//     }
//   }
//
//   render() {
//     return (
//       <Navigator
//         style={styles.container}
//         initialRoute={{id: 'first'}}
//         renderScene={this.navigatorRenderScene}/>
//     );
//   }
// }
//
//
// class Second extends React.Component{
//   render() {
//     return (
//       <View style={styles.center}>
//         <Text>
//           Second screen
//         </Text>
//       </View>
//     );
//   }
// };
//
// class First extends React.Component{
//   navSecond(){
//     this.props.navigator.push({
//       id: 'second'
//     })
//   }
//   render() {
//     return (
//       <View style={styles.center}>
//         <TouchableHighlight  onPress={() => this.navSecond()} >
//           <Text>Navigate to second screen</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
//
//
// // export default class MapSchedule extends Component {
// //   constructor(props) {
// //     super(props)
// //   }
// //
// //   render() {
// //     routes = [
// //       {title: 'home scene', index: 0},
// //       {title: 'Schedule Scene', index: 1}
// //     ]
// //     return (
// //       <Navigator
// //         initialRoute = {{title: 'home scene', index:0}}
// //         renderScene={(route, navitator) => {
// //           if (route.index === 0) {
// //             return (
// //               <HomeScene
// //                 title={route.title}
// //
// //                 // Function to call when a new scene should be displayed
// //                 onForward={() => {
// //                   const nextIndex = route.index + 1;
// //                   navigator.push({
// //                     title: 'Scene ' + nextIndex,
// //                     index: nextIndex,});
// //                 }}
// //
// //                 // Function to call to go back to the previous scene
// //                 onBack={() => {
// //                   if (route.index > 0) {
// //                     navigator.pop();
// //                   }
// //                 }}
// //               />
// //             )
// //           } else if (route.index === 1) {
// //             return <HomeScene title={route.title} />
// //           }
// //         }}
// //       />
// //     )
// //   }
// // }
