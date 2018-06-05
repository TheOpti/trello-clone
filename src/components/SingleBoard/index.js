import React, { Component } from 'react';

import './styles.css';

class SingleBoard extends Component {
  render() {

    return (
      <div className="card bg-light single-board">
        <div className="card-header">
          Header
        </div>
        <div className="single-board__body">
          <div className="single-board__entry">
            Usu id nobis cetero, per aeque denique definitionem eu.
          </div>
          <div className="single-board__entry">
            A simple secondary alert—check it out!
          </div>
          <div className="single-board__entry">
            Atqui ancillae consectetuer at qui. An qui graecis
            laboramus deseruisse, eum noluisse deseruisse necessitatibus in.
          </div>
          <div className="single-board__entry">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBoard;
