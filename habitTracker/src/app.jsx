import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import HabitAddForm from './components/habitAddForm';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reding', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    //리액트에서는 state를 직접 수정하는 건 좋지 않다!
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
    //key, value동일한 경우 하나로 쓸 수 있다. this.setState({habits}) 가능
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    if (habits[index].count <= 0) return;
    habits[index].count--;
    this.setState({ habits: habits });
    //key, value 동일한 경우 하나로 쓸 수 있다. this.setState({habits});
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: habits });
  };
  totalCount = () => {
    return this.state.habits.filter((item) => item.count > 0).length;
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits];
    habits.push({ id: Date.now(), name: name, count: 0 });
    this.setState({ habits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar totalCount={this.totalCount()} />
        <HabitAddForm onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
