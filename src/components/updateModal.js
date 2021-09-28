import React, { Component } from 'react'


import { Modal, Button ,Form} from 'react-bootstrap'

export default class updateModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>updateFruts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>




                        <Form onSubmit={this.props.updateFruts}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control name="name" type="text" defaultValue={this.props.NewFruts.name}  />
                                
                            </Form.Group>
                          
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>prices</Form.Label>
                                <Form.Control type="text" name="prices" defaultValue={this.props.NewFruts.prices} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check name="photos" type="text" defaultValue={this.props.NewFruts.photos} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>






                    </Modal.Body>
                   
                </Modal>
            </div>
        )
    }
}
