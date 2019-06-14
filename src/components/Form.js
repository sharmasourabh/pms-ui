import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      email: ''
    }
    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.addEmployee(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, email } = this.state;
    return (
      <form className="small-container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={email} onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;