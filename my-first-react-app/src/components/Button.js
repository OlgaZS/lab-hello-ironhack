import React from "react";
import "./css/button.css";

const Button = (props) => {
    return (
    <div className="button">
        {props.text}
      </div>
    );
  };
  
  export default Button;
