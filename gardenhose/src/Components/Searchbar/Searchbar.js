import React from "react"
import { GiMagnifyingGlass } from "react-icons/gi";


export default function Searchbar({placeholder,data}){
    return(
        <header>
            <form className='Search' >
        <input placeholder =" Search for Song" type = 'text' id = "search"/>
            <button className = "searchbutton">
            <GiMagnifyingGlass/>
            </button>
            </form>
        </header>
    )
}