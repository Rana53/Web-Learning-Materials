import React,{Component} from 'react';

class Bootstrap extends Component{
    state = {
        contacts: []
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
          console.log(this.state.contacts)
        })
        .catch(console.log)
      }
}

export default Bootstrap;