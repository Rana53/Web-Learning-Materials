import React, {Component} from 'react';
import './App.css';
import { Fragment } from 'react';

import Header from './comoponent/header';

class App extends Component {
  render(){
    const images = [
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
      "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
      "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ];
    return(
      <Fragment> 
       < Header/>
        <div className="container" style={{height:"400px", backgroundColor:"#e2e2e2"}}>
        <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8" style={{height:"100%",width:"100%"}}>
        
          <div id="mycarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#mycarousel" data-slide-to="0" ></li>
              <li data-target="#mycarousel" data-slide-to="1" className="active"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img style={{maxWidth:"100%", maxHeight:"100%"}} src={images[0]}/>
              </div>
             </div>
            </div>
          </div>

          <div className="col-md-2"></div> 
        </div>
        </div>

        <div className="container">
        
          
      </div>
      </Fragment>   
    )  
  }
}

export default App;
