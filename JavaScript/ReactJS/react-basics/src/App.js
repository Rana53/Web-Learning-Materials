import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor(){
      super();
      this.state = {
          status: 0,
          homeLink: "Home"
      };
   }
  changeLink(newHomeLink){
      this.setState({
        homeLink: newHomeLink
      });
  }
  render() {
      return (
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      <Header homeLink={this.state.homeLink}/>
                  </div> 
              </div>
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      <Home 
                          greet={this.changeLink.bind(this)}
                          initialLinkName={this.state.homeLink}    
                      />
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
