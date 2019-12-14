import React,{ Component} from 'react';

class Header extends Component{
    state = {
        keyword: 'maxi'
    }
    inputChanged = () => {  
      //console.log('changed');
      this.setState({
        keyword: "word"
      });
    }

    render() {
      console.log(this.state.keyword);
      return (
        <header>
          <div>Logo</div>
          <input 
            type="text" 
            onChange={this.inputChanged}
          />
        </header>      
      )
    }  
}
export default Header;