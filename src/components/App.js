import React from 'react';
import Header from './Header';
import Square from './Square';
import './App.css';

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <div className="gridwide">
        <div className="ui equal width center aligned padded grid">
          <div className="row">
            <div className="yellow column">
              <Square />
            </div>
            <div className="olive column">
              <Square />
            </div>
            <div className="yellow column">
              <Square />
            </div>
          </div>
          <div className="row">
            <div className="olive column">
              <Square />
            </div>
            <div className="yellow column">
              <Square />
            </div>
            <div className="olive column">
              <Square />
            </div>
          </div>
          <div className="row">
            <div className="yellow column">
              <Square />
            </div>
            <div className="olive column">
              <Square />
            </div>
            <div className="yellow column">
              <Square />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;