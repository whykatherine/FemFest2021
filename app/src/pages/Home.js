// modules
import React from 'react';
// components
import Gallery from '../Gallery';

function Home(props) {
  return (
    <div className="home">

      <div className="text">
        <h1 data-content="FEMFEST 2021">FEMFEST 2021</h1>
        <p>COMING SOON</p>
        <iframe className="spotify" src="https://open.spotify.com/embed/playlist/27YwAmEiOtgthJhSM3eBBT" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>

      <div className="text">
        <h2 data-content="Mission Statement">Mission Statement</h2>
        <p>SAGE’s FemFest aims to be an inclusive safe space that highlights those oppressed by the patriarchy in the music industry. Intersectional at our core, FemFest is open to everyone, and specifically amplifies the voices of womxn, people of color, and those within the LGBTQ+ community.</p>
        <p>This year, due to the novel coronavirus, Femfest will be held online. This unprecedented opportunity gives our committee the chance to create a new experience for the USC community. Not just a music festival, Femfest will strive to entertain, educate and empower those who oppose the patriarchy.</p>
        <p>Watch this space for ways to engage with Femfest and for event updates.</p>
      </div>

      {/*<Gallery
        img_dir="/img/2020/costume-contest"
        title="Costume Contest 2020"
        description="A challenge to Instagram on spooky season.">
      </Gallery>*/}
      
    </div>
  );
}

export default Home;