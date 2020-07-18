import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg=""  expand="lg">
                    <Navbar.Brand href="/"><img
                        alt=""
                        src="data:image/png;base64,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"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="links" to="/">Home</NavLink>
                            <NavLink className="links" to="/productos">Productos</NavLink>
                            <NavLink className="links" to="/recetas">Recetas</NavLink>
                            <NavLink className="links login" to="/login">Login</NavLink>
                            <NavLink className="links login" to="/signUp">Sign Up</NavLink>
                            <NavLink className="links" to="/carrito">Carrito</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}