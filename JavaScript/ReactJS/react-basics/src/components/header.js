import React,{ Component} from 'react';

class Header extends Component{
    render() {
      return (
        <header>
          <div>Logo</div>
          <input 
            type="text" 
            onChange={this.props.keyword}
          />
        </header>      
      )
    }  
}
export default Header;