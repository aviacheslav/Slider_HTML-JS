import React from 'react';
import data from './data.js'; //`
import './styles.css';

class Slider extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activeN:1,
        quantity:data.length,//not very good
      };
    }

    leftClickHandler=()=>{
        if(this.state.activeN>1){
            this.setState({activeN: this.state.activeN-1});
            //t//his.state.activeN--;
        }else{
            //this.state.activeN=this.state.quantity;
            this.setState({activeN: this.state.quantity});
        }
    }
    rightClickHandler=()=>{
        if(this.state.activeN<this.state.quantity){
            //this.state.activeN++;
            this.setState({activeN: this.state.activeN+1});
        }else{
            //this.state.activeN=1;
            this.setState({activeN: 1});
        }
    }

    render() {
        const {activeN, quantity}=this.state;
        return (
        <article>
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
		</article>
        );
    }
} 

export default Slider;