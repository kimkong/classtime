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




import React, { Component } from 'react';
import './App.css';
var sprintf = require('sprintf-js').sprintf;
var dateFormat = require('dateformat');


// schedule
//
// schedule name:  monday schedule
// schedule dow: []
// schedule type:  MS HS
// //schedule times: 8:00, 15:06 - redundant take the lowest start and the highest end
//
// period name: 1st period
// period times: 8:00, null
// period name: passing to 2nd period
// period start_time: 8:55, 8:59
//
// period name: 2nd
// period times: 9:00, null
// period name: passing to 2nd period
// period start_time: 8:55, null
//
// [....]
//
// period name: 6nd
// period times: 14:10, 15:06
//
//
// mon MS HS
// tue-fri MS HS
// 5 special schedules

class Period {
  constructor(data) {
    this.name = data.name;
    this.start_time = data.start_time;
  }
  toAdjustedTime() {
    return new AdjustedTime( this.start_time );
  }
  start_epoch() {
    return this.toAdjustedTime().getTime();
  }
}

class DailySchedule {
  constructor(options) {
    if (options == undefined) options = {};
    if (options.name === undefined) { console.log("ERROR: name is required"); }
    this.name = options.name;
    this.dow = options.dow || []
    this.type = options.type;
    this.periods = options.periods;

    // this.name = "Regular Day MS";
    // this.dow = [2,3,4,5,6,0]; // leaving blank implies special schedule
    // this.type = "MS";

    // this.periods =  [
    //   new Period('Period 0 (Optional)',  '6:44'),
    //   new Period('Passing to Period 1',  '7:54'),
    //   new Period('Period 1',            '8:00'),
    //   new Period('Passing to Period 2',  '8:58'),
    //   new Period('Period 2',            '9:04'),
    //   new Period('Snack',                '10:10'),
    //   new Period('Passing to Period 3',  '10:19'),
    //   new Period('Period 3',            '10:25'),
    //   new Period('Lunch (7-8)',          '11:23'),
    //   new Period('Passing (7-8)',        '11:54'),
    //   new Period('Period 4 (7-8)',      '12:00'),
    //   new Period('Passing to Period 5',  '12:58'),
    //   new Period('Period 5',            '13:04'),
    //   new Period('Passing to Period 6',  '14:02'),
    //   new Period('Period 6',            '14:08'),
    //   new Period('Period 6 End',        '15:06')
    // ]
  }

  name() { return this.name; }
  loadSchedule(server, scheduleId) {
    // get from server
  }
}



