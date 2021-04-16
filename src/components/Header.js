import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg">
                <Router>
                    <LinkContainer to='/'>
                        <Navbar.Brand><h2 style={{ color: 'White' }}>Pledge Foundation</h2></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <h2 ><a style={{ color: 'white' }} href="https://www.thesparksfoundationsingapore.org/">About Us</a></h2>
                        </Nav>
                    </Navbar.Collapse>
                </Router>

            </Navbar>
        </header>
    )
}

export default Header
