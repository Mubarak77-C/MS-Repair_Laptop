import React from 'react'
import { Navbar, Nav, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Footers from "./Footers"

import 'bootstrap/dist/css/bootstrap.min.css';


export const About = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">MS Laptop Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink exact activeClassName="active_class" to="/">Home</NavLink>

                        <NavLink exact activeClassName="active_class" to="/About">About</NavLink>

                        <NavLink exact activeClassName="active_class" to="/Contact">Contact_Us</NavLink>
                    </Nav>
                    <hr />
                    <Nav className="mr-auto">
                        <img src="./img/whatsapp.png" alt="whatapp icon" style={{ width: '30px' }}></img>
                        <p>9356987719/8669165300 (CALL US NOW)</p>

                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>

            <hr />
            <main class="container-fluid px-0" />

            {/* <!-- Row: Shop online--> */}
            <section class="row no-gutters">
                <div class="col-md-6 bg-position-center bg-size-cover bg-secondary" style={{ minheight: '15rem', backgroundImage: 'url(/img/a1.jpg)' }} />
                <div class="col-md-6 px-3 px-md-5 py-5">
                    <div class="mx-auto py-lg-5" style={{ maxwidth: '35rem' }}>
                        <h2 class="h3 pb-3">Laptop Battery Issue</h2>
                        <p class="font-size-sm pb-3 text-muted">Three types of batteries power the laptops you'll find in service today, nickel cadmium (NiCad), nickel metal hydride (NiMH), and lithium ion (Li-ion), with Li-ion being the most common in newer laptops. Each battery type has a different chemistry for generating a charge and, therefore, different characteristics.In order to squeeze as much life out of your lithium-polymer battery, once your laptop hits 100 percent, unplug it. In fact, you should unplug it before that.</p><a class="btn btn-primary btn-shadow" href="#">View More</a>
                    </div>
                </div>
            </section>
            <hr />
            {/* <!-- Row: Delivery--> */}
            <section class="row no-gutters">
                <div class="col-md-6 bg-position-center bg-size-cover bg-secondary order-md-2" style={{ minHeight: '15rem', backgroundImage: 'url(/img/a2.jpg)' }} />
                <div class="col-md-6 px-3 px-md-5 py-5 order-md-1">
                    <div class="mx-auto py-lg-5" style={{ maxwidth: '35rem' }}>
                        <h2 class="h3 pb-3">Keyboard Laptop Problem </h2>
                        <p class="font-size-sm pb-3 text-muted">There are a few things you should try out. The first one is to update your keyboard driver. Open Device manager on your Windows laptop, find the Keyboards option, expand the list, and right-click Standard PS/2 Keyboard, followed by Update driver. ... If it's not, the next step is to delete and reinstall the driver.</p><a class="btn btn-accent btn-shadow" href="#">Shipping details</a>
                    </div>
                </div>
            </section>
            <hr />
            {/* <!-- Row: Mobile app--> */}
            <section class="row no-gutters">
                <div class="col-md-6 bg-position-center bg-size-cover bg-secondary" style={{ minHeight: '15rem', backgroundImage: 'url(/img/a3.jpg)' }} />
                <div class="col-md-6 px-3 px-md-5 py-5">
                    <div class="mx-auto py-lg-5" style={{ maxwidth: '35rem' }}>
                        <h2 class="h3 pb-3">laptop Broken Hinge</h2>
                        <p class="font-size-sm pb-3 text-muted">Dissasemble the laptop. Locate the broken insert for the metal bushing which holds the hinge and remove it. Drill a small hole in the center of the cracked plastic insert.Put the metal bushing back to its place and screw it with a small nut from the bottom side of the laptop.</p><a class="btn-market btn-apple mr-3 mb-3" href="#" role="button"><span class="btn-market-subtitle">Download on the</span><span class="btn-market-title">App Store</span></a><a class="btn-market btn-google mb-3" href="#" role="button"><span class="btn-market-subtitle">Download on the</span><span class="btn-market-title">Google Play</span></a>
                    </div>
                </div>
            </section>
            <hr />
            {/* <!-- Section: Shopping outlets--> */}
            <section class="row no-gutters">
                <div class="col-md-6 bg-position-center bg-size-cover bg-secondary order-md-2" style={{ minHeight: '15rem', backgroundImage: 'url(/img/a4.jpg)' }} />
                <div class="col-md-6 px-3 px-md-5 py-5 order-md-1">
                    <div class="mx-auto py-lg-5" style={{ maxwidth: '35rem' }}>
                        <h2 class="h3 pb-3">Repair Laptop</h2>
                        <p class="font-size-sm pb-3 text-muted">Be sensible. If your machine is still under warranty and you're covered, get it repaired professionally at the manufacturer's expense.
Remember that a laptop is an electrical appliance and tinkering inside anything electrical can be dangerous. </p><a class="btn btn-warning btn-shadow" href="contacts.html">See outlet stores</a>
                    </div>
                </div>
            </section>
            <hr />



            {/* <!-- Section: Team--> */}
            <section class="container py-3 py-lg-5 mt-4 mb-3" />
            <h2 class="h3 my-2">Our core team</h2>
            <p class="font-size-sm text-muted">People behind your great shopping experience</p>
            <div class="row pt-3">
                <div class="col-lg-4 col-sm-6 mb-grid-gutter">
                    <div class="media align-items-center"><img class="d-inline-block rounded-circle" src="img/p1.jpg" width="96" height="96" alt="Jonathan Doe" />
                        <div class="media-body pl-3">
                            <h6 class="font-size-base pt-1 mb-1">Jonathan Doe</h6>
                            <p class="font-size-ms text-muted mb-0">CEO, Co-founder</p><a class="nav-link-style font-size-ms text-nowrap" href="mailto:johndoe@example.com"><i class="czi-mail mr-2"></i>johndoe@example.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-grid-gutter">
                    <div class="media align-items-center"><img class="d-inline-block rounded-circle" src="img/p2.jpg" width="96" height="96" alt="Barbara Palson" />
                        <div class="media-body pl-3">
                            <h6 class="font-size-base pt-1 mb-1">Barbara Palson</h6>
                            <p class="font-size-ms text-muted mb-0">Chief of Marketing</p><a class="nav-link-style font-size-ms text-nowrap" href="mailto:b.palson@example.com"><i class="czi-mail mr-2"></i>b.palson@example.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-grid-gutter">
                    <div class="media align-items-center"><img class="d-inline-block rounded-circle" src="img/p3.jpg" width="96" height="96" alt="William Smith" />
                        <div class="media-body pl-3">
                            <h6 class="font-size-base pt-1 mb-1">William Smith</h6>
                            <p class="font-size-ms text-muted mb-0">Financial director</p><a class="nav-link-style font-size-ms text-nowrap" href="mailto:w.smith@example.com"><i class="czi-mail mr-2"></i>w.smith@example.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-grid-gutter">
                    <div class="media align-items-center"><img class="d-inline-block rounded-circle" src="img/p4.jpg" width="96" height="96" alt="Amanda Gallaher" />
                        <div class="media-body pl-3">
                            <h6 class="font-size-base pt-1 mb-1">Amanda Gallaher</h6>
                            <p class="font-size-ms text-muted mb-0">Lead UX designer</p><a class="nav-link-style font-size-ms text-nowrap" href="mailto:a.gallaher@example.com"><i class="czi-mail mr-2"></i>a.gallaher@example.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-grid-gutter">
                    <div class="media align-items-center"><img class="d-inline-block rounded-circle" src="img/p5.jpg" width="96" height="96" alt="Benjamin Miller" />
                        <div class="media-body pl-3">
                            <h6 class="font-size-base pt-1 mb-1">Benjamin Miller</h6>
                            <p class="font-size-ms text-muted mb-0">Website development</p><a class="nav-link-style font-size-ms text-nowrap" href="mailto:b.miller@example.com"><i class="czi-mail mr-2"></i>b.miller@example.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-grid-gutter">
                    <div class="media align-items-center"><img class="d-inline-block rounded-circle" src="img/p6.jpg" width="96" height="96" alt="Miguel Rodrigez" />
                        <div class="media-body pl-3">
                            <h6 class="font-size-base pt-1 mb-1">Miguel Rodrigez</h6>
                            <p class="font-size-ms text-muted mb-0">Content manager</p><a class="nav-link-style font-size-ms text-nowrap" href="mailto:b.miller@example.com"><i class="czi-mail mr-2"></i>m.rodrigez@example.com</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section: We are hiring--> */}
            <hr />


            <Footers />
        </>




    )
}
export default About
