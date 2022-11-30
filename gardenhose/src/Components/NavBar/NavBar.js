import { GiMagnifyingGlass } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Auth from '../../util/auth';

function NavLinks() {
    return (
    <main>
        <div className="">
           <div>
            <ul className="flex w-full justify-center absolute z-30 text-white">

            <li><span><a href="/"><button>Home</button></a></span></li>
            <li><span><a href="/Genres"><button>Genres</button></a></span></li>
            <li><span><a href="/Artist"><button>Artist</button></a></span></li>
            <li><span><a href="/Songs"><button>Songs</button></a></span></li>
            <li><span><a href="/Playlist"><button>Playists</button></a></span></li> 
       
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