import React from 'react';
import data from './data.js'; //`
import './styles.css';

class Slider extends React.Component {
    constructor(props) {
      super(props);
      //
      this.state = {
          activeN:1,
          quantity:data.length,//not very good
          timeInternalMs:1000,
          autoScrollOn: true,
          aTimer:null,
      };
    }

    сomponentDidMount(){
        this.startAutoScroll();
    }

    leftClickHandler=()=>{
       this.scrollNext();
       this.stopAutoScroll();
        if(this.state.autoScrollOn){
            this.startAutoScroll();
        }
    }
    rightClickHandler=()=>{
        this.scrollPrev();
        this.stopAutoScroll();
        if(this.state.autoScrollOn){
            this.startAutoScroll();
        }
    }
    setIntervalClickHandler=()=>{
        //const timeRange=+prompt("Input time interval in milliseconds");
        let timeRange=this.state.timeInternalMs;
        alert("Current time interval in milliseconds is:"+this.state.timeInternalMs);
        const txt=prompt("Input time interval in milliseconds");
        if(txt!=="" ){
            timeRange=+txt;
        }
        this.setState({timeInternalMs: timeRange});
        
        this.stopAutoScroll();
        if(this.state.autoScrollOn){
            this.startAutoScroll();
        }
    }

    timerSwitcherClickHandler=()=>{
        this.setState({autoScrollOn: !this.state.autoScrollOn});
        this.stopAutoScroll();
        if(this.state.autoScrollOn){
            this.startAutoScroll();
        }
        alert("Auto scroll mode: "+this.state.autoScrollOn);
     }

    startAutoScroll=()=>{
        //why error if ecri function?
        //let currentN=this.state.timeInternalMs;
        //this.setState({timerId: setInterval(this.scrollNext, this.state.timeInternalMs)});
        this.timerId=setInterval(this.scrollNext, this.state.timeInternalMs);
    }

    stopAutoScroll=()=>{
        //why error if ecri function?
        //let currentN=this.state.timeInternalMs;
        //this.setState(clearInterval(this.timerId));
        clearInterval(this.timerId);
    }

    scrollNext=()=>{
        if(this.state.activeN>1){
            this.setState({activeN: this.state.activeN-1});
            //t//his.state.activeN--;
        }else{
            //this.state.activeN=this.state.quantity;
            this.setState({activeN: this.state.quantity});
        }
    }

    scrollPrev=()=>{
        if(this.state.activeN<this.state.quantity){
            this.setState({activeN: this.state.activeN+1});
            //t//his.state.activeN--;
        }else{
            //this.state.activeN=this.state.quantity;
            this.setState({activeN: 1});
        }
    }

    render() {
        const {activeN, quantity}=this.state;
        return (
        <article>
            <div>
                <h1>Enjoy our Universe</h1>
                <input type="checkbox" value="AutoScroll mode" onClick={this.timerSwitcherClickHandler } checked={this.state.autoScrollOn}></input> 
                <button onClick={this.setIntervalClickHandler} id="btnSetTime">
                    Set Interval
                </button> 
            </div>    
            <main>
                <button onClick={this.leftClickHandler} class="Button leftButton">
			        {'<'}
		        </button>
		        <button onClick={this.rightClickHandler} class="Button rightButton">
                    {'>'}
		        </button> 
                <section>
			        <h2>
				        {data[activeN-1].caption}
			        </h2>
			        <div>
                        <img src={data[activeN-1].imgSrc} alt={data[activeN-1].imgAlt}/> 
				    </div>
			        <p>
				        {data[activeN-1].text}
			        </p>
		        </section>
		    </main>
        </article>//);
        );
    }//render
} //classcomponent

export default Slider;