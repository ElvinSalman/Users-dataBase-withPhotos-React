import React, { Component } from 'react'
import './User.css'
import Loader from '../Loader/Loader'

export default class User extends Component {
    state={
        name:'',
        username:'',
        address:[],
        url:''
    }
    componentDidMount=async()=> {
        const {id} = this.props.match.params;

        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
        .then(json => this.setState({
            url:json.url
        }))
         

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => this.setState({
            name:json.name,
            username:json.username,
            address:json.address
        }))
        
    }

    render() {
        const{username,url,name,address}=this.state;
   
        return (
            
            <div className="card">
                
                {(name==='' && url==='')?<Loader/>:
                <React.Fragment>
                 <div className="card-header">
                 <h1>{username}</h1>
                 </div>
                 <div className='row'>
                 <div className="col-md-2">
                  <img className='img' src={url} alt=''/>
                 </div>
                 <div className="col-md-10">
                 <div className="card-body">
                 <h5 className="card-title">Name: {name}</h5>
                 <p className="card-text">Address: {address.street} </p> 
                 <p className="card-text">ZipCode: {address.zipcode} </p> 
                 </div>
                 </div>
                 </div>
                 </React.Fragment>
                }
               
                        
            </div>
        )
    }
}
