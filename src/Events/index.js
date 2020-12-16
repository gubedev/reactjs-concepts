import React, { Component } from 'react';

// rcc 

class Events extends Component {
    constructor() {
        super()
        this.state = {
            mouseX:0,
            mouseY:0
        }

        //this.handleMouseMove = this.handleMouseMove.bind(this)
    }
    
    
    handleClick(e) {
        console.log(e)
        console.log(e.nativeEvent)
    }
    
    // can use arrow funcition for bind
    
    handleMouseMove(e) {
        const { clientX, clientY } = e
        console.log(clientX, clientY)
        this.setState( {
            mouseX: clientX,
            mouseY: clientY
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this)}>
                    Click me!
                </button>
                <p 
                    onMouseMove={this.handleMouseMove.bind(this)}
                    style={{border: '1px solid gray', width: '100px'}}>
                    {this.state.mouseX}, {this.state.mouseY}
                </p>
            </>
        );
    }
}

export default Events;