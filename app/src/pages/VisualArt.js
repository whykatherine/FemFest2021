// modules
import React from 'react';
// assets
import './VisualArt.css';

function VisualArt(props) {
  return (
    <React.Fragment>
      <div className="visual-art">
        <div className="art"></div>
        <div className="art"></div>
        <div className="art"></div>
        <div className="art"></div>
      </div>
    </React.Fragment>
  );
}

export default VisualArt;