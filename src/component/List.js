import React from 'react'
import{Card,ListGroup} from 'react-bootstrap'

const List = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Header>Any Issue of any laptop like(Mac/Window),We can solve and fix it</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Display</ListGroup.Item>
    <ListGroup.Item>Keypad</ListGroup.Item>
    <ListGroup.Item>Battery Issue</ListGroup.Item>
    <ListGroup.Item>Other Issues</ListGroup.Item>
  </ListGroup>
</Card>
        </div>
    )
}

export default List
