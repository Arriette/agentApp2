import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Artistes from './components/artistes';

class FormSearch extends Component {
 render() {
  return (
    <form>
    <label>Recherche par nom de fanzine 
    <input
      placeholder = "Nom du fanzine"
    />
    </label>
    <button
    >
      Recherche
    </button>
    <label>Recherche par nom d'artiste 
    <input
      placeholder = "Nom de l'artiste"
    />
    </label>
    <button
    >
      Recherche
    </button>

    </form>
    )
 }
}
class Sumup extends Component {
  render() {
    return (
      <div className="Sumup">
        <h1>Récap</h1>

        <div className="Container">
          <h2>Les fanzines</h2>
          <p> <span>X</span> fanzines référencés</p>
          <p> <span>XXX</span> euros d'artistes cumulés</p>
        </div>

      </div>
    );
  }
}

class Inventory extends Component {
  render() {
    return (
      <div className="Inventaire">
        <header className="Inventaire-header">
        <h1>Gestionnaire de stock de fanzine</h1>
        </header>
        <main className="Container">
        <FormSearch/>
        <Sumup/>

        </main>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Inventory/>
         <a href="/home"> Home</a>
         <Customers/>
         <Artistes/>
        </header>
        
      </div>
    );
  }
}

export default App;
