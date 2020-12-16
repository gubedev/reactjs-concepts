import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.initialCounter
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 })
          }, 1000)
    }

    render() {
        return (
            <>
                {this.state.counter}
            </>
        );
    }
}

Counter.defaultProps = {
    initialCounter: 0
}

export default Counter;