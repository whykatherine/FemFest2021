// modules
import React from 'react';

function Merch(props) {
	let merch = {
		"headline": {
			"Caroline Polachek": {},
			"Dorian Electra": {},
			"Raveena": {}
		},
		"supporting": {
			"Yves Tumor": {},
			"Eartheater": {},
			"Fraxiom": {},
			"Caro♥": {}
		},
		"speakers": {
			"Mykki Blanco": {},
			"Funmilola Fagbamila": {}
		},
		"performers": {
			"Vander Von Odd": {},
			"Abhora": {},
			"Freckle": {}
		},
		"designers": {
			"Nina Doll": {},
			"Marco Alcala": {},
			"Hana Pua": {},
			"Kris Yuan": {},
			"Shroonchu": {},
			"Aylish Turner": {}
		}
	};

	return (
		<div className="marketplace">
      
      <div className="text">
        <h1 data-content="Merch">Merch</h1>
      </div>

      <div className="text">
      	<p>COMING SOON</p>
      </div>

      {/*<div className="gallery gallery--merch">
        {Object.keys(merch).map(cat => (
        	<div className="gallery_section" key={cat}>
        		{Object.keys(merch[cat]).map(name => (
        			<div className="gallery__item" key={name}>
		            <p>{name}</p>
		          </div>
      			))}
        	</div>
        ))}
      </div>*/}

    </div>
	);
}

export default Merch;