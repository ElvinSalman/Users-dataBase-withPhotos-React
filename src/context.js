import React, { Component } from 'react'


const AppContext = React.createContext();

// const reducer =(state,action) =>{
//     switch(action.type){
        
//     }
// }

export class AppProvider extends Component {
    state={users:[],
}
    
    componentDidMount=()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => this.setState({
      users:[...data]
  }));

 
    }
    render() {
        return (
            <div>
                <AppContext.Provider value={this.state}>
                    {this.props.children}
                </AppContext.Provider>
            </div>
        )
    }
}

const AppConsumer = AppContext.Consumer;

export default AppConsumer;