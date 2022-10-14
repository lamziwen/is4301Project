

import React, { Component } from 'react'
import logo from './nus_logo.png';
import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} alt="logo" width="30%"/>
              <p>
                NUS is a leading research university in Asia.
              </p>
            </header>
          </div>
        )
    }
}