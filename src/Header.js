// modules
import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header(props) {
  // let date = new Date();
  // let date_str = date.getHours() + ":" + date.getMinutes();
  return (
    <header className="header">
      <div>
        <Link to="/"><img className="logo" src="/img/logo.png" alt="FemFest logo" /></Link>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/marketplace">Marketplace</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/visual-art">Visual Art</Link>
            </li>
            <li>
              <Link to="/queer-resources">Queer Resources</Link>
            </li>
            <li>
              <Link to="/archive-projects">Archive Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {/*<span>{date_str}</span>*/}
        <nav className="nav socials">
          <ul>
            <li>
              <a href="https://instagram.com/uscfemfest" aria-label="Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://twitch.tv/femfest" aria-label="Twitch">
                <i className="fab fa-twitch" aria-hidden="true"></i>
              </a>
              <a href="https://open.spotify.com/playlist/27YwAmEiOtgthJhSM3eBBT?utm_source=embed_v2&go=1&play=1&nd=1" aria-label="Spotify">
                <i className="fab fa-spotify" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;