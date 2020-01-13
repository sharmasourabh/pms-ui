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
      return { employees: newEmployees }
    });
  }

  render() {
    const { employees } = this.state;
    return (
      <div><div>
        <div className="header-elem-height">
          <div className="page-header page-header-shadow zoom2-enter-done">
            <div className="logo"><a className="logo-img-link" href="/" target="_self">
              <img alt='Logo' src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPi5jbHMtMXtmaWxsOiNmYTU1NjA7fTwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8dGl0bGU+aWNvbjwvdGl0bGU+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03MDUuMzIsMjgwLjEzYy00LjYxLDAtOS4yLjIyLTEzLjc5LjU0bC0uMDctLjU5Yy00LjIxLjQ4LTguMzgsMS4xNC0xMi41MiwxLjg5LTQuNzEuNjQtOS40LDEuMzgtMTQuMDYsMi4zNmExOTYuNDIsMTk2LjQyLDAsMCwwLTI4Mi42Ni0yMC45MWwtLjI3LS4yOWExOTUuODIsMTk1LjgyLDAsMCwwLTIwLjM2LDIxLjcxLDE5Ny4yLDE5Ny4yLDAsMCwwLTQyLjkxLTQuNzFDMjEwLjIzLDI4MC4xMywxMjIsMzY4LjM2LDEyMiw0NzYuODFzODguMjMsMTk2LjY4LDE5Ni42OCwxOTYuNjhINTE3LjE2djExNS4xQTIxLjYyLDIxLjYyLDAsMCwwLDU0NSw4MDkuMjljMi4xLS42Myw1Mi0xNi4xMSw5Ny44My02Ny4zNCwyMy4wOS0yNS43OSwzOC40OS01Mi43OCw0Ni42OC02OS4xMnE4LC42NiwxNS43OS42NkM4MTMuNzcsNjczLjQ5LDkwMiw1ODUuMjYsOTAyLDQ3Ni44MVM4MTMuNzcsMjgwLjEzLDcwNS4zMiwyODAuMTNabTAsMzUwLjEzQTE1NC4zOSwxNTQuMzksMCwwLDEsNjgwLDYyOC4xMWEyMS42NiwyMS42NiwwLDAsMC0yMy42OSwxMy41NiwyNzcuNzMsMjc3LjczLDAsMCwxLTQ1LjcyLDcxLjQ1LDIxNC42LDIxNC42LDAsMCwxLTUwLjI0LDQxLjQyVjY1MS44OGEyMS42MSwyMS42MSwwLDAsMC0yMS42MS0yMS42MkgzMTguNjhjLTg0LjYxLDAtMTUzLjQ0LTY4Ljg0LTE1My40NC0xNTMuNDVzNjguODMtMTUzLjQ1LDE1My40NC0xNTMuNDVhMTU0LjEzLDE1NC4xMywwLDAsMSwxOC4xMiwxLjE3QTE5Ny4xNSwxOTcuMTUsMCwwLDAsMzE5LDM4OGExMjIuMjYsMTIyLjI2LDAsMCwwLTQ0Ljg3LDE5LjI3LDIxLjYyLDIxLjYyLDAsMSwwLDI0LjYxLDM1LjU1LDgwLjE4LDgwLjE4LDAsMCwxLDExMiwyMS4xNiwyMS42MiwyMS42MiwwLDAsMCwzNS44My0yNC4yMSwxMjIuMzMsMTIyLjMzLDAsMCwwLTgzLjg3LTUzLDE1Mi41NSwxNTIuNTUsMCwwLDEsMjU5LjM1LTg1LjI4LDE5NS43OSwxOTUuNzksMCwwLDAtNDksMzYuNzksMTI3LjE0LDEyNy4xNCwwLDAsMC0xMy43OC00Ljc1LDEyMi4yNiwxMjIuMjYsMCwwLDAtNzkuMzgsNC4yMiwyMS42MiwyMS42MiwwLDEsMCwxNi4xMSw0MC4xMyw4MC4yLDgwLjIsMCwwLDEsMTA0LjU4LDQ1LjQ4LDIxLjYyLDIxLjYyLDAsMSwwLDQwLjMtMTUuNjYsMTIzLjMxLDEyMy4zMSwwLDAsMC0zMC41LTQ1LjI4LDE1MiwxNTIsMCwwLDEsNzYuOS0zOCwxNTIuMzIsMTUyLjMyLDAsMCwxLDE4LTEuMTVjODQuNjEsMCwxNTMuNDQsNjguODQsMTUzLjQ0LDE1My40NVM3ODkuOTMsNjMwLjI2LDcwNS4zMiw2MzAuMjZaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNjAuODksNTE1LjY3YTgwLjIsODAuMiwwLDAsMS0xMTMtMTUuNDIsMjEuNjIsMjEuNjIsMCwxLDAtMzQuNTUsMjYsMTIzLjQzLDEyMy40MywwLDAsMCwxNzMuOTMsMjMuNjcsMjEuNjEsMjEuNjEsMCwxLDAtMjYuMzktMzQuMjRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzgyLjY2LDQ5OS44OWE2My41Nyw2My41NywwLDAsMS02My4yOC02NC41NCwyMS42MiwyMS42MiwwLDAsMC0yMS4zMS0yMS45M2gtLjMyYTIxLjYxLDIxLjYxLDAsMCwwLTIxLjYsMjEuMzEsMTA1Ljg2LDEwNS44NiwwLDAsMCwyMSw2NSwxMDYuNTUsMTA2LjU1LDAsMCwxLTQ4Ljg1LDQ1LjE0Yy0yOC44NywxMy40MS02MSwxMy41NC04OC43LjczYTEyMi4xMywxMjIuMTMsMCwwLDAsMjMuMDUtNjYuMzYsMjEuNjIsMjEuNjIsMCwxLDAtNDMuMi0xLjk0LDgwLjE5LDgwLjE5LDAsMCwxLTg0LjY5LDc2LjM4LDIxLjYxLDIxLjYxLDAsMCwwLTIuNDIsNDMuMTZxMy41OC4yMSw3LjE1LjIxYTEyMi4xMywxMjIuMTMsMCwwLDAsNjkuMzktMjEuNTgsMjEuMzQsMjEuMzQsMCwwLDAsOC4yNCw3LjQzLDE0NS4yNCwxNDUuMjQsMCwwLDAsNjUuNCwxNS41MSwxNTEuODUsMTUxLjg1LDAsMCwwLDY0LTE0LjMzQTE0OS42NiwxNDkuNjYsMCwwLDAsNzI5LjkxLDUyOWExMDUuNzcsMTA1Ljc3LDAsMCwwLDUyLjYxLDE0LjE1aC4wN2EyMS42MiwyMS42MiwwLDAsMCwuMDctNDMuMjRaIi8+Cjwvc3ZnPg=="></img>
            </a></div>
            <div className="header-item"><span>Employees</span></div>
            <div className="_1SKg9gcMzCdO0BL1ImbqvM"></div>
            <div className="header-item-center">
              <div className="btn form-field-button form-field-button-bgcolor form-field-button-topbar form-field-button-display form-field-button-topbar-pad form-field-button-transform">
                <span></span>
                <div className="user-icon user-icon-filter user-icon-props" style={{ backgroundColor: "rgb(154, 89, 166)"}}>SS</div>
            </div>
          </div>
        </div>
      </div>


        <div className="header-elem-height">
          <div className="page-content zoom2-enter-done">
            <div className="form-container">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <header className="form-header"><h1 className="text-center">Employees</h1></header>
              <Form addEmployee={this.add} />
              <br /><br />
            </div>
            <div className="table-container"><Table employeeData={employees} removeEmployee={this.remove} updateEmployee={this.update} /></div>
          </div>
        </div>
      </div></div >
    );
  }
}

export default App;
