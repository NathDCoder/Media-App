import React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";



function NavLinks() {
    return (
        <main>
        <div className="">
            <h2 className="magnify w-full absolute z-30 justify-end text-white"><GiMagnifyingGlass/></h2>
            <ul className="flex w-full justify-center absolute z-30 text-white">
                <li>Home</li>
                <li>Genres</li>
                <li>Artist</li>
                <li>Songs</li>
                <li>Playists</li>
            </ul>
        </div>
        </main>
         
    )
}


export default NavLinks;