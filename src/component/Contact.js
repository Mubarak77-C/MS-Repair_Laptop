import React from 'react'
import { Carousel } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Col, Button } from 'react-bootstrap'
export const Contact = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="./img/contact.jpg"
                        alt="First slide"
                        height="300"

                    />
                    <Carousel.Caption>
                        <h3>Contact Me</h3>
                        <p>Have questions? I have answers.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <br></br>
            <p><b>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</b></p>
            {/* Form */}

            <Form action="index.php" method="get">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Resident address" required />
                </Form.Group>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                    
                        <Form.Control  required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose... " required>
                            <option>Choose...</option>
                            <option>...</option>
                            
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        
                        <Form.Control required/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Have Question?</Form.Label>
                    <Form.Control as="textarea" rows={3}  required/>
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </>
    )
}
export default Contact
