import React from "react";
import { Link } from "react-router-dom";

function Title() {
    return (
        <div className="text-white absolute z-30 flex justify-start">
        <h1 className="title absolute">
            <Link to="/">Jungify</Link>
        </h1>
        </div>
     )
}
export default Title