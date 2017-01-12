import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Calendar from 'react-native-calendar';

const DayScene = () => {
  const customStyle = {
    currentDayCircle: {
      backgroundColor: 'blue',
    },
  }
  const data = this.props.data || 'No Data';
  return (
    <View>
      <Text style={{marginTop:100}}>
        add your dates here eventually
      </Text>
      <Text onPress={() => Actions.pop()}>
        Back
      </Text>
      <Text style={{marginTop:20}}>
        {data}
      </Text>
    </View>
  )
}


export default DayScene
