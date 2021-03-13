import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPara: false
    };
  }

  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() => this.setState({ showPara: !this.state.showPara })}
        >
          Click
        </button>
        {this.state.showPara && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;
