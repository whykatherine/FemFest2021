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
    this.closeMenu = this.closeMenu.bind(this);
  }

  render() {
    return (
      <header className={"header " + ((this.state.menuIsOpen) ? "menuOpen" : "")}>
        <div>
          <Link to="/" onClick={this.closeMenu}><img className="logo" src={logo} alt="FemFest logo" /></Link>
          <nav className="nav nav--main">
            <ul>
              <li>
                <Link to="/" onClick={this.closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/marketplace" onClick={this.closeMenu}>Marketplace</Link>
              </li>
              <li>
                <Link to="/merch" onClick={this.closeMenu}>Merch</Link>
              </li>
              <li>
                <Link to="/library" onClick={this.closeMenu}>Library</Link>
              </li>
              <li>
                <Link to="/queer-resources" onClick={this.closeMenu}>Queer Resources</Link>
              </li>
              <li>
                <Link to="/visions-and-voices" onClick={this.closeMenu}>Visions & Voices</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav className="nav nav--socials">
            <ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1k2ufAhjtYr4gVxSjvz8GwJd7hq1yJwKn"
                  target="_blank" rel="noopener noreferrer">
                  FemFest Backgrounds
                </a>
              </li>
              <li>
                <a href="https://topia.io/femfest"
                  target="_blank" rel="noopener noreferrer">
                  Topia
                </a>
              </li>
              <li>
                <a href="https://instagram.com/uscfemfest"
                  aria-label="Instagram" title="Instagram"
                  target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/USCFemFest"
                  aria-label="Twitter" title="Twitter"
                  target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitch.tv/femfest"
                  aria-label="Twitch" title="Twitch"
                  target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitch" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/playlist/27YwAmEiOtgthJhSM3eBBT?utm_source=embed_v2&go=1&play=1&nd=1"
                  aria-label="Spotify" title="Spotify"
                  target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-spotify" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="menuIcon" onClick={this.toggleMenu}>
          <i className={"fas " + ((this.state.menuIsOpen) ? "fa-times" : "fa-bars")} aria-hidden="true"></i>
        </button>
      </header>
    );
  }

  toggleMenu() {
    this.setState((state) => ({
      menuIsOpen: !state.menuIsOpen
    }));
  }

  closeMenu() {
    this.setState({
      menuIsOpen: false
    })
  }
}

export default Header;