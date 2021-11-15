import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function SkillTalents({skillTalents}) {
    
    return (
        <div>
            <ListGroup variant="flush" className="border border-top-0">
            {
                skillTalents.map((skill, index) => {
                    return(
                        <ListGroup.Item key={index}>
                            <h5>{skill.name}</h5>
                            <p>{skill.description}</p>
                            {skill.upgrades && <span>Upgrades:</span>}
                            <ul>
                            {
                                skill.upgrades && skill.upgrades.map((upgrade, i) => {
                                    return(
                                        <li key={i}>{upgrade.name} - {upgrade.value}</li>
                                    )
                                })
                            }
                            </ul>
                            <small className="text-muted">{skill.unlock}</small>
                        </ListGroup.Item>
                    )
                })
            }
            </ListGroup>
        </div>
    )
}