let schedule = [{
  name: "Regular Day MS",
  dow: [2,3,4,5,6,0],
  type: "MS",
  periods: [
    { name: 'Period 0 (Optional)',  start_time: '6:44'},
    { name: 'Passing to Period 1',  start_time: '7:54'},
    { name: 'Period 1',              start_time: '8:00'},
    { name: 'Passing to Period 2',  start_time: '8:58'},
    { name: 'Period 2',              start_time: '9:04'},
    { name: 'Snack',                start_time: '10:10'},
    { name: 'Passing to Period 3',  start_time: '10:19'},
    { name: 'Period 3',              start_time: '10:25'},
    { name: 'Lunch (7-8)',          start_time: '11:23'},
    { name: 'Passing (7-8)',        start_time: '11:54'},
    { name: 'Period 4 (7-8)',        start_time: '12:00'},
    { name: 'Passing to Period 5',  start_time: '12:58'},
    { name: 'Period 5',              start_time: '13:04'},
    { name: 'Passing to Period 6',  start_time: '14:02'},
    { name: 'Period 6',              start_time: '14:08'}
  ]
},
{
  name: "Regular Day HS",
  dow: [2,3,4,5,6,0],
  type: "HS",
  periods: [
    { name: 'Period 0 (Optional)',  start_time: '6:44'},
    { name: 'Passing to Period 1',  start_time: '7:54'},
    { name: 'Period 1',              start_time: '8:00'},
    { name: 'Passing to Period 2',  start_time: '8:58'},
    { name: 'Period 2',              start_time: '9:04'},
    { name: 'Snack',                start_time: '10:10'},
    { name: 'Passing to Period 3',  start_time: '10:19'},
    { name: 'Period 3',              start_time: '10:25'},
    { name: 'Passing (9-12)',        start_time: '11:23'},
    { name: 'Period 4 (9-12)',      start_time: '11:29'},
    { name: 'Lunch (9-12)',          start_time: '12:27'},
    { name: 'Passing to Period 5',  start_time: '12:58'},
    { name: 'Period 5',              start_time: '13:04'},
    { name: 'Passing to Period 6',  start_time: '14:02'},
    { name: 'Period 6',              start_time: '14:08'}
  ]
}]


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

    if (current_time === undefined || current_time === null) {
      //console.log("setting current time wih new Date()")
      this.now = new Date();
    } else if (typeof(current_time) === "string") {
      //console.log("parsing current_time and setting:", current_time)
      let tmp = String(current_time).match(/^(\d+):(\d+)$/);
      let hours = parseInt(tmp[1], 10);
      let minutes = parseInt(tmp[2], 10);
      let tmp_now = new Date()
      let [year, month, day] = [tmp_now.getFullYear(), tmp_now.getMonth(), tmp_now.getDate()];
      this.now = new Date(year, month, day, hours, minutes, 0, 0);
    } else {
      //console.log("setting with current_time  assusming sane value for now", current_time)
      this.now = current_time;
    }
    //console.log("nownow?  ", current_time);
  }

  ms_duration_to_human(ms) {
    let sec_remaining = ms / 1000;
    let hrs = Math.floor(sec_remaining / 3600);
    let mins = Math.floor((sec_remaining - hrs * 3600) / 60);
    let secs = Math.floor(sec_remaining - (hrs*3600 + mins*60) );
    let time_remaining_str;
    if (hrs === 0) {
      time_remaining_str = sprintf("%02d:%02d", mins, secs);
    } else {
      time_remaining_str = sprintf("%02d:%02d:%02d", hrs, mins, secs);
    }
    return time_remaining_str;
  }

  calculated_remaining(ending_time_in_hh_mm) {
    let ending_time = new AdjustedTime(ending_time_in_hh_mm);
    let now_time = this.now.getDate();
    debugger

    return this.ms_duration_to_human(ending_time - now_time);
  }

  set_adjustment_secs(seconds) {
  }

  now() {
    //not a property.
  }

  getTime() {
    //console.log("class AdjustedTime -  getting date from this.now", this.now, this.now.getTime())
    return this.now.getTime();
  }

  to_human() {
    return dateFormat(this.now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  }
  get hhss() {
    return dateFormat(this.now, "h:MM");
  }

}

class ClassPeriod {
  constructor(schedule) {
    this.schedule = schedule;
    //this.state.current_period_end = Date.now();
    //this.state.current_period_end = this.state.current_period_end + (5  * 60 * 1000);
  }
  get name() { return this.schedule.name; }

  get current_period_start() {
    let period = this.current_period();
    if (period.in_active_period) {
      return period.current_period.toAdjustedTime().hhss;
    }
    return "----";
  }
  get current_period_end() {
    let period = this.current_period();
    if (period.in_active_period) {
      if (period.next_period) {
        return period.next_period.toAdjustedTime().hhss;
      }
      return "XXXX";
    }
    return "----";
  }
  get next_period_name() {
    //return this.next_period_name()
  }

  current_period() {
    let now = new AdjustedTime().getTime();
    let is_before_first = now < this.schedule.periods[0].start_epoch();

    if (is_before_first) {
      return { in_active_period: false, msg: "Class not started yet" };
    }

    let past_last_period = now > this.schedule.periods[this.schedule.periods.length - 1].start_epoch();
    if (past_last_period) {
      return { in_active_period: false, msg: "no more periods, go home" };
    }

    for (let i = 0; i < this.schedule.periods.length; i++ ) {
      let after_start = now >= this.schedule.periods[i].start_epoch()
      let before_next = now < this.schedule.periods[i+1].start_epoch()
      let in_current_period = after_start && before_next;
      if (in_current_period) {
        let next_period = this.schedule.periods[i+1];
        return { in_active_period: true, period_index: i, current_period: this.schedule.periods[i], next_period: next_period };
      }
    }
    throw "Internal error, should not get here";
  }

  time_remaining(current_time) {
    let now = new AdjustedTime(current_time)
    //console.log("current_time .now? ", current_time)
    //let remaining_time = now.calculated_remaining(this.state.current_period_end);
    //return remaining_time;
  }
  display_period_span() {
    let start_time = this.current_period_start;
    let end_time = this.current_period_end;
    /// could translate from 24 to 12 hour time.
    return `${start_time} => ${end_time}`;
  }
}

