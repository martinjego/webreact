import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      firstName: 'Vin',
      lastName: 'Noche'
    }
  }
  _handleClick(e) {
    e.preventDefault();
    this.setState({ firstName: "Babaero", lastName: "Ako"})
  }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <div>
        <h2>{firstName} {lastName}</h2>
        <button onClick={(event) => this._handleClick(event)} type="submit">Click me!!</button>
      </div>
    )
  }

}
