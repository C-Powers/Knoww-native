import React, { Component } from 'react';
import { Text, Navigator } from 'react-native';

import HomeScene from './HomeScene';
import Calendar from './Calendar'

export default class MapSchedule extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    routes = [
      {title: 'home scene', index: 0},
      {title: 'Calendar Scene', index: 1}
    ]
    return (
      <Navigator
        initialRoute = {{title: 'home scene', index:0}}
        renderScene={(route, navitator) => {
          if (route.index === 0) {
            return (
              <HomeScene
                title={route.title}

                // Function to call when a new scene should be displayed
                onForward={() => {
                  const nextIndex = route.index + 1;
                  navigator.push({
                    title: 'Scene ' + nextIndex,
                    index: nextIndex,});
                }}

                // Function to call to go back to the previous scene
                onBack={() => {
                  if (route.index > 0) {
                    navigator.pop();
                  }
                }}
              />
            )
          } else if (route.index === 1) {
            return <HomeScene title={route.title} />
          }
        }}
      />
    )
  }
}
