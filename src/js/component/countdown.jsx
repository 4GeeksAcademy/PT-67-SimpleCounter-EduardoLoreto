import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds:0
    }
    this.hoursInput = React.createRef();
    this.minutesInput= React.createRef();
    this.secondsInput = React.createRef();
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  convertToSeconds = ( hours, minutes,seconds) => {
    return seconds + minutes * 60 + hours * 60 * 60;
  }

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  showAlert = () => {
    alert("Times up!");
  }

  countDown = () => {
    const  { hours, minutes, seconds } = this.state;
    let convertSeconds = this.convertToSeconds(hours, minutes, seconds);

    if(convertSeconds) {

      // seconds change
      seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 59});

      // minutes change
      if(convertSeconds % 60 === 0 && minutes) {
        this.setState({minutes: minutes -1});
      }

      // when only hours entered
      if(!minutes && hours) {
        this.setState({minutes: 59});
      }

      // hours change
      if(convertSeconds % 3600 === 0 && hours) {
        this.setState({hours: hours -1});
      }

      if(convertSeconds === null) {
        console.log("Times up!");
      }

    } else {
      clearInterval(this.timer);
      alert("Times up!");
    }
  } 

  stopTimer = () => {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    this.hoursInput.current.value = 0;
    this.minutesInput.current.value = 0;
    this.secondsInput.current.value = 0;
  }

  render() {
    const { hours, minutes, seconds } = this.state;
      
    return (
      <>
        <div className="container d-flex align-items-center">
            <div className="text">Hrs</div>
            <input className="input" ref={this.hoursInput} type="number" placeholder={'00'} name="hours" onChange={this.inputHandler} />
            <div className="text">Min</div>
            <input  className="input" ref={this.minutesInput} type="number" placeholder={'00'} name="minutes" onChange={this.inputHandler} />
            <div className="text">Sec</div>
            <input  className="input" ref={this.secondsInput} type="number" placeholder={'00'} name="seconds" onChange={this.inputHandler} />
         </div>
         <div className="buttons container py-2 d-flex align-items-center">
            <button onClick={this.startTimer} className="start">start</button>
            <button onClick={this.stopTimer}  className="stop">stop</button>
            <button onClick={this.resetTimer}  className="reset">reset</button>
         </div>
         <h2> Timer</h2>
         <div className="container d-flex justify-content-center">
            <div className="countdown col-sm-1">Hrs</div>
            <div className="countdown col-sm-1">Min</div>
            <div className="countdown col-sm-1">Sec</div>
        </div>
        <div className="container d-flex justify-content-center">
            <div className="countdown col-sm-1">{hours}</div>
            <div className="countdown col-sm-1">{minutes}</div>
            <div className="countdown col-sm-1">{seconds}</div>
        </div>
      </>
    );
  }
}

export default Timer;