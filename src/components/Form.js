import React, { Component } from 'react';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
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
    e.target.parentElement.classList.remove('form-field-error');
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
        input.parentElement.classList.remove('form-field-error');
        document.getElementById(`${input.name}Label`).classList.remove('form-field-label-shift');
      });
    }
  }

  isFormValid() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;
    inputs.forEach(input => {
      const isInputValid = this.showInputError(input.name);
      if (!isInputValid) {
        isFormValid = false;
      }
    });
    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`);
    label.classList.add('form-field-label-shift');
    const labelValue = capitalize(refName);

    if (!validity.valid) {
      label.parentElement.classList.add('form-field-error');
      if (validity.valueMissing) {
        label.classList.remove('form-field-label-shift');
        label.textContent = `${labelValue} required`;
      } else if (validity.typeMismatch) {
        label.textContent = `${labelValue} should be valid`;
      }
      return false;
    }

    label.textContent = labelValue;
    return true;
  }

  render() {
    return (
      <form noValidate>
        <div className="form-field">
          <label htmlFor="name" id="nameLabel" className="form-field-label">Name</label>
          <input type="text" id="name" name="name" ref="name" className="form-field-input" spellCheck="false" value={this.state.name} onChange={this.handleChange} required />
          <div className="_3ND7O5VNyy88KOUTSjso-S"></div>
        </div>
        <div className="form-field">
          <label htmlFor="email" id="emailLabel" className="form-field-label">Email</label>
          <input type="email" id="email" name="email" ref="email" className="form-field-input" spellCheck="false" value={this.state.email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleChange} required />
          <div className="_3ND7O5VNyy88KOUTSjso-S"></div>
        </div>
        <div className="btn form-field-button form-field-button-color form-field-button-display form-field-button-transform" onClick={this.handleSubmit}><span>Add Employee</span></div>
      </form>
    );
  }
}

export default Form;