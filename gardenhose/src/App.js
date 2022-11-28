import React from "react";
import video from "./Assets/particlewaves.mp4"

function App() {
  return (
    <main>
      <video src={video} autoPlay loop muted 
      className="absolute z-10 w-auto 
      min-w-full min-h-full max-w-none"/>
    </main>
  );
}

export default App;
