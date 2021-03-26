// modules
import React, { Component } from 'react';
// assets
import './Window.css';

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "isHidden": false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let windowClass = this.props.windowClass || "window--main";
    return (
      <div className={"window " + windowClass}>
        <div className="window__bar" onClick={this.handleClick}>{this.props.title}</div>
        <div className={"window__content" + ((this.state.isHidden) ? " hidden" : "")}>
          {this.props.children}
        </div>
      </div>
    );
  }

  handleClick(event) {
    console.log(event);
    this.setState((state, props) => ({
      isHidden: !state.isHidden
    }));
  }
}

export default Window;