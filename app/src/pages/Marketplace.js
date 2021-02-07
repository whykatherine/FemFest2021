// modules
import React from 'react';
// assets
import './Marketplace.css';

function Marketplace(props) {
  let vendors = {
    "Artist 1": {
      "description": "Description of artist",
      "items": [["Item 1", 24.95], ["Item 2", 9.99]]
    },
    "Vendor 1": {
      "description": "Description of vendor",
      "items": [["Item 1", 12.50], ["Item 2", 6.00], ["Item 3", 3.50]]
    },
    "Artist 2": {
      "description": "A description of this artist",
      "items": [["Item 1", 20.00], ["Item 2", 15.00], ["Item 3", 9.99]]
    }
  };

  return (
    <div className="marketplace">
      
      <div className="text">
        <h1 data-content="Marketplace">Marketplace</h1>
      </div>

      {Object.keys(vendors).map(vendor => (
        <div className="vendor" key={vendor}>
          <p>{vendor}</p>
          <p>{vendors[vendor]["description"]}</p>
          <div className="vendor__items">
            {vendors[vendor]["items"].map(item => (
              <div className="vendor__item" key={item[0]}>
                <img src="/img/item.png" alt="" />
                <p className="item__title">{item[0]}</p>
                <p className="item__price">{item[1].toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Marketplace;