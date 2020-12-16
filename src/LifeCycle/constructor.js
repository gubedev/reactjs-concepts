import React, { Component } from 'react'

class Constructor extends Component {
  
  /* 
  constructor (...args) {
    super(...args)
  }
  */

  constructor (props) {
    console.log('constructor')
    super(props) 
   
    this.state = { message: 'welcome' }
 
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({ message: 'welcome changed' })
  }

  render () {
    console.log('render')
    return (
      <div className="App">
        <h4>constructor</h4>
        {this.state.message}
        <button onClick={this.handleClick}>
          Change
        </button>
      </div>
    );
  }
}

export default Constructor;
