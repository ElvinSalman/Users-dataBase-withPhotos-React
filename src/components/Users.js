import React, { Component } from 'react'

import AppConsumer from '../context';
import Button from './Buttons/Button';


export default class Users extends Component {
    render() {
        return (
            <AppConsumer>
                {value=>{
                    const {users} = value;
                    return(
                        <div>      
                            {
                                users.map((user)=>{
                                    return(
                                        <span key={user.id}>
                                        <ul style={{listStyle:'none',cursor:'pointer',width:200,padding:0}}>
                                           
                                        <Button
                                         id={user.id}
                                         name={user.name}/>
                                        </ul>
                                        </span>
                                        //  <User
                                        // photo={photos[index]}
                                        // index={index}
                                        // user={user}
                                        // />  
                                        
                                    )
                                })
                            }
                        </div>
                    )
                }}
            </AppConsumer>
        )
    }
}
