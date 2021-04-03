// modules
import React from 'react';
// assets
import lineup from '../img/lineup.jpg';

function Home(props) {
  return (
    <div className="home">

      <div className="text">
        <h1 data-content="FEMFEST 2021">FEMFEST 2021</h1>
        <p>04.03.21</p>
        <p>4–9 PM PST</p>
      </div>

      <div className="text">
        <h2>Enter the Fest</h2>
        <p>Welcome! There are three equally great ways you can enjoy the show today:</p>
        <h3>Topia</h3>
        <p>Get the full interactive experience of our vibrantly designed virtual space in <a href="https://topia.io/femfest">Topia</a>.</p>
        <h3>Website</h3>
        <p>Put the show on in the background right here while you browse our content.</p>
        <h3>Twitch</h3>
        <p>Focus on watching the show on <a href="https://twitch.tv/femfest">Twitch</a>, for maximum audio and visual enjoyment.</p>
      </div>

      <div className="image">
        <img src={lineup} alt="FemFest 2021 lineup" />
      </div>

      <div className="text">
        <h2 data-content="Mission Statement">Mission Statement</h2>
        <p>SAGE’s FemFest aims to be an inclusive safe space that highlights those oppressed by the patriarchy in the music industry. Intersectional at our core, FemFest is open to everyone, and specifically amplifies the voices of women, people of color, and those within the LGBTQ+ community.</p>
        <p>This year, due to the novel coronavirus, Femfest will be held online. This unprecedented opportunity gives our committee the chance to create a new experience for the USC community. Not just a music festival, Femfest will strive to entertain, educate and empower those who oppose the patriarchy.</p>
        <p>Watch this space for ways to engage with Femfest and for event updates.</p>
      </div>
      
    </div>
  );
}

export default Home;