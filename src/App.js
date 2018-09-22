import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var sprintf = require('sprintf-js').sprintf;
var dateFormat = require('dateformat');


class ClassTimerScheduleSelector extends Component {
  render() {
    return (
      <div className="panel major">
        <div className="center-text schedule_selector">
          <button onClick="setSchedule('default')" type="button">default</button> 
          <button onClick="setSchedule('RallyA')"  type="button">rally a</button> 
          <button onClick="setSchedule('RallyB')"  type="button">rally b</button> 
          <button onClick="setSchedule('Block')"   type="button">block</button> 
          <button onClick="setSchedule('Finals')"  type="button">finals</button> 
          <button onClick="setSchedule('Minimum')" type="button">minimum</button> 
          <button onClick="setSchedule('Test')"    type="button">test</button> 
        </div>
      </div>
    )
  }
}

class AdjustedTime {
  constructor(current_time) {
    // passed in a full date/time?
    // passed in a short hh:mm time?
    // pass in a Date object?

    if (typeof(current_time) == undefined || current_time == null) {
      //console.log("setting current time wih new Date()")
      this.now = new Date;
    } else if (typeof(current_time) == "string") {
      //console.log("parsing current_time and setting:", current_time)
      let tmp = String(current_time).match(/^(\d+):(\d+)$/);
      let hours = parseInt(tmp[1], 10);
      let minutes = parseInt(tmp[2], 10);
      this.now = new Date(null, null, null, hours, minutes, 0, 0);
    } else {
      //console.log("setting with current_time  assusming sane value for now", current_time)
      this.now = current_time;
    }
    console.log("nownow?  ", current_time);
  }

  ms_duration_to_human(ms) {
    let sec_remaining = ms / 1000;
    let hrs = Math.floor(sec_remaining / 3600);
    let mins = Math.floor((sec_remaining - hrs * 3600) / 60);
    let secs = Math.floor(sec_remaining - (hrs*3600 + mins*60) );
    let time_remaining_str;
    if (hrs==0) {
      time_remaining_str = sprintf("%02d:%02d", mins, secs);
    } else {
      time_remaining_str = sprintf("%02d:%02d:%02d", hrs, mins, secs);
    }
    return time_remaining_str;
  }

  calculated_remaining(ending_time_in_hh_mm) {

    let ending_time = new Date();
    // TODO: verify input is string in the correct format "HH:MM" otherwise all hell will break loose
    ending_time.setHours(ending_time_in_hh_mm.split(":")[0]);
    ending_time.setMinutes(ending_time_in_hh_mm.split(":")[1]);
    ending_time.setSeconds(0);
    ending_time = ending_time.getTime();

    let now_time = this.now.getDate();
    console.log("now_time", now_time)
    console.log("ending_time", ending_time)
    console.log("now_time <ending_time", now_time < ending_time)

    if ( now_time > ending_time ) {
      console.log("in the past on line 74");
      return '-past???';
    } else if (now_time <= ending_time) {
      console.log("in the past on line 74");
      console.log("line 80: ", ending_time)
      return this.ms_duration_to_human(ending_time - now_time);
    }
  }

  set_adjustment_secs(seconds) {
  }

  now() {
    //not a property.
  }
  getDate() {
    console.log("class AdjustedTime -  getting date from this.now", this.now, this.now.getTime())
    return this.now.getTime();
  }

