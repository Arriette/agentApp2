import React, { Component } from 'react';
import './App.css';

class Artistes extends Component {
  constructor() {
    super();
    this.state = {
      nom: '',
      prenom: '', 
      blaze: '',
      phone: '',
      mail:'',
      fanzine: [],
      dateCrea: '',
      argent: ''
    };
  }

  componentDidMount() {
    fetch('/artistes')
      .then(res => res.json())
      .then(artistes => this.setState({artistes}, () => console.log('Artistes fetched...', artistes)));
  }

  render() {
    const blaze = this.state.blaze
    return (
      <div  className="Artiste" id={blaze}>
        <h3>{this.state.blaze}</h3>
        <p>{this.state.blaze}, de son vrai nom {this.state.nom} {this.state.prenom}.</p>
        <p>Dépositaire de fanzine depuis {this.state.dateCrea}, il a à son actif : {this.state.fanzine}</p>
        <p>Actuellement nous lui devons {this.state.argent}</p>
        <p>Il est joignble sur {this.state.phone} ou {this.state.mail}</p>

      </div>
      )
  }
}

export default Artistes;
