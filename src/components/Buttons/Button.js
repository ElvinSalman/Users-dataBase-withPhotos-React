import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Button extends Component {
    render() {
        const {id,name} =this.props;
        return (
            <li>
                <Link to={`users/${id}`}>
                    {name}
                </Link>
            </li>
        )
    }
}
