
import React from "react";
import video from "../Assets/particlewaves.mp4";


function background () {
    return(

        <div className="w-full h-screen relative">
        <video className="background video w-full h-full object-fill" src={video} autoPlay loop muted />
        </div>
    )
}

export default background;