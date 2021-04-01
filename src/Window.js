// modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// assets
import './Window.css';

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "isHidden": false,
      "isMaximized": false
    }
    this.windowClass = this.props.windowClass || "window--main";
    this.pos = [0, 0, 0, 0];
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.elementDrag = this.elementDrag.bind(this);
    this.closeDragElement = this.closeDragElement.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isMaximized: true
      });
    }, this.props.delay);
  }

  render() {
    return (
      <div className={
        "window "
        + this.windowClass
        + ((this.state.isMaximized) ? " maximized" : "")
        + ((this.state.isHidden) ? " hidden" : "")}>
        <div className="window__content">
          {this.props.children}
        </div>
        <div className="window__bar" onMouseDown={this.handleMouseDown}>
          <span className="window__bar_title" onMouseDown={this.handleClick}>{this.props.title}</span>
        </div>
      </div>
    );
  }

  handleClick(event) {
    this.setState((state, props) => ({
      isHidden: !state.isHidden
    }));
  }

  // drag handling code
  // https://www.w3schools.com/howto/howto_js_draggable.asp

  handleMouseDown(e) {
    // e = e || window.event;
    e.preventDefault();
    // bring window to top
    this.props.handleReorder(this.windowClass);
    // get the mouse cursor position at startup:
    this.pos[2] = e.clientX;
    this.pos[3] = e.clientY;
    document.onmouseup = this.closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = this.elementDrag;
  }

  elementDrag(e) {
    // e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    this.pos = [
      this.pos[2] - e.clientX,
      this.pos[3] - e.clientY,
      e.clientX,
      e.clientY
    ];
    // set the element's new position:
    this.setState({
      "top": (ReactDOM.findDOMNode(this).offsetTop - this.pos[1]) + "px",
      "left": (ReactDOM.findDOMNode(this).offsetLeft - this.pos[0]) + "px"
    });
  }

  closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export default Window;