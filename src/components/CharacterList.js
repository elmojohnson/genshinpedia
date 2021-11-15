import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import CharacterItem from './CharacterItem'
import CharactersLoader from './CharactersLoader'

export default function CharacterList({isLimit}) {
    const [characters, setCharacters] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    var chs = characters.slice(0, 6)

    useEffect(() => {
        const getCharacters = async() => {
            const res = await axios.get(`https://api.genshin.dev/characters`)
            setCharacters(res.data)
            setLoading(false)
        }
        getCharacters()
    }, [])

    return (
        <div>
            {isLoading && <CharactersLoader isLimit={isLimit ? true : false} />}
            <Row>
                {
                    !isLoading &&
                    isLimit ?
                    chs.map((c, i) => {
                        return(
                            <CharacterItem key={i} name={c} />
                        )
                    })
                    : 
                    characters.map((c, i) => {
                        return(
                            <CharacterItem key={i} name={c} />
                        )
                    })
                }
            </Row>
        </div>
    )
}