  to_human() {
    return dateFormat(this.now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  }

}

class ClassPeriod {
  constructor() {
    this.state = {
      current_period_name: 'test schedule 1',
      current_period_start: '12:05',
      current_period_end: '16:55',
      next_period_name: 'test schedule 2',
    }
    //this.state.current_period_end = Date.now();
    //this.state.current_period_end = this.state.current_period_end + (5  * 60 * 1000);
  }
  name() {
    return this.state.current_period_name;
  }
  time_remaining(current_time) {
    let now = new AdjustedTime(current_time)
    console.log("current_time .now? ", current_time)
    let remaining_time = now.calculated_remaining(this.state.current_period_end);
    return remaining_time;
  }
  display_period_span() {
    let start_time = this.state.current_period_start;
    let end_time = this.state.current_period_end;
    /// could translate from 24 to 12 hour time.
    return `${start_time} => ${end_time}`;
  }
  period_name() {
    return this.state.current_period_name;
  }
  next_period_name() {
    return this.state.next_period_name;
  }
}

class ClassTimerStatusPanel extends Component {
  constructor(props) {
    super(props);
    //this.props.currentTime
    let class_period = new ClassPeriod();
    this.state = {
      class_period: class_period
    };
  }

  render() {
    return (
      <div className="panel left">
        <div>
          <div className="timer_info">
            <span id="period_name">{this.state.class_period.name()}</span>
          </div>
          <div className="timer_countdown">
            <span id="remaining_time">{this.state.class_period.time_remaining(this.props.currentTime)}</span>
          </div>
          <div className="timer_info">
            <span id="period_span">{this.state.class_period.display_period_span()}</span>
            <span id="next_period_name">{this.state.class_period.next_period_name()}</span>
          </div>
        </div>
        <ClassTimerScheduleSelector />
      </div>
    )
  }
}

class ClassTimerSettingsPanel extends Component {
  render() {
    return (
      <div className="panel right">
        <div className="timer_settings">CURRENT TIME  <span id="clock">&nbsp;</span></div> 
        <div className="timer_settings">SETTINGS:</div> 
        <div>
          <input type="radio" id="contactChoice1" onClick="setScheduleType('MS')" name="contact" value="MS"/>
          <label for="contactChoice1">Middle School</label>
          <input type="radio" id="contactChoice2" onClick="setScheduleType('HS')" name="contact" value="HS" checked/>
          <label for="contactChoice2">High School</label>
        </div>
        <div className="center-text"><span id="counter">00:00</span></div>
      </div>
    )
  }
}

class ClassTimer extends Component {
  constructor(props) {
    super(props);
    console.log("ClassTimer: ", this.props.currentTime);
  }
  render() {
    return (
      <div>
        <h1>Class Time Minder: "{this.props.teacherName}"</h1>
        <ClassTimerStatusPanel currentTime={this.props.currentTime} />
        {this.props.currentTime.to_human()}
        <ClassTimerSettingsPanel />
      </div>
    );
  }
}
//  https://hackernoon.com/understanding-state-and-props-in-react-94bc09232b9c

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new AdjustedTime()
    };
    console.log("App: ", this.state.currentTime);
  }
 
  // https://stackoverflow.com/questions/39426083/update-component-every-second-react
  componentDidMount() {
    this.intervalID = setInterval( () => this.tick() , 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({ currentTime: new AdjustedTime() });
    console.log("App: ", this.state.currentTime);
  }

  render() {
    return (
      <div>
        <div className="App">
          <ClassTimer teacherName="Mr. Kim" currentTime={this.state.currentTime} />
        </div>
      </div>
    );
  }
}

export default App;

// 2 click onto settings control (need framework for visuals)
// 3 make schedules for first run a static property of the classtimer
// 4 buttons for classtimer generated according to data structure
// 5 
//
//
// schedule name: default mon
// schedule sub-type: MS HS for me. for others lunch A lunch B or something I haven't seen some won't have subtypes at all
// periods: name, start_time and end time implied by next row
//
//
// Eddy specific. How to introduce actual time offset vs puter time.
//
// Timer only change would be to add arbitrary # of minutes into timer. and have beeping a setting to turn on/off
// complexity is to make settings definable entirely within the page. save and set and reload.
// webstorage. to have this offline.
// maybe have online version so i can charge ppl money or show ads so i can money
// schedule needs a state, county, school attribute for cluster of schedules.
// school specific. so other attributes to make it faster to find.
//
//
//
//




