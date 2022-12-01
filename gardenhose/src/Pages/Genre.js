import React from "react";

import {Genres} from "../Components/Genres/GenresPage";

function Genre () {
   <Genres/>
   return (
    <div className="flex flex-col">
      <div className= "w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
         <h2 className="font-bold text-3x1 text-white text-left"></h2>
         <select onChange={() => {}}
         value=""
         className ="bg-black text-white p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
            {Genres.map((Genres)=> <option key={Genres.value}value={Genres.value}>{Genres.title}</option>)}
         </select>
      </div>
    </div>


   )
}

export default Genre