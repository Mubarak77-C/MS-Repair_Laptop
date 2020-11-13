import React, { Fragment } from 'react'
import { Navbar } from 'react-bootstrap'

const Footers = () => {
    return (

        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">MS laptop Care</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <footer class="container"> */}
                <hr/>
                    <p>© 2020-2021 MS laptop care, Inc. · <a href="/">Privacy</a> ·<a href="/"> Terms</a></p>
                    <hr/>
                    <p class="float"><a href="#">Back to top</a></p>

                {/* </footer> */}
            </Navbar>
        </Fragment>

    )
}

export default Footers
