import { GiMagnifyingGlass } from "react-icons/gi";
import { Link } from 'react-router-dom';


function NavLinks() {
    return (
    <main>
        <div className="">
            <div className="flex w-full justify-center absolute z-30 text-white">
            <Link to="/"><li>Home</li></Link>
            <Link to="/Genres"><li>Genres</li></Link>  
            <Link to="/Artist"><li>Artist</li></Link> 
            <Link to="/Songs"><li>Songs</li></Link>
            <Link to="/Playlist"><li>Playists</li></Link>
            </div>
            <h2 className="magnify w-full absolute z-30 justify-end text-white"><GiMagnifyingGlass/></h2>
            <div className="login w-full absolute z-30 justify-end text-white">
            
            <div>
            <Link to="/signup">Signup</Link>
            </div>
            
            <div>
            <Link to="/login">Login</Link>
            </div>
            </div>
        </div>
    </main>
         
    )
}


export default NavLinks;