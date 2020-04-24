import React, { Component } from 'react'
import posed from 'react-pose';
import "./Navbar.css"

import HamburgerMenu from 'react-hamburger-menu'
import {Link} from 'react-router-dom';


const Animation = posed.div({
    closed: { height: 0 },
    open: { height: 'auto' }
})

export default class Navbar extends Component {
    state={
        open:false,
    }

    handleClick() {
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        const {open} = this.state
        const {title} = this.props;

        return (
            <nav className='navbar-nav navbar navbar-expand-lg navbar-darg bg-dark mb-3 p-3'>
            <Link to='/' className='navbar-brand'>{title}</Link>

            <span  className='span-ham'>
            <HamburgerMenu
            className='ham'
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={35}
            height={25}
            strokeWidth={3}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
            />
            </span>
            <Animation className="animation ml-auto" pose={open? 'open' : 'closed'}>
            <ul className='navbar-nav ml-auto ul'>       
                <li className='nav-item active'> 
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item active'> 
                    <Link to='/users' className='nav-link'>Users</Link>
                </li>
            </ul>
            </Animation>
        </nav>
        )
    }
}
