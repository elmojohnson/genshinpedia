import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Constellations({constellations, cons}) {
    return (
        <div className="border border-top-0">
            <ListGroup variant="flush">
                {
                    constellations.map((con, index) => {
                        return(
                            <ListGroup.Item key={index}>
                                <h5>{con.name}</h5>
                                <p>{con.description}</p>
                                <small className="text-muted">{con.unlock}</small>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}
