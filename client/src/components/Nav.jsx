import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link className="nav-home"to ="/">Home</Link>
            <br />
            <Link className="nav-artist"to="/artist">Artist</Link>
            <Link className="nav-albums"to="/albums">Albums</Link>
        </div>
    )
}