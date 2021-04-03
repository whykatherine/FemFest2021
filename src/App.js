// modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Header from './Header';
import Window from './Window';
import Stream from './windows/Stream';
import StreamChat from './windows/StreamChat';
import Playlist from './windows/Playlist';
import Home from './windows/Home';
import Marketplace from './windows/Marketplace';
import Merch from './windows/Merch';
import Library from './windows/Library';
import VisualArt from './windows/VisualArt';
import QueerResources from './windows/QueerResources';

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
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <div className="container">

            <div className="desktop__icons">
              {Object.keys(this.sponsors).map(s => (
                <a href={this.sponsors[s]["link"]} title={s} key={s}
                   className="desktop__icon"
                   target="_blank" rel="noopener noreferrer">
                  <img src={"/img/sponsors/" + this.sponsors[s]["logo"]} alt={s + " logo"} />
                </a>
              ))}
            </div>

            {/*{this.state.order.map(windowClass => (
              <React.Fragment key={windowClass}>{this.windows[windowClass]}</React.Fragment>
            ))}*/}

            <Switch>
              <Route exact path="/">
                <Window handleReorder={this.handleReorder}
                        title="Home"
                        delay={0}
                        order={this.state.order.indexOf("window--main")}>
                  <Home />
                </Window>
              </Route>
              <Route path="/marketplace">
                <Window handleReorder={this.handleReorder}
                        title="Marketplace"
                        delay={0}
                        order={this.state.order.indexOf("window--main")}>
                  <Marketplace />
                </Window>
              </Route>
              <Route path="/merch">
                <Window handleReorder={this.handleReorder}
                        title="Merch"
                        delay={0}
                        order={this.state.order.indexOf("window--main")}>
                  <Merch />
                </Window>
              </Route>
              <Route path="/library">
                <Window handleReorder={this.handleReorder}
                        title="Library"
                        delay={0}
                        order={this.state.order.indexOf("window--main")}>
                  <Library />
                </Window>
              </Route>
              <Route path="/visual-art">
                <Window handleReorder={this.handleReorder}
                        title="Visual Art"
                        delay={0}
                        order={this.state.order.indexOf("window--main")}>
                  <VisualArt />
                </Window>
              </Route>
              <Route path="/queer-resources">
                <Window handleReorder={this.handleReorder}
                        title="Queer Resources"
                        delay={0}
                        order={this.state.order.indexOf("window--main")}>
                  <QueerResources />
                </Window>
              </Route>
            </Switch>

            <Window handleReorder={this.handleReorder}
                    title="Stream"
                    windowClass="window--stream"
                    delay={200}
                    order={this.state.order.indexOf("window--stream")}>
              <Stream />
            </Window>

            <Window handleReorder={this.handleReorder}
                    title="Chat"
                    windowClass="window--chat"
                    delay={400}
                    order={this.state.order.indexOf("window--chat")}>
              <StreamChat />
            </Window>

            <Window handleReorder={this.handleReorder}
                    title="Playlist"
                    windowClass="window--playlist"
                    delay={800}
                    order={this.state.order.indexOf("window--playlist")}>
              <Playlist />
            </Window>

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