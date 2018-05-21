import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';


class Navigation extends Component {
  render() {
    return (

<Navbar inverse collapseOnSelect>
	<Navbar.Header>
		<Navbar.Brand>
		<NavLink exact strict to="/" activeClassName='active-link'>Home</NavLink>
	</Navbar.Brand>
	<Navbar.Toggle />
	</Navbar.Header>
	<Navbar.Collapse>
	  		<div className="collapse-navigation">
	  		<ul className="pullLeft">
			<li><NavLink exact strict to="/about" activeClassName='active-link'>About us</NavLink></li>
			<li><NavLink exact strict to="/gallery" activeClassName='active-link'>Gallery</NavLink></li>
			<li><NavLink exact strict to="/contact" activeClassName='active-link'>Contact us</NavLink></li>
			</ul>
			<ul className="pullRight">
			<li><NavLink exact strict to="/sign-in" activeClassName='active-link'>Sign in</NavLink></li>
			</ul>
			</div>
	</Navbar.Collapse> 
</Navbar>
    );
  }
}

export default Navigation;
