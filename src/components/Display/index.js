import React from "react";
import './index.css'


function Display(props) {
    return(
        <p className="Display">
            {props.counter}
        </p>
    );
}

export default Display;