import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

let key = 1;
class App extends Component {
  state = {
    habits: [{ id: 1, title: 'Reading', count: 0 }],
  };
  addHabit = () => {
    key = key + 1;
    const habitInput = document.querySelector('.habit-input').value;
    if (habitInput === '') return;
    const habits = [...this.state.habits];
    habits.push({ id: key, title: habitInput, count: 0 });
    this.setState({ habits });
  };

  HandlerIncrement = (habit) => {
    const habits = [...this.state.habits];
    const no = habits.indexOf(habit);
    habits[no].count++;
    this.setState({ habits });
  };
  HandlerDecrement = (habit) => {
    const habits = [...this.state.habits];
    const no = habits.indexOf(habit);
    const count = habits[no].count - 1;
    habits[no].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  HandlerDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    console.log(habits);
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <div>
          <input
            className="habit-input"
            id="habit"
            type="text"
            placeholder="Habit"
          ></input>
          <button
            className="habit-button habit-button-add"
            onClick={this.addHabit}
          >
            Add
          </button>
        </div>
        <Habits
          habits={this.state.habits}
          onIncrement={this.HandlerIncrement}
          onDecrement={this.HandlerDecrement}
          onDelete={this.HandlerDelete}
        />
      </>
    );
  }
}

export default App;
