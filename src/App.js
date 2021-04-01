// modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Header from './Header';
import Window from './Window';
import Stream from './stream/Stream';
import StreamChat from './stream/StreamChat';
import Playlist from './Playlist';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Merch from './pages/Merch';
import Library from './pages/Library';
import VisualArt from './pages/VisualArt';
import QueerResources from './pages/QueerResources';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "order": ["window--main", "window--stream", "window--chat", "window--playlist"]
    }
    this.handleReorder = this.handleReorder.bind(this);

    this.sponsors = {
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

    // bit hack-y, think how to refactor
    this.windows = {
      'window--stream': (
        <Window handleReorder={this.handleReorder}
                title="Stream"
                windowClass="window--stream"
                top="480px"
                left="40%"
                width="50%">
          <Stream />
        </Window>
      ),
      'window--chat': (
        <Window handleReorder={this.handleReorder}
                title="Chat"
                windowClass="window--chat"
                top="50px"
                left="63%"
                width="20%">
          <StreamChat />
        </Window>
      ),
      'window--playlist': (
        <Window handleReorder={this.handleReorder}
                title="Playlist"
                windowClass="window--playlist"
                top="600px"
                left="10%"
                width="24%">
          <Playlist />
        </Window>
      ),
      'window--main': (
        <Switch>
          <Route exact path="/">
            <Window handleReorder={this.handleReorder}
                    title="Home">
              <Home />
            </Window>
          </Route>
          <Route path="/marketplace">
            <Window handleReorder={this.handleReorder}
                    title="Marketplace">
              <Marketplace />
            </Window>
          </Route>
          <Route path="/merch">
            <Window handleReorder={this.handleReorder}
                    title="Merch">
              <Merch />
            </Window>
          </Route>
          <Route path="/library">
            <Window handleReorder={this.handleReorder}
                    title="Library">
              <Library />
            </Window>
          </Route>
          <Route path="/visual-art">
            <Window handleReorder={this.handleReorder}
                    title="Visual Art">
              <VisualArt />
            </Window>
          </Route>
          <Route path="/queer-resources">
            <Window handleReorder={this.handleReorder}
                    title="Queer Resources">
              <QueerResources />
            </Window>
          </Route>
        </Switch>
      )
    };
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <div className="container">

            <div className="desktop__icons">
              {Object.keys(this.sponsors).map(s => (
                <a href={this.sponsors[s]["link"]} title={s} key={s} className="desktop__icon" target="_blank" rel="noreferrer">
                  <img src={"/img/sponsors/" + this.sponsors[s]["logo"]} alt={s + " logo"} />
                </a>
              ))}
            </div>

            {this.state.order.map(windowClass => (
              <React.Fragment key={windowClass}>{this.windows[windowClass]}</React.Fragment>
            ))}

          </div>
        </Router>
      </React.Fragment>
    );
  }

  /**
   * Bring dragged windows to front.
   * @param string windowClass Name of window to bring to front.
   */
  handleReorder(windowClass) {
    // this.windows.
    let index = this.state.order.indexOf(windowClass);
    // make a copy to work on
    let newOrder = this.state.order.slice();
    // move element to end of array
    newOrder.push(newOrder.splice(index, 1)[0])
    this.setState({
      order: newOrder
    });
  }
}

export default App;