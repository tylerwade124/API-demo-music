import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Albums () {

    const [albums, setAlbums] = useState([])

    





    const getData = async () => {
        await axios.get('http://localhost:3001/music/albums')
        .then(res => {
            if (res) {
                setAlbums(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div className="artist">
            {albums.map((value) => {
                return (
                    <div key={value.id}>
                        <h3>Album Name: {value.name}</h3>
                        <h4>Artist Name: {value.artistName}</h4>
                        <p>Release Year: {value.releaseDate}</p>
                        <br />
                    </div> 
                )
            })}

        </div>
    )
}