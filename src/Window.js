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
    this.handleDrag = this.handleDrag.bind(this);
  }

  render() {
    let windowClass = this.props.windowClass || "window--main";
    return (
      <div className={"window " + windowClass}>
        <div className="window__bar" onClick={this.handleClick} onDrag={this.handleDrag} draggable>
          {this.props.title}
        </div>
        <div className={"window__content" + ((this.state.isHidden) ? " hidden" : "")}>
          {this.props.children}
        </div>
      </div>
    );
  }

  handleClick(event) {
    this.setState((state, props) => ({
      isHidden: !state.isHidden
    }));
  }

  handleDrag(event) {
    console.log(event);
    this.focus();
  }
}

export default Window;