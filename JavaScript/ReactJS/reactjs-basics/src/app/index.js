import React from "react";
import { render } from "react-dom";

class App extends React.Component {
    render() {
        return { 
            <h1>Hello!</h1>
        };
    }
}
render(<App/>, window.document.getElementById("app"));