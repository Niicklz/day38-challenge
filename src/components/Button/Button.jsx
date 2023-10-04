import React from "react";
import "./Button.css";

export const Button = ({ icon, text, className, onClick, id }) => {
  return (
    <button id={id} onClick={onClick} className={`btn ${className}`}>
      {icon}
      {text}
    </button>
  );
};
