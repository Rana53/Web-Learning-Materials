import React, {Component} from 'react';

class LifeCycle extends Component{
  state = {
    title: 'Life Cycle'
  }
  componentDidMount() {
    console.log('After rendering');
  }
  componentWillMount() {
    console.log('Before rendering');
  }
  componentWillUpdate() {
    console.log('Before Update');
  }
  componentDidUpdate(){
    console.log('After Update');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log(this.state.title);
    console.log(nextState);
    return true;
  }
  componentWillReceiveProps(){
    console.log('Before receive props');
  }
  componentWillUnmount() {
    console.log('Unmount');
  }
  
  render(){
    console.log('render');
    return(
      <div>
        <h3>{this.state.title}</h3>
        <button 
          onClick={ 
            () => this.setState(
              {title: 'Title Changed'})
          }>
          Change Me
        </button>
      </div>
    )
  }
}

export default LifeCycle;