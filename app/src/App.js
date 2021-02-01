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
    return (
      <React.Fragment>
        <Router>
          <Header></Header>
          <div className="container">
            <div className="desktop__icons">
              <a href="https://lalgbtcenter.org/" className="desktop__icon">
                <img src="/img/sponsors/lgbt center 1.png" alt="LA LGBT Center logo" />
                <p>The LA Lgbt Center</p>
              </a>
              <a href="https://one.usc.edu/" className="desktop__icon">
                <img src="/img/sponsors/one archives.svg" alt="ONE Archives logo" />
                <p>ONE Archives</p>
              </a>
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