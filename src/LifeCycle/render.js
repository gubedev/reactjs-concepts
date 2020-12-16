import React, { Component } from 'react'

const HelloRender = (props) => <h1>Render!</h1>

class Render extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = { message: 'welcome' }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
    console.log('render')
    return [
      <h1 key='A'>1</h1>,
      <HelloRender key='B' />,
      <HelloRender key='C' />,
      <h3 key='D'>4</h3>
    ]
  }
}

export default Render
