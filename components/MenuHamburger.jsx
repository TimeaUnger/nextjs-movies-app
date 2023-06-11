"use client"
import { useState } from "react";

const MenuHamburger = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState("");

  const handleMenuButton = () => {
    if (!isVisible) {
      setIsVisible(true);
      setIsOpen("open");
    } else {
      setIsVisible(false);
      setIsOpen("");
    }
  };

  const handleAction = (action) => {
    let path = `/${id}/${action}${PATH}`;
    navigate(path);
    handleMenuButton();
  };

  const handleClick = () => {
    const path = `/${id}${PATH}`;
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="editDeleteBlock">
        {isVisible && (
          <div className="editDeleteRowsWrapper">
            <div
              className="editMovieRow"
              id="editMovie"
              onClick={() => handleAction("edit")}
            >
              Edit
            </div>
            <div
              className="deleteMovieRow"
              id="deleteMovie"
              onClick={() => handleAction("delete")}
            >
              Delete
            </div>
          </div>
        )}
        <div className="editDeleteMenuWrapper">
          <div className="top-nav" id="navButton" onClick={handleMenuButton}>
            <div className={`menu-toggle ${isOpen}`} id="menu-toggle" ></div>
            <div className="menu-button-container">
              <div className="menu-button"></div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MenuHamburger;
