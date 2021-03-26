// modules
import React from 'react';
// assets
import './VisualArt.css';

function VisualArt(props) {
  return (
    <div className="visual-art">

      <div className="text">
        <h1 data-content="Visual Art">Visual Art</h1>
      </div>

      <div className="gallery">
        <div className="art"></div>
        <div className="art"></div>
        <div className="art"></div>
        <div className="art"></div>
      </div>
    </div>
  );
}

export default VisualArt;