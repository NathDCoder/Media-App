import { GiMagnifyingGlass } from "react-icons/gi";
import { Link } from 'react-router-dom';


function NavLinks() {
    return (
    <main>
        
        <div>
            <ul className="flex w-full justify-center absolute z-30 text-white">

            <li><span><Link to="/"><button>Home</button></Link></span></li>
            <li><span><Link to="/Genres"><button>Genres</button></Link></span></li>
            <li><span><Link to="/Artist"><button>Artist</button></Link></span></li>
            <li><span><Link to="/Songs"><button>Songs</button></Link></span></li>
            <li><span><Link to="/Playlist"><button>Playists</button></Link></span></li>  
       
            </ul>
            <h2 className="magnify w-full absolute z-30 justify-end text-white"><GiMagnifyingGlass/></h2>
            <div className="login w-full absolute z-30 justify-end text-white">
            
                <span><Link to="/login"><button>Log In</button></Link></span>
           
            
                <span><Link to="/signup"><button >Sign Up</button></Link></span>
              
            </div>
        </div>

           
    </main>
    )
}

export default NavLinks;