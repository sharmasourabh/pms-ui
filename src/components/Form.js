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

  handleChange = (e) => {
    e.target.classList.add('active');
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    this.showInputError(e.target.name);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.props.addEmployee(this.state);
      this.setState(this.initialState);
      const inputs = document.querySelectorAll('input');
      inputs.forEach(input => {
        input.classList.remove('active');
      });
    }
  }

  isFormValid() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  render() {
    return (
      <form className="small-container" noValidate>
        <label htmlFor="name" id="nameLabel" >Name
        <input type="text" id="name" name="name" ref="name" value={this.state.name} onChange={this.handleChange} required /></label>
        <label className="error" id="nameError" />
        <label htmlFor="email" id="emailLabel" >Email
        <input type="email" id="email" name="email" ref="email" value={this.state.email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleChange} required /></label>
        <label className="error" id="emailError" />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;