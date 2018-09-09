import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ClassTimerScheduleSelector extends Component {
  render() {
    return (
      <div class="panel" style={{"width":"100%", height:"100%"}}>
        <div style={{"text-align": "center", "font-size": "1.5em"}}>
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

class ClassPeriod {
  constructor() {
    this.state = {
      current_period_name: '',
      current_period_start: '',
      current_period_end: '',
      next_period_name: '',
    }
  }
  display_remaining() {
    return 'XX:XX';
  }
}

class ClassTimerStatusPanel extends Component {
  constructor(props) {
    super(props);
    let class_period = new ClassPeriod();
    this.state = {
      class_period: class_period
    };
  }

  render() {
    return (
      <div class="panel" style={{"width":"70%"}}>
        <div>
          <div style={{"text-align": "center", "font-size": "1.5em", "margin-top": "1em"}}>
            <span id="period_name">{this.state.current_period_name}</span>
          </div>
          <div style={{"text-align": "center", "font-size": "4em"}}>
            <span id="remaining_time">{this.state.class_period.display_remaining()}</span>
          </div>
          <div style={{"text-align": "center", "font-size": "1.5em", "margin-top": "1em"}}>
            <span id="period_span">{this.state.current_period_start} ... {this.state.current_period_end}</span>
            <span id="next_period_name">{this.state.next_period_name}</span>
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
      <div class="panel" style={{"width":"30%"}}>
        <div style={{"font-size": "1.25em", "font-variant": "small-caps", color:"#666"}}>CURRENT TIME  <span id="clock">&nbsp;</span></div> 
        <div style={{"font-size": "1.25em", "font-variant": "small-caps", color:"#666"}}>SETTINGS:</div> 
        <div>
          <input type="radio" id="contactChoice1" onClick="setScheduleType('MS')" name="contact" value="MS"/>
          <label for="contactChoice1">Middle School</label>
          <input type="radio" id="contactChoice2" onClick="setScheduleType('HS')" name="contact" value="HS" checked/>
          <label for="contactChoice2">High School</label>
        </div>
        <div class="center-text" style={{"text-align": "center", height: "6em"}}><span id="counter">00:00</span></div>
      </div>
    )
  }
}

class ClassTimer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Class Time Minder: "{this.props.teacherName}"</h1>
        <ClassTimerStatusPanel />
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
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <ClassTimer teacherName="Mr. Kim" />
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
