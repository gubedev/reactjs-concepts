import React, { Component } from 'react'

class ComponentWillMount extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = { message: 'welcome' }
  }

  componentWillMount () {
    console.log('componentWillMount')
    this.setState({ message: 'welcome changed' })
  }

  render () {
    console.log('render')
    return (
      <div>
        <h4>componentWillMount</h4>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default ComponentWillMount
