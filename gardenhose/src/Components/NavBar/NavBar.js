// import { GiMagnifyingGlass } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react' 

const NavLinks = () => {
    const [isOpen, setOpen] = useState(false)
    const handleNav = () => {
        setOpen(!isOpen)
    }

    return (
    <>
    <main>
        
        <div>
            <ul className="flex w-full justify-center absolute z-30 text-white hidden md:flex">

            <li><span><Link to="/"><button>Home</button></Link></span></li>
            <li><span><Link to="/Genres"><button>Genres</button></Link></span></li>
            <li><span><Link to="/Artist"><button>Artist</button></Link></span></li>
            <li><span><Link to="/Songs"><button>Songs</button></Link></span></li>
            <li><span><Link to="/Playlist"><button>Playists</button></Link></span></li>  
                
               
            </ul>
            
            <div className="login w-full absolute z-30 justify-end text-white hidden md:flex">
            
                <span><Link to="/login"><button>Log In</button></Link></span>
           
            
                <span><Link to="/signup"><button >Sign Up</button></Link></span>
              
            </div>
            {/*Hamburger Menu*/}
            <div onClick={handleNav} className='md:hidden absolute z-30 hamburger text-white'>
                {isOpen ? <Hamburger direction='right' toggled={setOpen}  /> : <Hamburger direction='left' toggled={isOpen} /> }
            </div>

            {/*Mobile Menu*/}
            <div onClick={handleNav} className={isOpen ? 'absolute z-30 left-0 top-0 w-full bg-blue-900/20 px-4 py-7 flex flex-col' : 'absolute z-30 left-[-100%] top-0 w-full bg-blue-900/20 px-4 py-7 flex flex-col'  }>
                <ul >
                  <h1 className='text-white'>Jungify</h1>  
                <li><span><Link to="/"><button>Home</button></Link></span></li>
                <li><span><Link to="/Genres"><button>Genres</button></Link></span></li>
                <li><span><Link to="/Artist"><button>Artist</button></Link></span></li>
                <li><span><Link to="/Songs"><button>Songs</button></Link></span></li>
                <li><span><Link to="/Playlist"><button>Playists</button></Link></span></li>  
                <div className=''>
                <span className='loginsignup inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out justify-between my-6'>
                    <Link to="/login"><button>Log In</button></Link></span>

                <span className='loginsignup inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out justify-between my-6'>
                    <Link to="/signup"><button >Sign Up</button></Link></span>
                </div> 
                </ul>

            </div>

        </div>        
    </main>
    </>
    )
}

export default NavLinks;