// modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Header from './Header';
import Window from './Window';
import Stream from './stream/Stream';
import StreamChat from './stream/StreamChat';
  import Home from './pages/Home';
  import Marketplace from './pages/Marketplace';
  import Library from './pages/Library';
  import VisualArt from './pages/VisualArt';
  import QueerResources from './pages/QueerResources';
  import ArchiveProjects from './pages/ArchiveProjects';

class App extends Component {
  render() {
    let sponsors = {
      "USC Student Assembly for Gender Empowerment": {
        "filename": "sage.png",
        "link": "https://www.facebook.com/SAGEUSC/"
      },
      "USC Visions & Voices": {
        "filename": "v&v.jpg",
        "link": "https://visionsandvoices.usc.edu/"
      },
      "Los Angeles LGBT Center": {
        "filename": "lgbt-center.png",
        "link": "https://lalgbtcenter.org/"
      },
      "USC Undergraduate Student Government": {
        "filename": "usg.jpg",
        "link":  "https://usg.usc.edu/"
      },
      "USC Thornton School of Music": {
        "filename": "thornton.jpg",
        "link":  "https://music.usc.edu/"
      },
      "USC Asian Pacific American Student Assembly": {
        "filename": "apasa.png",
        "link":  "https://www.uscapasa.com/"
      },
      "USC Latinx Student Assembly": {
        "filename": "lsa.png",
        "link":  "https://usclsa.org/"
      }
    };

    return (
      <React.Fragment>
        <Router>
          <Header></Header>
          <div className="container">
            <div className="desktop__icons">

              {Object.keys(sponsors).map(s => (
                <a href={sponsors[s]["link"]} key={s} className="desktop__icon">
                  <img src={"/img/sponsors/" + sponsors[s]["filename"]} alt={s + " logo"} />
                  <p>{s}</p>
                </a>
              ))}
              
              {/*<a href="https://lalgbtcenter.org/" className="desktop__icon">
                <img src="/img/sponsors/lgbt-center.png" alt="Los Angeles LGBT Center logo" />
                <p>Los Angeles Lgbt Center</p>
              </a>
              <a href="https://one.usc.edu/" className="desktop__icon">
                <img src="/img/sponsors/one-archives.png" alt="ONE Archives logo" />
                <p>ONE Archives</p>
              </a>*/}
            </div>
            <Window title="Stream" windowClass="window--stream"><Stream></Stream></Window>
            <Window title="Chat" windowClass="window--chat"><StreamChat></StreamChat></Window>
            <Switch>
              <Route exact path="/">
                <Window title="Home"><Home></Home></Window>
              </Route>
              <Route path="/marketplace">
                <Window title="Marketplace"><Marketplace></Marketplace></Window>
              </Route>
              <Route path="/library">
                <Window title="Library"><Library></Library></Window>
              </Route>
              <Route path="/visual-art">
                <Window title="Visual Art"><VisualArt></VisualArt></Window>
              </Route>
              <Route path="/queer-resources">
                <Window title="Queer Resources"><QueerResources></QueerResources></Window>
              </Route>
              <Route path="/archive-projects">
                <Window title="Archive Projects"><ArchiveProjects></ArchiveProjects></Window>
              </Route>
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;