import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { UserProfileForm } from '../src/features/UserProfile/dali.userprofile.form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showMe: false, clicks: 0};
  }

  handleShowMeClick = () => {
    if (!this.state.showMe)
    {
      this.setState((prevState) => ({
        showMe: true,
        clicks: prevState.clicks + 1
     }));
    }
    else
    {
      this.setState({showMe: false});
    }
  }
  
  render() {
    let showMeControl;

    if (this.state.showMe) {
      showMeControl = <h1>hello {this.state.clicks}</h1>;
    }
    else
    {
      showMeControl = null;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button onClick={this.handleShowMeClick}>Show Me</Button>
        </p>
        <UserProfileForm />
        {showMeControl}
      </div>
    );
  }
}

export default App;
