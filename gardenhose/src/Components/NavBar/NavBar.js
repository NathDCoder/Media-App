import { GiMagnifyingGlass } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Auth from '../../util/auth';

function NavLinks() {
    return (
    <main>
        <div className="">
            <div className="flex w-full justify-center absolute z-30 text-white">
            <ul className="flex absolute">
            <li><span><Link to="/"><button className="navitems">Home</button></Link></span></li>
            <li><span><Link to="/Genres"><button className="navitems">Genres</button></Link></span></li>
            <li><span><Link to="/Genres"><button className="navitems">Genres</button></Link></span></li>
            <li><span><Link to="/Artist"><button className="navitems">Artist</button></Link></span></li>
            <li><span><Link to="/Songs"><button className="navitems">Songs</button></Link></span></li>
            <li><span><Link to="/Playlist"><button className="navitems">Playists</button></Link></span></li> 
            </ul>

            </div>
            <h2 className="magnify w-full absolute z-30 justify-end text-white"><GiMagnifyingGlass/></h2>
            <div className="login w-full absolute z-30 justify-end text-white">
                {Auth.loggedIn() ? (
                    <ul>
                            <li>
                            <span><Link to="/login"><button>Log In</button></Link></span>
                            </li>
                    </ul>
                    ) : (
                        <ul>
                            <li>
                            <span><Link to="/signup"><button >Sign Up</button></Link></span>
                            </li>
                        </ul>
                    )}
            </div>
        </div>
    </main>
    )
}

export default NavLinks;