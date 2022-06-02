import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

// algorithm
// 1. show "LOGIN" by default
// 2. after "LOGIN" click Spinner for 3 seconds
// 3. in 3 sec hide Spinner, show "LOGOUT"
// 4. after "LOGOUT" click show "LOGIN"

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;
    if (isProcessing) {
      return <Spinner />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }

    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
