// modules
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
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
          </ul>
        </nav>
      </div>
      <div>
        <nav className="nav socials">
          <ul>
            <li>
              <a href="" title="be there or be square :)">
                <span>4/3/21</span>
              </a>
              <a href="https://instagram.com/uscfemfest" aria-label="Instagram" title="Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://twitch.tv/femfest" aria-label="Twitch" title="Twitch">
                <i className="fab fa-twitch" aria-hidden="true"></i>
              </a>
              <a href="https://open.spotify.com/playlist/27YwAmEiOtgthJhSM3eBBT?utm_source=embed_v2&go=1&play=1&nd=1" aria-label="Spotify" title="Spotify">
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