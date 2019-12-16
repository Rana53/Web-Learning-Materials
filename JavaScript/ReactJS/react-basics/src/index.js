import React from 'react';
import ReactDom from 'react-dom';
/*
bellow code for react-basic
import Header from './components/header';
import ItemList from './components/item-list';
import JSON from './db.json';
*/
import Home from './components/route-lifecycle/home';
import Posts from './components/route-lifecycle/posts';
import PostItem from './components/route-lifecycle/post-item';
import Profile from './components/route-lifecycle/profile';
import LifeCycle from './components/route-lifecycle/life-cycle';
import { BrowserRouter, Route, Link } from "react-router-dom";

 
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link><br/>
        <Link to="/posts">Posts</Link><br/>
        <Link to="/profile">Profile</Link><br/>
        <Link to="/life">LifeCycle</Link><br/>
      </header>
      <Route path="/posts/:id/:username" component={PostItem}/>
      <Route path="/posts" exact component={Posts}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/life" component={LifeCycle}/>
      <Route path="/" exact component={Home}/>
    </BrowserRouter>
  )
}

// bellow code for react-basic
// class App extends Component{
//   state = {
//     items : JSON,
//     filteded: []

//   }
//   getKeyword = (event) => {
//     let keyword = event.target.value;
//     let filterItem = this.state.items.filter((item) => {
//       return item.title.indexOf(keyword) > -1;
//     });
//     this.setState({
//       filteded: filterItem
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Header keyword={this.getKeyword}/>
//         <ItemList items={this.state.filteded.length === 0 ? this.state.items: this.state.filteded}/>
//       </div>
//     )
//   }
  
// }

ReactDom.render(
  <App/>, 
  document.querySelector('#root')
);
