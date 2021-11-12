import React, { Component } from 'react';
import Counter from './counter';


class Counters extends React.Component {
    state={
        counters:[{id:1, value:2},
            {id:2, value:0},
            {id:3, value:0}]
    };

    handleDelete= id => {
        const counters = this.state.counters.filter(c => c.id !== id);
       this.setState({counters})
    };


    handleIncrement= counter => {
      
        const counters= [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});       

    };

    handleReset=()=>{
        const counters = this.state.counters.map(c => {
            c.value=0;
            return c;
        })
        this.setState({counters});
    }
    render() { 
        return (<div>
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}> Reset</button>
         
{this.state.counters.map(counter => <Counter key={counter.id} 
counter={counter}
onDelete={this.handleDelete}
onIncrement={this.handleIncrement} >

</Counter> )}

        </div>
        );
    }
}
 
export default Counters;