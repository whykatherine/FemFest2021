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

class App extends Component {
  render() {
    let sponsors = {
      "USC Student Assembly for Gender Empowerment": {
        "logo": "sage.png",
        "link": "https://www.facebook.com/SAGEUSC/"
      },
      "USC Visions & Voices": {
        "logo": "v&v.jpg",
        "link": "https://visionsandvoices.usc.edu/"
      },
      "Los Angeles LGBT Center": {
        "logo": "lgbt-center.png",
        "link": "https://lalgbtcenter.org/"
      },
      "USC Undergraduate Student Government": {
        "logo": "usg.jpg",
        "link":  "https://usg.usc.edu/"
      },
      "USC Thornton School of Music": {
        "logo": "thornton.jpg",
        "link":  "https://music.usc.edu/"
      },
      "USC Asian Pacific American Student Assembly": {
        "logo": "apasa.png",
        "link":  "https://www.uscapasa.com/"
      },
      "USC Latinx Student Assembly": {
        "logo": "lsa.png",
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
                <a href={sponsors[s]["link"]} key={s} className="desktop__icon" target="_blank" rel="noreferrer">
                  <img src={"/img/sponsors/" + sponsors[s]["logo"]} alt={s + " logo"} />
                  <p>{s}</p>
                </a>
              ))}
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
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;