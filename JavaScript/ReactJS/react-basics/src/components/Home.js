import React from 'react';

export const Home = (props) => {
    this.state = {
        headerLink: props.initialLinkName
    }
    const onHandleChange = (event)=>{
        this.setState({
            headerLink: event.target.value
        });
        //this.props.initialLinkName = event.target.value;
        //props.initialLinkName = 
    }
    
    return (
        <div>
            <input type="text"
              value={this.state.headerLink}
              onChange={(event) =>onHandleChange(event)}
            />
            <button onClick={() => props.greet("Hello!!")}>Greet</button>
        </div>

    );
};
