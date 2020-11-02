import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'


const Service = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="./img/c1.jpg" height="300" />
          <Card.Body>
            <Card.Title>Laptop Repair & Upgrade Services</Card.Title>
            <Card.Text>
              Repairing Laptops, Notebooks, Netbook, Chromebooks since 2002. Fixes laptops at card and extreme chip level.
      </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/c2.jpg" height="300" />
          <Card.Body>
            <Card.Title>MacBook Repair & Upgrade Services</Card.Title>
            <Card.Text>
              Specializing in repairing of Apple iMac MacBook Pro Air Chip Level  and Component Repair Services{' '}
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/c3.jpg" height="300" />
          <Card.Body>
            <Card.Title>Desktop PC Repair & Upgrade Services</Card.Title>
            <Card.Text>
              18 years of experience in solving Desktops, Workstations, All In One PC and Gaming Systems.
      </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
        </Card>
      </CardGroup>
      <hr></hr>
      {/*  */}
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="./img/s4.jpg" height="300" />
          <Card.Body>
            <Card.Title>Install Software In Laptop</Card.Title>
            <Card.Text>
              Installation software in Laptops, Notebooks, Netbook, Chromebooks since 2002.
      </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/s5.jpg" height="300" />
          <Card.Body>
            <Card.Title>MacBook Hardware Repair</Card.Title>
            <Card.Text>
              Specializing in repairing of Apple iMac MacBook Pro Air Chip Level.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/s6.jpg" height="300" />
          <Card.Body>
            <Card.Title>Desktop PC Repair & Replacement Services</Card.Title>
            <Card.Text>
              Replacement experience in solving Desktops, Workstations, All In One PC and Gaming Systems.
      </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
        </Card>
      </CardGroup>
    </div>
  )
}

export default Service
