import React from 'react';
import "./Button.scss"

const Button = (props) => {

  function handleClick(){
    if (props.status === "active") {
      props.action();
    }
  }
  return (
    <a
      className={`button ${props.size} ${props.color} ${props.status}`}
      onClick={handleClick}
      href={props.link}
    >
      {props.children}
    </a>
  );
};

export default Button;
