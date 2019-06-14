import React, { Component } from 'react';

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editIndex: -1
    };
    this.employee = {
      name: null,
      email: null
    }
  }

  setEditIndex(index) {
    // performs a shallow merge
    this.setState({ editIndex: index });
    if (index === -1) {
      this.resetLocalEmployee();
    }
  }

  updateLocalEmployee(field, event, index) {
    if (!field || field === '' || !event.target.value || event.target.value === '') return;
    this.employee = Object.assign({}, this.props.employeeData[index]);
    switch(field) {
      case 'name':
        this.employee.name = event.target.value;
        break;
      case 'email':
        this.employee.email = event.target.value;
        break;
      default:
    }
  }

  updateEmployee(index) {
    this.props.updateEmployee(index, this.employee);
    this.setEditIndex(-1);
  }

  resetLocalEmployee() {
    this.employee = {
      name: null,
      email: null
    }
  }

  render() {
    const rows = this.props.employeeData.map((row, index) => {
      return (
        <tr key={index}>
          {this.state.editIndex === index ? (
            <>
            <td id={'tdName' + index}><input type="text" id={'name' + index} name={'name' + index}
              defaultValue={row.name} onChange={(event) => this.updateLocalEmployee('name', event, index)} /></td>
            <td id={'tdEmail' + index}><input type="email" id={'email' + index} name={'email' + index}
              defaultValue={row.email} onChange={(event) => this.updateLocalEmployee('email', event, index)}  /></td>
            <td><button onClick={() => this.updateEmployee(index)}>Save</button></td>
            <td><button onClick={() => this.setEditIndex(-1)}>Cancel</button></td>
            </>
          ) : (
            <>
              <td id={'tdName' + index}>{row.name}</td>
              <td id={'tdEmail' + index}>{row.email}</td>
              <td><button onClick={() => this.props.removeEmployee(index)}>Delete</button></td>
              <td><button onClick={() => this.setEditIndex(index)}>Edit</button></td>
            </>
            )
          }
        </tr>
      )
    });
    return (
      <tbody>{rows}</tbody>
    )
  };
};

export default TableBody;
