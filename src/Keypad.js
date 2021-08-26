import React, {Component} from 'react';
import "./Keypad.css";

function Keypad(props){
        return(
            <div className="Keypad">
                {/* We are using composition instead of inheritance.
                    read more: https://reactjs.org/docs/composition-vs-inheritance.html */}
                {props.children}
            </div>
        );
    
}

export default Keypad;