import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="board">
        <div>Main component</div>

        <Link to="/board">Board</Link>
      </div>
    );
  }
}

export default Main;
