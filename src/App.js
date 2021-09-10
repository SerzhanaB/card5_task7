import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { class: "off", label: "Отображаемый текст на кнопке" };
    this.press = this.press.bind(this);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("component Did mount");
  }

  shouldComponentUpdate() {
    console.log("should Component Update");
    return true;
  }

  componentDidUpdate() {
    console.log("component Did update");
  }

  componentWillUnmount() {
    console.log("component Will Unmount");
  }

press() {

  var className =(this.state.class==="off") ? "on": "off"; 
  this.setState({class:className});
}

render () {

  console.log("render");
  return <button onClick={this.press} className={this.state.class}> {this.state.label} </button>;

}
}

export default App;
