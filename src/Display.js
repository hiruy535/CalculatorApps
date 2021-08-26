import React, {Component} from 'react';
import "./Display.css";

function Display(props) {
    
        return(
            <div className="Display">
                {props.data}
            </div>
        );
    
}

export default Display;