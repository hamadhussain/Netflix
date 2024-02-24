"use client";
import React, { useState } from "react";
import T from "../Toggle/page";

const Layout = ({ children }) => {
  const [color, setColor] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const op = () => {
    if (color.color === "white") {
      setColor({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setColor({
        color: "white",
        backgroundColor: "black",
      });
    }
  };

  return (
    <div className={`flex flex-col min-h-screen bodywidthh`} style={color}>
      <div className="toggle my-4 md:my-8 lg:my-12 ml-4 ">
        <div className="wrapper">
          <input onClick={op} type="checkbox" value={true} id="hide-checkbox" />
          <label htmlFor="hide-checkbox" className="toggle">
            <span className="toggle-button">
              <span className="crater crater-1"></span>
              <span className="crater crater-2"></span>
              <span className="crater crater-3"></span>
              <span className="crater crater-4"></span>
              <span className="crater crater-5"></span>
              <span className="crater crater-6"></span>
              <span className="crater crater-7"></span>
            </span>
            <span className="star star-1"></span>
            <span className="star star-2"></span>
            <span className="star star-3"></span>
            <span className="star star-4"></span>
            <span className="star star-5"></span>
            <span className="star star-6"></span>
            <span className="star star-7"></span>
            <span className="star star-8"></span>
          </label>
        </div>
      </div>

      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
