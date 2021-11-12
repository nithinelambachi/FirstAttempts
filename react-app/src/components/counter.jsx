import React, { Component } from 'react';

class Counter extends React.Component {

formatCounter(){
    return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
}


    render() { 

        return (<div>
        
        <h4> Tag {this.props.id}</h4>
           <span className={this.getBadgeFormat()}> {this.props.counter.value}</span>
        
        <button  className="btn btn-secondary btn-sm"
        onClick= {() => this.props.onIncrement(this.props.counter)}
       >
            Increment</button>
        
<button className="btn-warning m-2" 
onClick={()=>this.props.onDelete(this.props.counter.id)} >
    Delete</button>

        </div>);
    }
    getBadgeFormat(){
        let classes='badge m-2 badge-';
        classes+=this.props.counter.value ===0 ? 'warning' : 'primary';
        return classes;
        
    }
}



export default Counter; 