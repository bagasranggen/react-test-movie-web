import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';
import Menu from '../components/Menu/Menu';
import Movies from '../components/Movies/Movies';
import CircleDot from '../components/CircleDot/CircleDot';
import Footer from '../components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Banner />
        <div className="container-fluid bg-light-gray">
          <Menu />
          <div className="container p-5">
            <div className="row">
              <Movies />
            </div>
            <CircleDot />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
