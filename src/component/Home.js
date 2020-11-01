import React, { Fragment } from 'react'
import {Navbar,Nav,} from 'react-bootstrap'

const Home = () => {
    return (

        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">RV Laptop Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <img src="./img/whatsapp.png" alt="whatapp icon" style={{width:'34px'}}></img>
                         <p>9356987719/8669165300 CALL US NOW</p>
                       
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </Fragment>


    )
}

export default Home