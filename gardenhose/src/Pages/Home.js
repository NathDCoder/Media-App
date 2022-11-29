import React from "react";
import video from "../Assets/particlewaves.mp4"

function home() {
  return (
    <main>
     <div className="relative">  
      <video src={video} autoPlay loop muted 
       className="absolute z-10 w-auto 
       min-w-full min-h-full max-w-none"/>
       <div className="absolute">Ready to Jam</div> 
     </div>
    </main>
  );
}

export default home;
