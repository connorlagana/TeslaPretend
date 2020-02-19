import React, { Component } from "react";

export default class CreateGarageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.createGarage(this.state);
        }}
      >
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Add New Garage</button>
      </form>
    );
  }
}