class ClassTimerStatusPanel extends Component {
  constructor(props) {
    super(props);

    let class_period = new ClassPeriod(props.current_schedule);
    this.state = {
      class_period: class_period,
      current_schedule_name: class_period.name,
      time_remaining_string: class_period.time_remaining(this.props.currentTime),
      period_span: class_period.display_period_span(),
      next_period_name: class_period.next_period_name,
    };
  }
  render() {
    return (
      <div className="panel left">
        <div>
          <div className="timer_info">
            <span id="period_name">{this.state.current_schedule_name}</span>
          </div>
          <div className="timer_countdown">
            <span id="remaining_time">{this.state.time_remaining_string}</span>
          </div>
          <div className="timer_info">
            <span id="period_span">{this.state.period_span}</span>
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
      <div>
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


class ClassTime extends Component {
  constructor(props) {
    super(props);
    //console.log("ClassTimer: ", this.props);
  }
  render() {
    //<ClassTimerStatusPanel currentTime={this.props.currentTime} current_schedule={this.props.current_schedule} />
    return (
      <div>
        {this.props.currentTime.to_human()}
      </div>
    );
  }
}
//  https://hackernoon.com/understanding-state-and-props-in-react-94bc09232b9c

class Account {
  // teacher name
  // school/district
  // internal account id
  //  ---> lookup to get schedules for account
}

class App extends Component {
  constructor(props) {
    super(props);
    // app needs to manage all schedules
    let all_schedules = [
    ]
    // later use `new DailySchedule().loadSchedule`
    let hour_offset = 8;
    let a_schedule = { name:"Sample test Schedule 1",
                       dow:[1,2,3,4,5,6,0],
                       type:"sdfasf",
                       periods:[
                        new Period({ name: 'Period 0 (Optional)',    start_time: (6+hour_offset+':44' )}),
                         new Period({ name: 'Passing to Period 1',    start_time: (7+hour_offset+':54' )}),
                         new Period({ name: 'Period 1',              start_time: (8+hour_offset+':00' )}),
                         new Period({ name: 'Passing to Period 2',    start_time: (8+hour_offset+':58' )}),
                         new Period({ name: 'Period 2',              start_time: (9+hour_offset+':04' )}),
                         new Period({ name: 'Snack',                  start_time: (10+hour_offset+':10')}),
                         new Period({ name: 'Passing to Period 3',    start_time: (10+hour_offset+':19')}),
                         new Period({ name: 'Period 3',              start_time: (10+hour_offset+':25')}),
                         new Period({ name: 'Lunch (7-8)',            start_time: (11+hour_offset+':23')}),
                         new Period({ name: 'Passing (7-8)',          start_time: (11+hour_offset+':54')}),
                         new Period({ name: 'Period 4 (7-8)',        start_time: (12+hour_offset+':00')}),
                         new Period({ name: 'Passing to Period 5',   start_time: (12+hour_offset+':58')}),
                         new Period({ name: 'Period 5',              start_time: (13+hour_offset+':04')}),
                         new Period({ name: 'Passing to Period 6',    start_time: (14+hour_offset+':02')}),
                         new Period({ name: 'Period 6',              start_time: (14+hour_offset+':08')})
                       ]
                     }
    console.log(a_schedule)
    all_schedules.push(a_schedule)
    this.state = {
      currentTime: new AdjustedTime(),
      teacherName: "KimKong",
      all_schedules: all_schedules,
      current_schedule: a_schedule,
    };
  }

  // https://stackoverflow.com/questions/39426083/update-component-every-second-react
  componentDidMount() {
    //this.intervalID = setInterval( () => this.tick() , 1000);
  }
  componentWillUnmount() { clearInterval(this.intervalID); }
  tick() { this.setState({ currentTime: new AdjustedTime() }); }

  render() {
    return (
      <div>
        <div className="App">
          <h1>Class Time Minder: "{this.state.teacherName}"</h1>
          // schedule for the day
          // countdown info
          <ClassTimerStatusPanel current_schedule={this.state.current_schedule} />
          <div className="panel right">
          <ClassTime currentTime={this.state.currentTime} />
          <ClassTimerSettingsPanel />
          </div>
          // timer
        </div>
      </div>
    );
  }
}

export default App;
