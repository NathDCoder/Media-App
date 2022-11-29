
import React from "react";
import video from "../Assets/particlewaves.mp4";


function background () {
    return(

        <div className="w-full h-screen relative">
        <video className="w-full h-full object-cover" src={video} autoPlay loop muted />
        </div>
    )
}

export default background;