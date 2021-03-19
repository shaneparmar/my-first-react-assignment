import React, {Component} from "react";
import './App.css';

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

  state = {
    username= "Shane";
  }
  render(){
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName= {this.state.username}/>
        <UserOutput userName= {this.state.username}/>
        <UserOutput userName= "Shane"/>
      </div>
    );
  }
}

export default App;
