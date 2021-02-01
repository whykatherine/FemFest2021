// modules
import React from 'react';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="sponsors">
        <p>Sponsored by</p>
        <div>
          <a href="https://lalgbtcenter.org/">
            <img src="/img/sponsors/lgbt center 1.png" alt="LA LGBT Center logo" height="200" />
          </a>
        </div>
      </div>
      <nav className="nav socials">
        <ul>
          <li>
            <a href="https://instagram.com/uscfemfest" aria-label="Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
      <p>&copy; FemFest 2021</p>
    </footer>
  );
}

export default Footer;