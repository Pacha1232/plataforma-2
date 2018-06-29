import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table.js"
class App extends Component {

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.href="http://10.60.161.57:3000/";
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src="http://ijp.ensena.com.ar/pluginfile.php/1/theme_lambda/logo/1528209877/escudo.jpg" height="100px" width="200px"/>
          <h6>
            <table id="inf">
              <link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet"/>
              <li>Nombre: </li>
              <br/>
              <li>DNI:</li>
            </table>
          </h6>
        </header>
        <div>
          <Table />
        </div>
        <button id="home" type="button" onClick={this.handleClick}>Home</button>
    
      </div>
 
    );
  }
}

export default App;
