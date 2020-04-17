import React, { Component } from "react";
import { render } from "react-dom";
import App from "./AppComponent";
import "./style.css";

class Main extends Component {
  render() {
    return (
      <div align="center">
        <p><b>Data not passed from MainComponent to AppComponent</b></p>
        <p>Displaying Default values of props</p>
        <App />

        <p><b>Valid data passed from MainComponent to AppComponent</b></p>
        <App name="Ram" cities={["Pune", "Hyderabad"]} age={33} />

        <p><b>Invalid data passed from MainComponent to AppComponent</b></p>
        <p>Given inputs: name=['Ravi'] cities='Pune' age=65</p>
        <App name={["Ravi"]} cities={"Pune"} age={65} />
        
         <p><b>Invalid data passed from MainComponent to AppComponent</b></p>
        <p>Given inputs: name=null cities=['Vizag', 'Kerala'] age=10</p>
        <App name={null} cities={["Vizag", "Kerala"]} age={10} />
      </div>
    );
  }
}

render(<Main />, document.getElementById("root"));
