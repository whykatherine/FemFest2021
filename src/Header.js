// modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
// assets
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "menuIsOpen": false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  render() {
    return (
      <header className={"header " + ((this.state.menuIsOpen) ? "menuOpen" : "")}>
        <div>
          <Link to="/"><img className="logo" src={logo} alt="FemFest logo" /></Link>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link to="/merch">Merch</Link>
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
              <li id="date">
                <span title="be there or be square :)">4/3/21</span>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1k2ufAhjtYr4gVxSjvz8GwJd7hq1yJwKn"
                  target="_blank" rel="noreferrer">
                  FemFest Backgrounds
                </a>
              </li>
              <li>
                <a href="https://instagram.com/uscfemfest"
                  aria-label="Instagram" title="Instagram"
                  target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/USCFemFest"
                  aria-label="Twitter" title="Twitter"
                  target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitch.tv/femfest"
                  aria-label="Twitch" title="Twitch"
                  target="_blank" rel="noreferrer">
                  <i className="fab fa-twitch" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/playlist/27YwAmEiOtgthJhSM3eBBT?utm_source=embed_v2&go=1&play=1&nd=1"
                  aria-label="Spotify" title="Spotify"
                  target="_blank" rel="noreferrer">
                  <i className="fab fa-spotify" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="menuIcon" onClick={this.toggleMenu}>
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>
      </header>
    );
  }

  toggleMenu() {
    this.setState((state) => ({
      menuIsOpen: !state.menuIsOpen
    }));
  }
}

export default Header;