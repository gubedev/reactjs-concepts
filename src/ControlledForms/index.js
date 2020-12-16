import React, { Component } from "react";

class ControlledForms extends Component {
  
  constructor() {
    super()
    this.state = {
      username: "username",
      twitter: "twitter",
      acceptsTerms: true
    }
  }
  
  
  handleSubmit = e => {
    e.preventDefault();  
    console.log(this.state);
  }

  
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h4>Forms</h4>
          <p>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={e=> this.setState({ username: e.target.value })}
            />
          </p>
          <p>
            <label htmlFor="twitter">Twitter</label>
            <input 
                id="twitter" 
                name="twitter" 
                placeholder="Twitter" 
                value={this.state.twitter}
                onChange={e => this.setState({twitter: e.target.value })}
            />
          </p>
          <p>
            <label htmlFor="acceptsTerms">Accepts terms</label>
            <input 
                id="acceptsTerms" 
                name="acceptsTerms" 
                type="checkbox"
                checked={this.state.acceptsTerms}
                onChange={e => this.setState({ acceptsTerms: e.target.checked })}
            />
          </p>
          <button>Send</button>
        </form>
      </>
    );
  }
}

export default ControlledForms;
