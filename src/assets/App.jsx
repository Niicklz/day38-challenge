import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import "../styles.css";
import { FaHome } from "react-icons/fa";
import { BsFillBox2Fill, BsFillPersonFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";

export const App = () => {
  const [activeButton, setActiveButton] = useState("home");
 

  const handleButtonClick = (event) => {
    const id = event.target.id
    if(id) {
        setActiveButton(id);
    }
   
    
  };

  return (
    <div className="container">
      <div className="phone">
        <figure className="background-img">
            <img src={`https://res.cloudinary.com/dooazvgi7/image/upload/v1696442452/fotitos/${activeButton}_x8365.avif`} alt="" />
        </figure>
        <div className="buttons-container">
          <Button
            id="home"
            icon={<FaHome />}
            text="Home"
            onClick={handleButtonClick}
            className={activeButton === "home" ? "active" : ""}
          />
          <Button
            id="work"
            icon={<BsFillBox2Fill />}
            text="Work"
            onClick={handleButtonClick}
            className={activeButton === "work" ? "active" : ""}
          />
          <Button
            id="blog"
            icon={<IoBookSharp />}
            text="Blog"
            onClick={handleButtonClick}
            className={activeButton === "blog" ? "active" : ""}
          />
          <Button
            id="about"
            icon={<BsFillPersonFill />}
            text="About us"
            onClick={handleButtonClick}
            className={activeButton === "about" ? "active" : ""}
          />
        </div>
      </div>
    </div>
  );
};
