import { useState, useEffect } from 'react';
import { Component } from 'react';
import styles from './style.module.css';
function StopWatch (props)  {
  //constructor(props) {
    //super(props);

    const [currentTime, setCurrentTime]=useState(0);
    const [intervalId, setIntervalId]=useState(null);
        
    const start = () => {
        // const { currentTime } = this.state;
        if (intervalId) {
            return;
        }
    }

    const newIntervalId = setInterval(() => {
      setCurrentTime(oldTime) =>oldTime + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(this.intervalId);
    setIntervalId(null);
  };

  useEffect( () => {
    start();
    return () =>{
        stop();
    };
  }, []);

  
  render() {
    const { currentTime } = this.state;

    // this.setState({ currentTime: this.state.currentTime + 1 });
    // this.start();

    return (
      <section className={styles.container}>
        <p className={styles.display}>{currentTime}</p>
        <button className={`${styles.btn} ${styles.startBtn}`} onClick={this.start}>
          Start
        </button>
        <button className={`${styles.btn} ${styles.stopBtn}`} onClick={this.stop}>
          Stop
        </button>
      </section>
    );
  }
}

export default StopWatch;
