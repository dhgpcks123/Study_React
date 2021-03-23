import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  HandlerIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  HandlerDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  HandlerDelete = (habit) => {
    this.props.onDelete(habit);
  };
  render() {
    return (
      <div>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.HandlerIncrement}
            onDecrement={this.HandlerDecrement}
            onDelete={this.HandlerDelete}
          />
        ))}
      </div>
    );
  }
}

export default Habits;
