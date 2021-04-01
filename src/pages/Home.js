// modules
import React from 'react';
// assets
import lineup from '../img/FINAL v1_00000.png';

function Home(props) {
  return (
    <div className="home">

      <div className="text">
        <h1 data-content="FEMFEST 2021">FEMFEST 2021</h1>
      </div>

      {/*<div className="text">
        <iframe title="Spotify playlist" className="spotify" src="https://open.spotify.com/embed/playlist/27YwAmEiOtgthJhSM3eBBT" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>*/}

      <div className="image">
        <img src={lineup} alt="FemFest 2021 lineup" />
      </div>

      <div className="text">
        <h2 data-content="Mission Statement">Mission Statement</h2>
        <p>SAGE’s FemFest aims to be an inclusive safe space that highlights those oppressed by the patriarchy in the music industry. Intersectional at our core, FemFest is open to everyone, and specifically amplifies the voices of womxn, people of color, and those within the LGBTQ+ community.</p>
        <p>This year, due to the novel coronavirus, Femfest will be held online. This unprecedented opportunity gives our committee the chance to create a new experience for the USC community. Not just a music festival, Femfest will strive to entertain, educate and empower those who oppose the patriarchy.</p>
        <p>Watch this space for ways to engage with Femfest and for event updates.</p>
      </div>
      
    </div>
  );
}

export default Home;