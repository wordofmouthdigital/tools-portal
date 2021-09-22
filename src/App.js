import React, { Component } from "react"
import netlifyIdentity from "netlify-identity-widget";
import logo from "./logo.svg"
import "./App.css"
import { MarketingCalculator } from "./tools/MarketingCalculator"
import { loginUser, logoutUser } from "./identityActions";

class App extends Component {
  state = {user: null};

  componentDidMount() {
    const user = localStorage.getItem("currentOpenSaucedUser");

    if (user) {
      this.setState({user: JSON.parse(user)});
    } else {
      loginUser();
    }

    netlifyIdentity.on("login", (user) => this.setState({user}, loginUser()));
    netlifyIdentity.on("logout", (user) => this.setState({user: null}, logoutUser()));
  }

  handleLogIn = () => {
    netlifyIdentity.open();
  }

  handleLogOut = () => {
    netlifyIdentity.logout();
  }

  render() {
    const checkLogin = () => {
      if (!!this.state.user) {
        return (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <MarketingCalculator />
          </>
        );
      }
      return <a onClick={this.handleLogIn}>Welcome to Word of Mouth Digital Marketing Tools</a>;
    }
    return (
      <div className="App">
        <header className="App-header">
          { checkLogin() }
        </header>
      </div>
    )
  }
}

export default App
