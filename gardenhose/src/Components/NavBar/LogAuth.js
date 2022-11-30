import Auth from '../../util/auth';

function LogAuth () {
    return (
    <main>
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
    </main>
   
    )
}


