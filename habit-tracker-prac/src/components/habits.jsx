import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
   state ={
      habits:[
         { id:'1', title: 'Reading', count: 0},
         { id:'2', title: 'Wirting', count: 0},
         { id:'3', title: 'Coding', count: 0},
      ]
   }
   HandlerIncrement=(habit)=>{
      const habits = [...this.state.habits];
      const no = habits.indexOf(habit);
      habits[no].count++;
      this.setState({habits});
   }
   HandlerDecrement=(habit)=>{
      const habits = [...this.state.habits];
      const no = habits.indexOf(habit);
      const count = habits[no].count-1;
      habits[no].count = count<0 ? 0 : count;
      this.setState({habits});
   }
   HandlerDelete=(habit)=>{
      const habits = this.state.habits.filter(item=>(
         item.id !==habit.id
      ))
      console.log(habits);
      this.setState({habits});
   }
   render() {
      return (
         <div>
            {
               this.state.habits.map((habit)=>(
                  <Habit
                  key={habit.id}
                  habit={habit}
                  onIncrement = {this.HandlerIncrement}
                  onDecrement = {this.HandlerDecrement}
                  onDelete = {this.HandlerDelete}
                  />
               )
               )
            }
         </div>
      );
   }
}

export default Habits;