import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className='text-center'>Contact Us</h1>
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter email'></Form.Control>
                        <Form.Text>Send email</Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as='textarea' rows='3' />
                    </Form.Group>
                    <Form.Group controlId='formBasicCheckBox'>
                        <Form.Check type='checkbox' label='Check me' />
                    </Form.Group>
                    <Button variant='primary' type='submit'>Submit</Button>
                </Form>
            </Container>
        )
    }
}
