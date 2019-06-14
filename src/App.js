import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';

class App extends Component {
  state = {
    employees: [
      {
        name: 'Abraham',
        email: 'abraham@xyz.com',
      },
      {
        name: 'Bahadur',
        email: 'bahadur@abc.xyz',
      },
      {
        name: 'Cinderella',
        email: 'cinderella@xyz.com',
      },
      {
        name: 'Danish',
        email: 'danish@abc.xyz',
      },
    ]
  };

  remove = index => {
    const { employees } = this.state;
    this.setState({
      employees: employees.filter((employees, i) => {
        return index !== i;
      })
    })
  }

  add = employee => {
    this.setState({ employees: [...this.state.employees, employee] })
  }

  update = (index, employee) => {
    if (employee.name === '' || employee.email === '') return
    this.setState(prevState => {
      const newEmployees = [...prevState.employees];
      newEmployees[index] = employee
      return {employees: newEmployees}
    });
  }

  render() {
    const { employees } = this.state;
    return (
      <div className="small-container">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="text-center">Employees</h1>
        <div>
          <Form addEmployee={this.add} />
          <br/><br/>
          <Table employeeData={employees} removeEmployee={this.remove} updateEmployee={this.update}/>
        </div>
      </div>
    );
  }
}

export default App;
