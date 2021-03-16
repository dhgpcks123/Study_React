import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

class Habit extends Component {

   HandlerIncrement=()=>{
      this.props.onIncrement(this.props.habit);
   }
   HandlerDecrement=()=>{
      this.props.onDecrement(this.props.habit);
   }
   HandlerDelete=()=>{
      this.props.onDelete(this.props.habit);
   }
   
   render() {
      const {title, count} = this.props.habit
      return (
         <li className="habit">
            {/* <span className="habit-count">{habitName}</span> */}
            <span className="habit-name">{title}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.HandlerIncrement}>
               <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.HandlerDecrement}>
               <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.HandlerDelete}>
               <i className="fas fa-trash"></i>
            </button>
         </li>
      );
   }
}

export default Habit;