import React from "react";
import SearchSongs from "../Components/Searchbar/searchSongs";
import Reviews from "../Components/Comment/Review";


function Songs () {
   return (
      <> 
      <div className="Genre relative">
      <SearchSongs/>
      <Reviews/>
      <ul className="absolute z-30 min-w-full min-h-full text-center">
         <li className="text">
          Gravel Road
         </li>
         <li className="text">
          Everybody Runs
         </li>
         <li className="text">
          Camelot
         </li>
         <li className="text">
          100 yard Dash
         </li>
         <li className="text">
          Martial Law
         </li>
         <li className="text">
          Armada
         </li>
      </ul>     
      </div>
      </>
   )

}

export default Songs;