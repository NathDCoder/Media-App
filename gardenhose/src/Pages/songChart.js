import React, {useState, useEffect} from "react"



function Songs () {
const [name,setName] = useState([])

useEffect(() => {
names()
console.log(name)
},[])

const names = async () => {
    const response = await fetch('https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=POP&genre_code=HIP_HOP_RAP&genre_code=SOUL_RNB&genre_code=ROCK&genre_code=LATIN&genre_code=K_POP&genre_code=DANCE')

    setName(await response.json())
}
return (
    <div className= "Song">
        <ol>
            Music will go here
            {name.map((data)=> {
                return (
                    <li key = {data.id}>
                        {data.names}
                    </li>
                )
            })}
        </ol>
    </div>
)
    }  
    //const response = await fetch("https://shazam-core.p.rapidapi.com/v1/charts/genre-world")
  export default Songs
