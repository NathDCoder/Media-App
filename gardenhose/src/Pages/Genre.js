import React from "react";

import {Genres} from "../Components/Genres/GenresPage";

function Genre () {
   <Genres/>
   return (
    <div className="flex relative justify-center">
      <div className= "flex absolute justify-between items-center sm:flex-row flex-col mt-4 mb-10">
         <h2 className="genrepick font-bold text-3x1 text-white text-left absolute flex justify-center z-30">Pick a Genre</h2>
         <select onChange={() => {}}
          className ="genre absolute flex justify-center z-30 bg-black text-white p-3 text-sm rounded-lg">
         {Genres.map((Genres)=> <option key={Genres.value}value={Genres.value}>{Genres.title}</option>)}
         </select>
      </div>
    </div>


   )
}

export default Genre