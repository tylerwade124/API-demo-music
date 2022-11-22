import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Artist () {

    const [artist, setArtist] = useState([])

    





    const getData = async () => {
        await axios.get('http://localhost:3001/music/artist')
        .then(res => {
            if (res) {
                setArtist(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div className="artist">
            {artist.map((value) => {
                return (
                    <div key={value.id}>
                        <h3>Name: {value.name}</h3>
                        <p>Est.: {value.yearFormed}</p>
                        <p>Number of Albums: {value.numberOfAlbums}</p>
                        <br />
                    </div> 
                )
            })}

        </div>
    )
}