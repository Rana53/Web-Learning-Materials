import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';
import ItemList from './components/item-list';
import JSON from './db.json';

class App extends Component{
  state = {
    items : JSON,
    filteded: []

  }
  getKeyword = (event) => {
    let keyword = event.target.value;
    let filterItem = this.state.items.filter((item) => {
      return item.title.indexOf(keyword) > -1;
    });
    this.setState({
      filteded: filterItem
    });
  }

  render() {
    return (
      <div>
        <Header keyword={this.getKeyword}/>
        <ItemList items={this.state.filteded.length === 0 ? this.state.items: this.state.filteded}/>
      </div>
    )
  }
  
}

ReactDom.render(<App/>, document.querySelector('#root'));
