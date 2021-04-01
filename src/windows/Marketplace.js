// modules
import React from 'react';
// assets
import Window from '../Window.js';

function Marketplace(props) {
  let vendors = {
    "Apparel": {
      "Stuzo Clothing": {
        "logo": "stuzo.jpg",
        "link": "https://www.stuzoclothing.com/",
        "description": "Stuzo Clothing is a gender free clothing company designed to invoke thought and emotion. Our brand is for the non-conforming and bold at heart."
      },
      "A Tribe Called Queer": {
        "logo": "a-tribe-called-queer.jpg",
        "link": "https://www.atribecalledqueer.com/",
        "description": "A Tribe Called Queer is a multidisciplinary brand that features a gender neutral and size inclusive clothing line, podcast, zine, virtual events, and a blog. A Tribe Called Queer was created by Sabine Maxine Lopez in an effort to create thought provoking designs that make a statement without saying a word."
      },
      "Affect Metals": {
        "logo": "affect-metals.png",
        "link": "https://www.affectmetals.com/s-h-o-p-1",
        "description": "Affect Metals is a contemporary chainmail line designed and constructed in Los Angeles, CA. Each piece is hand woven, link by link, by Abe Heath, a non-binary queer artist. Ranging from full chain garments, to lingerie, to everyday jewelry, Affect Metals aims to create lush, extravagant, and divine chain-ware."
      },
      "Koredoko": {
        "logo": "koredoko.png",
        "link": "https://www.koredoko.com/shop-koredoko",
        "description": "koredoko is an ongoing project about object-making by brain dinh. with a background in painting i began this label as a means to expand my artistic practice into fabrication."
      },
      "Lockwood51": {
        "logo": "lockwood51.jpg",
        "link": "https://lockwood51.com/",
        "description": "A movement to empower queer youth"
      },
      "Gata Salvaje Merch": {
        "logo": "gata-salvaje.png",
        "link": "https://www.gatasalvajemerch.com/s/shop",
        "description": "Gata Salvaje Merch aims to honor the rage of those who are a part of intersectional marginalized communities. With her merch, Gata sparks conversations by highlighting multiple intersections of power dynamics and norms we don't often think about."
      },
      "Leif J Lee": {
        "logo": "leif-j-lee.jpg",
        "link": "https://leifjlee.bigcartel.com/",
        "description": "Leif J Lee is a non binary artist grown out of the Pacific Northwest. Their education stems in and out of academia, holding degrees from the Evergreen State and Pacific Northwest Colleges of Art. Lee practices drawing the unseen on paper and fabric by utilizing their experiences with subconscious states of being. These drawings reflect other spiritually based worlds, question heteronormative perception, and occupy expansive spaces that defy linear time. In order to imagine a way out of destructive psychological and physical traumas Lee vigilantly seeks higher vibrations through drawing, experimentation of mediums, and fascination with the unknown."
      },
    },
    "Accessories": {
      "Momo Metals": {
        "logo": "momo-metals.png",
        "link": "https://www.momometals.com/shop",
        "description": "Monique Peterson, the founder of MOMO Metals, is a Philadelphia based jeweler specializing in hand-carved and fabricated sterling pieces. MOMO Metals is an LGBTQ+ inclusive brand that aims to create minimal unisex jewelry that is bound to make a statement."
      },
      "cyb3rw3nch": {
        "logo": "cyb3rw3nch.gif",
        "link": "https://cyb3rw3nch.net/collections/shop",
        "description": "From the rich mind of Thoth to the collaged visual data we stream into our souls — symbols, iconography, and talismans are the language of metaphysical and arcane concepts too subtle and elusive for words. Symbolic keys like material ones are expected to fit locks and open doors. Here is your collection of cracked license keys to a richer universal experience. Some keys fit many locks, some locks receive more than one key. There is no final authority. Everything that is part of the living stream evokes complex associations that can never be rigidly confined. Change transcends. You do, and so too — CYB3RW3NCH. Do not be afraid. Sent from my iPhone"
      },
    },
    "Books & Gifts": {
      "The Ripped Bodice": {
        "logo": "the-ripped-bodice.png",
        "link": "https://www.therippedbodicela.com/",
        "description": "The Ripped Bodice is the only exclusively romance bookstore on the West Coast. Sisters and owners Leah and Bea Koch raised $91,000 on Kickstarter to bring their dream of a romance-only bookstore to life."
      },
    },
    "Apothecary": {
      "Sapphic Apothecary": {
        "logo": "sapphic-apothecary.jpg",
        "link": "https://www.sapphicapothecary.com/shop",
        "description": "Sapphic LLC, located in Philadelphia PA, is a womxn owned and operated business specializing in hand-crafted small batch candles and queer centric apparel. All of our candles are made from 100% organic USA grown soy, ethically sourced and produced in an environmentally responsible way, with 90% of our materials being purchased from local suppliers. Similarly, our t-shirt designs are done in-house and are all 100% original and exclusive to our brand."
      }, 
    },
    "Art & Variety": {
      "Two Minds Press": {
        "logo": "two-minds-press.jpg",
        "link": "http://www.twomindspress.com/",
        "description": "Hi! I'm Felicia (she/her). I'm an artist and screenprinter based in Philadelphia, and I started two minds in 2018. I create original hand-printed apparel, accessories, and prints around themes of emotionality, wordplay, social justice, and radical joy."
      },
      "Bianca's Design Shop": {
        "logo": "biancas-design-shop.jpg",
        "link": "https://www.biancadesigns.co/",
        "description": "Bianca’s Design Shop is a small independent shop that features rad pins, creative goods, & other cute things made with love in Queens, NY. The shop is run by Queer Latinx Artist, Bianca Negron."
      },
      "Hills and Holler": {
        "logo": "hills-and-holler.jpg",
        "link": "https://www.etsy.com/shop/HillsAndHoller",
        "description": " Hills & Holler was created by Brandon Patrick in 2016, and joined by Michael Wooldridge in 2018 as a way to speak some big gay magic into reality. Our aim is to pay homage to our queer elders, uphold intersectional-or-bust politics, and uplift those in our community who have done the WORK + have fun!"
      },
      "Isart Shop": {
        "logo": "isart-shop.jpg",
        "link": "https://isartshop.org/",
        "description": "Hi everyone! Thank you for supporting my small business. Behind ISART Shop is me, Isabelle Trinh! I’m currently based in the Bay Area and I’m a 3rd year in college studying Communications and Graphic Design."
      },
      "Huntees": {
        "logo": "huntees.jpg",
        "link": "https://huntees.com/",
        "description": "Huntees is a new brand born in West Hollywood CA. Huntees is a collaboration of very talented artists from all over the world."
      }
    }
  };

  return (
    <div className="marketplace">
      
      <div className="text">
        <h1 data-content="Marketplace">Marketplace</h1>
      </div>

      {Object.keys(vendors).map(cat => (
        <div className="text" key={cat}>
          <h2>{cat}</h2>
          <div className="gallery">
            {Object.keys(vendors[cat]).map(vendor => (
              <div className="gallery__item" key={vendor}>
                <div className="gallery__item_image">
                  <a href={vendors[cat][vendor]["link"]} title={vendor} target="_blank" rel="noopener noreferrer">
                    <img src={"/img/vendors/" + vendors[cat][vendor]["logo"]} alt={vendor + " logo"} />
                  </a>
                </div>
                <p>{vendor}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}

export default Marketplace;