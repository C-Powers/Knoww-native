import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Calendar from 'react-native-calendar';
import moment from 'moment';

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
    };
  }

  //addDate = (title) => Actions.dayScene({title: title});
  addDate = (data) => this.setState({selectedDate: data})

  render() {
    let eventDates = ['2017-01-03', '2017-01-05', '2017-01-28', '2017-01-30']
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

    const testEvent = [{date: '2017-01-04', hasEventCircle: {backgroundColor: 'powderblue'}}];

    return (
       <View style={{marginTop: 20}}>
         <Calendar
            customStyle={customStyle}
            scrollEnabled
            showEventIndicators
            eventDates = {eventDates}
            //onDateSelect={(date) => this.setState({ selectedDate: date })}
            //events={testEvent}
            onDateSelect={(date) => this.addDate(date)}
         />

         <Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>

         <Text onPress={() => this.addDate(moment(this.state.selectedDate).format('MMMM DD YYYY'))}>
         {/* this needs to be passed in for classes! */}
           click here to add a date
         </Text>
       </View>
     )
  }
}


// const Schedule = () => {
//   const customStyle = {
//     currentDayCircle: {
//       backgroundColor: 'blue',
//     },
//   }
//
//   addDate = (title) => Actions.dayScene({title: title});
//   //gotoSchedule = () => Actions.schedule({text: this.state.text});
//
//   return (
//     <View>
//     <Calendar
//        //sref="calendar"
//        showEventIndicators
//        eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
//        events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}, {date: '2017-01-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
//        scrollEnabled
//        showControls
//        //dayHeadings={customDayHeadings}
//        //monthNames={customMonthNames}
//        titleFormat={'MMMM YYYY'}
//        prevButtonText={'Prev'}
//        nextButtonText={'Next'}
//       />
//       <Text onPress={() => addDate("-- pass in the day here --")}>
//         click here to add a date
//       </Text>
//     </View>
//   )
// }
//
// const styles = StyleSheet.create({
//   calendarSpot: {
//     paddingTop:50
//   }
// });
//
// export default Schedule


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
