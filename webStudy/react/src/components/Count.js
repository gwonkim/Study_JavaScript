import React from 'react';
import './Count.css';

class Count extends React.Component {
    state = { 
        counter: 0,
        age: 20,
    };

    increase = () => {
        this.setState((current) => ({
            counter : current.counter + 1
        }));
    }
    
    decrease = () => {
        this.setState((current) => ({
            counter : current.counter - 1
        }));
    }

    getOld = () => {
        this.setState((current) => ({ age: current.age - 1}));
    }

   isEven = () => {
        if (this.state.counter % 2 !== 0) {
            return 'notEven';
        } else {
            return 'even';
        }
    }; 

    render() {
        return (
            <div className='counter'>
                <h1>I'm {this.state.age}살입니다.</h1>
                <h1 className={
                     this.isEven()
                    //this.state.counter % 2 === 0?'even':'notEven' 
                }>{this.state.counter}</h1>
                
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
                <button onClick={this.getOld}>Get Old</button>
            </div>
        );
    }
}

export default Count;