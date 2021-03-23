import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };
  render() {
    // const input = document.querySelector('s');
    // 리액트에는 ref라는 것이 있습니다<!DOCTYPE html>
    // 리액트에선 dom요소에 직접적으로 접근하지 않는다.
    console.log('habitAddForm');
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Pleas enter your habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
