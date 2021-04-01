// modules
import React from 'react';

function Merch(props) {
	let merch = {
		"Headliners": {
			"Caroline Polachek": {
				"logo": "caroline-polachek.jpg",
				"link": "https://thehyv.shop/collections/caroline-polachek"
			},
			"Dorian Electra": {
				"logo": "dorian-electra.jpg",
				"link": "https://thehyv.shop/collections/dorian-electra"
			},
			"Raveena": {
				"logo": "raveena.jpg",
				"link": "https://shop.raveenaaurora.com/"
			}
		},
		"Supporting": {
			"Yves Tumor": {
				"logo": "yves-tumor.jpg",
				"link": "https://yves-tumor.warp.net/"
			},
			"Fraxiom": {
				"logo": "fraxiom.jpg",
				"link": "https://fraxiom.bandcamp.com/track/e-m-o"
			},
			"Caro♥": {
				"logo": "ultra-caro.jpg",
				"link": "https://www.instagram.com/ultra_caro/"
			},
		},
		"Speakers": {
			"Mykki Blanco": {
				"logo": "mykki-blanco.jpg",
				"link": "https://mykkiblancoworld.com/"
			},
			"Funmilola Fagbamila": {
				"logo": "funmilola-fagbamila.jpg",
				"link": "https://www.funmilola.com/"
			}
		},
		"Performers": {
			"Vander Von Odd": {
				"logo": "vander-van-odd.jpg",
				"link": "https://www.vandervonodd.com/shop"
			},
			"Abhora": {
				"logo": "abhora.jpg",
				"link": "https://www.etsy.com/shop/Abhora"
			},
			"Freckle": {
				"logo": "freckle.jpg",
				"link": "https://www.instagram.com/freckle/"
			},
		},
		"Designers": {
			"Nina Doll": {
				"logo": "nina-doll.jpg",
				"link": "http://nina-doll.com/"
			},
			"Marco Alcala": {
				"logo": "marco-alcala.jpg",
				"link": "https://linktr.ee/marcoart"
			},
			"Hana Pua": {
				"logo": "hana-pua.jpg",
				"link": "https://www.hanja-designs.com/"
			},
			"Kris Yuan": {
				"logo": "kris-yuan.jpg",
				"link": "https://www.instagram.com/toadwytch/"
			},
			"Shroonchu": {
				"logo": "shroonchu.jpg",
				"link": "https://www.instagram.com/shroonchu/"
			},
			"Aylish Turner": {
				"logo": "aylish-turner.jpg",
				"link": "https://thedarkcarnivalzine.bigcartel.com/"
			}
		}
	};

	return (
		<div className="marketplace">
      
      <div className="text">
        <h1 data-content="Merch">Merch</h1>
      </div>

      {/*<div className="text">
      	<p>COMING SOON</p>
      </div>*/}

      {Object.keys(merch).map(cat => (
        <div className="text" key={cat}>
          <h2>{cat}</h2>
          <div className="gallery">
            {Object.keys(merch[cat]).map(person => (
              <div className="gallery__item" key={person}>
                <div className="gallery__item_image">
                  <a href={merch[cat][person]["link"]} title={person} target="_blank" rel="noopener noreferrer">
                    <img src={"/img/merch/" + merch[cat][person]["logo"]} alt={person + " logo"} />
                  </a>
                </div>
                <p>{person}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
	);
}

export default Merch;