import React, { Component } from 'react';
import { Text, Navigator } from 'react-native';

import HomeScene from './HomeScene';

export default class MapSchedule extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navigator
        initialRoute = {{title: 'home scene', index:0}}
        renderScene={(route, navitator) =>
          <HomeScene
            title={route.title}
          />
        }
      />
    )
  }
}
