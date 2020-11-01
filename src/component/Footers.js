import React, { Fragment } from 'react'
import { Navbar } from 'react-bootstrap'

const Footers = () => {
    return (

        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">RV laptop Care</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <footer class="container"> */}
                    <p>© 2020-2021 Rv laptop care, Inc. · <a href="/fitnessbootstrap/privacy.html">Privacy</a> · <a href="/fitnessbootstrap/terms.html">Terms</a></p>
                    <p class="float"><a href="#">Back to top</a></p>

                {/* </footer> */}
            </Navbar>
        </Fragment>

    )
}

export default Footers
