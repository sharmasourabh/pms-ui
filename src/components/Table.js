import React, { Component } from 'react';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData}
          removeCharacter={removeCharacter}
          />
      </table>
    );
  }
}

export default Table;