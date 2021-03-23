import React, { Component } from 'react';

class HabitForm extends Component {
  inputRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="please enter your habit"
          maxLength="7"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitForm;
