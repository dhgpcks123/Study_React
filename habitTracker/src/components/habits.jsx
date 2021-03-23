import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    return (
      <>
        <ul className="habits">
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              handleIncrement={this.props.handleIncrement}
              handleDecrement={this.props.handleDecrement}
              handleDelete={this.props.handleDelete}
            />
          ))}
        </ul>
        <div className="habits-reset">
          <button className="habits-reset-btn" onClick={this.props.handleReset}>
            Reset All
          </button>
        </div>
      </>
    );
  }
}

export default Habits;
