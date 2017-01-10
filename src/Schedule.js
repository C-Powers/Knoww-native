import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Calendar from 'react-native-calendar';
import moment from 'moment';

const ScheduleData = {
  dates: [
    // {'2017-01-03': [{1: "dog walk"}, {2: 'human walk'}]},
    // {'2017-01-05': [{5: "dog walk 2"}, {8: 'human walk 2'}]},
    {day: '2017-01-03', items: [{1: "dog walk"}, {2: 'human walk'}]},
    {day: '2017-01-05', items: [{5: "dog walk 2"}, {8: 'human walk 2'}]}
  ]
}

const Schedule = () => {
  const customStyle = {
    calendarContainer: {
      backgroundColor: '#ecf0f1',
    },
    day: {
      color: '#34495e',
    },
    weekendDayText: {
      color: '#95a5a6',
    },
    currentDayCircle: {
      backgroundColor: '#c0392b',
    },
    currentDayText: {
      color: '#c0392b',
    },
    eventIndicator: {
      backgroundColor: '#8e44ad',
    },
    hasEventDaySelectedCircle: {
      backgroundColor: '#8e44ad',
    },
  }

  const addDate = (title) => {
    Actions.dayScene({title: title}, {type: ScheduleData.dates[0].items[0]})
  };
  //gotoSchedule = () => Actions.schedule({text: this.state.text});

  return (
    <View style={{marginTop: 20}}>
      <Calendar
        customStyle={customStyle}
        scrollEnabled
        showEventIndicators
        eventDates = {ScheduleData.dates.map((item) => item.day)}
        //onDateSelect={(date) => this.setState({ selectedDate: date })}
        //events={testEvent}
        onDateSelect={(date) => addDate(moment(date).format('MMMM DD YYYY'))}
        />

     {/* <Text> Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')} </Text> */}

     <Text onPress={() => this.addDate(moment(this.state.selectedDate).format('MMMM DD YYYY'))}>
       click here to add a date
     </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  calendarSpot: {
    paddingTop:50
  }
});

export default Schedule


// export default class Schedule extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dayData: [
//         {'2017-01-03': [{1: "dog walk"}, {2: 'human walk'}]}
//       ],
//     };
//   }
//   //gotoSchedule = () => Actions.schedule({text: this.state.text});
//   addDate = (day) => {
//     this.dayData.push(day)
//     Actions.dayScene({title: this.state.dayData.day})
//     };
//   //addDate = (data) => this.setState({selectedDate: data});
//
//   render() {
//     let eventDates = ['2017-01-03', '2017-01-05', '2017-01-28', '2017-01-30']
//     const customStyle = {
//         calendarContainer: {
//           backgroundColor: '#ecf0f1',
//         },
//         day: {
//           color: '#34495e',
//         },
//         weekendDayText: {
//           color: '#95a5a6',
//         },
//         currentDayCircle: {
//           backgroundColor: '#c0392b',
//         },
//         currentDayText: {
//           color: '#c0392b',
//         },
//         eventIndicator: {
//           backgroundColor: '#8e44ad',
//         },
//         hasEventDaySelectedCircle: {
//           backgroundColor: '#8e44ad',
//         },
//
//       }
//
//     const testEvent = [{date: '2017-01-04', hasEventCircle: {backgroundColor: 'powderblue'}}];
//
//     return (
//        <View style={{marginTop: 20}}>
//          <Calendar
//             customStyle={customStyle}
//             scrollEnabled
//             showEventIndicators
//             eventDates = {eventDates}
//             //onDateSelect={(date) => this.setState({ selectedDate: date })}
//             //events={testEvent}
//             onDateSelect={(date) => this.addDate(moment(date).format('MMMM DD YYYY'))}
//          />
//
//          <Text> Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')} </Text>
//
//          <Text onPress={() => this.addDate(moment(this.state.selectedDate).format('MMMM DD YYYY'))}>
//            click here to add a date
//          </Text>
//        </View>
//      )
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
