import React, { Component } from 'react';


class Artistes extends Component {
  constructor() {
    super();
    this.state = {
      artistes: []
    };
  }

  componentDidMount() {
    fetch('/artistes')
      .then(res => res.json())
      .then(artistes => this.setState({artistes}, () => console.log('Artistes fetched...', artistes)));
  }

  render() {
    return (
      <div>
        <h2>Artistes</h2>
        <ul>
        {this.state.artistes.map(artiste => 
          <li key={artiste.id}>{artiste.firstName} {artiste.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Artistes;
