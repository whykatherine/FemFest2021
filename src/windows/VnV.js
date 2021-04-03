// modules
import React from 'react';
// assets
import tegansara from '../img/vnv/FemFest_Flyer_TeganSara.jpg';
import eastside from '../img/vnv/FemFest_Flyer_EastsidePunks.jpg';
import commonground from '../img/vnv/FemFest_Flyer_CommonGroundSanctuary.jpg';

function VnV(props) {
  return (
    <div className="vnv">

      <div className="text">
        <h1>Visions & Voices</h1>
        <p>USC Visions and Voices is a university-wide arts and humanities initiative that provides a transformative and provocative experience for all USC students, regardless of their major or year in school, and challenges them to expand their perspectives and become engaged citizens.</p>
        <p><a href="https://visionsandvoices.usc.edu/" target="_blank" rel="noopener noreferrer">V&V website</a></p>
        <p><a href="https://www.youtube.com/channel/UCdM9R2UiyoX07JGJD6eQzfA" target="_blank" rel="noopener noreferrer">V&V YouTube page</a></p>
        <p><a href="https://visionsandvoices.usc.edu/get-involved/" target="_blank" rel="noopener noreferrer">V&V Get Involved page</a></p>
        <p><a href="https://artsinaction.usc.edu/" target="_blank" rel="noopener noreferrer">Arts in Action website</a></p>
        <p><a href="https://www.instagram.com/visionsandvoices/?hl=en" target="_blank" rel="noopener noreferrer">V&V Instagram</a></p>
      </div>

      <div className="text">
        <h2>4/8 - Tegan and Sara</h2>
        <p>In an intimate and inspiring live conversation, million-selling and Grammy-nominated pop music duo and twin sisters Tegan and Sara will discuss their experiences and growth as artists, authors, and activists with USC professor Karen Tongson, chair of Gender & Sexuality Studies and co-host of the podcast Waiting to X-Hale.</p>
        <p><a href="https://visionsandvoices.usc.edu/eventdetails/?event_id=35982946626711
" target="_blank" rel="noopener noreferrer">Event Details</a></p>
      </div>
      
      <div className="image">
        <img src={tegansara} alt="Visions & Voices flyer for Tegan and Sara" />
      </div>

      <div className="text">
        <h2>4/22 - Eastside Punks</h2>
        <p>Celebrate the release of three documentary shorts produced by Razorcake magazine about first-generation East L.A. punk bands. Excerpts will be screened, followed by an explosive panel featuring Eastside Punks director Jimmy Alvarado and musicians Tracy “Skull” Garcia (Thee Undertakers), Teresa Covarrubias (The Brat), and Jack Rivera (Stains)—who played storied L.A. punk venues such as The Vex and the Hong Kong Café alongside influential bands such as The Plugz, X, and Black Flag. The conversation will be moderated by Dino Everett, archivist for Eastside Punks and the USC School of Cinematic Arts. </p>
        <p><a href="https://visionsandvoices.usc.edu/eventdetails/?event_id=36262935745515" target="_blank" rel="noopener noreferrer">Event Details</a></p>
      </div>

      <div className="image">
        <img src={eastside} alt="Visions & Voices flyer for Eastside Punks" />
      </div>

      <div className="text">
        <h2>4/29 - Sanctuary</h2>
        <p>In a live broadcast straight from Downtown Los Angeles, an ensemble of musicians led by Solidarity for Sanctuary executive director and Annenberg Lab fellow Doris Muñoz will pay tribute to club spaces that nurture Black and Brown art. Following the performance, Muñoz and noted violinist, activist, and USC Thornton School of Music instructor Jazmín Morales will discuss the concept of sanctuary as both a physical place of safety and a condition upon which creativity depends.</p>
        <p><a href="https://visionsandvoices.usc.edu/eventdetails/?event_id=36158542985159" target="_blank" rel="noopener noreferrer">Event Details</a></p>
      </div>

      <div className="image">
        <img src={commonground} alt="Visions & Voices flyer for Common Ground Sanctuary" />
      </div>

    </div>
  );
}

export default VnV;