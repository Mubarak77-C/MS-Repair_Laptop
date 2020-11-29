import React, { Fragment } from 'react'
import { Navbar, Nav, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Slide from "./Slide"
import List from "./List"
import Service from "./Service"
import Info from "./Info"
import Footers from "./Footers"


const Home = () => {
    return (

        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">MS Laptop Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink exact activeClassName="active_class" to="/MS-Repair_Laptop/">Home</NavLink>

                        <NavLink exact activeClassName="active_class" to="/MS-Repair_Laptop/About">About</NavLink>

                        <NavLink exact activeClassName="active_class" to="/MS-Repair_Laptop/Contact">Contact_Us</NavLink>
                    </Nav>
                    <hr />
                    <Nav className="mr-auto">
                        <img src="./img/whatsapp.png" alt="whatapp icon" style={{ width: '30px' }}></img>
                        <p>9112636897/9370253399 (CALL US NOW)</p>

                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>

            <Slide />
            <hr />
            <Service />
            <hr />
            <List />
            <hr />
            <Info />
            <hr />
            <Footers />
        </Fragment>



    )

}

export default Home
