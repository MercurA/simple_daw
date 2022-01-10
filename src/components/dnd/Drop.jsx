import React, { Component, createRef } from 'react';
import ReactDOM from "react-dom";

class Drop extends Component {
  dragRef = createRef(null)
  constructor(props) {
    super(props)
    this.state = {
      pos: {
        x: 100,
        y: 100
      },
      dragging: false,
      rel: null,
    }
  }

  componentDidUpdate(props, state) {
    if (this.state.dragging && !state.dragging) {
      document.addEventListener('mousemove', this.handleOnMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
    } else if (!this.state.dragging && state.dragging) {
      console.log('remove')
      document.removeEventListener('mousemove', this.handleOnMouseMove)
      document.removeEventListener('mouseup', this.handleMouseUp)
    }
  }

  handleOnMouseDown = (e) => {
    if (e.button !== 0) return
    var pos = ReactDOM.findDOMNode(this.dragRef.current)
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.offsetLeft,
        y: e.pageY - pos.offsetTop
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }

  handleMouseUp = (e) => {
    this.setState({ dragging: false })
    e.stopPropagation()
    e.preventDefault()
  }

  handleOnMouseMove = (e) => {
    if (!this.state.dragging) return
    this.setState({
      pos: {
        x: e.pageX - this.state.rel.x,
        y: e.pageY - this.state.rel.y
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }

  render() {
    return (
      <div
        ref={this.dragRef}
        style={{
          position: 'absolute',
          left: `${this.state.pos.x}px`,
          top: `${this.state.pos.y}px`,
        }}
        onMouseDown={this.handleOnMouseDown}>
        {this.props.children}
      </div>
    )

  }
}

export default Drop;