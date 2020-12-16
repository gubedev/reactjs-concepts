import React, { Component } from "react";

class Forms extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.inputUsername.value;
    const twitter = this.twitter.value;
    console.log({ username, twitter });
  }

  handleAcceptsTermsChange = e => {
      console.log(e.target.checked)
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
              ref={(element) => (this.inputUsername = element)}
            />
          </p>
          <p>
            <label htmlFor="twitter">Twitter</label>
            <input 
                id="twitter" 
                name="twitter" 
                placeholder="Twitter" 
                ref={(element) => (this.twitter = element)}
            />
          </p>
          <p>
            <label htmlFor="acceptsTerms">Accepts terms</label>
            <input 
                id="acceptsTerms" 
                name="acceptsTerms" 
                type="checkbox"
                onChange={this.handleAcceptsTermsChange}
            />
          </p>
          <button>Send</button>
        </form>
      </>
    );
  }
}

export default Forms;
