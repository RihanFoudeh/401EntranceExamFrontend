import React, { Component } from 'react'

import { Card, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class cardHome extends Component {
    render() {
        return (
            <div>
                {this.props.frutsArr.map((Fruts) => {
     return (

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Fruts.image} />
                            <Card.Body>
                                <Card.Title>{Fruts.name}</Card.Title>
                                <Card.Text>
                                    {Fruts.price}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{this.props.addToFav(Fruts.name,Fruts.image,Fruts.price)}}>Add to favFruit</Button>
                            </Card.Body>
                        </Card>


                    )
                })}

            </div>
        )
    }
}
