import React, { Component } from 'react';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';

class Table extends Component {
  render() {
    const { employeeData, removeEmployee, updateEmployee } = this.props
    return (
      <div className="contain-table">
        <table>
          <TableHeader />
          <TableBody employeeData={employeeData}
            removeEmployee={removeEmployee}
            updateEmployee={updateEmployee}
          />
        </table>
      </div>
    );
  }
}

export default Table;