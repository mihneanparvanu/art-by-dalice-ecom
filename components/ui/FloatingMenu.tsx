"use client";
import "./floating-menu.css";
import { useState } from "react";

const FloatingMenu = () => {
  const [isBigMenuVisible, setIsBigMenuVisible] = useState(false);

  const showBigMenu = () => {
    setIsBigMenuVisible(true);
  };

  const hideBigMenu = () => {
    setIsBigMenuVisible(false);
  };

  return (
    <div className="floatingMenu">
      <div className={`bigMenuWrapper ${isBigMenuVisible ? '' : 'menuHidden'}`}>
        <div className="menuContentWrapper">
          <h4 className="">Language</h4>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quos
            sint officiis id dolorem reiciendis dolor, obcaecati sapiente quia
            autem exercitationem adipisci rerum ipsum. Repudiandae dolorem
            ducimus numquam, eaque quas provident neque delectus? Officiis vitae
            molestias, a esse possimus velit sapiente laboriosam, facere
            incidunt nemo, culpa cum dolor tenetur alias!
          </p>
        </div>
        <div className="menuButtonsWrapper">
          <button onClick={hideBigMenu}>Close</button>
          <button>Change language</button>
        </div>
      </div>

      <div className="contentWrapper">
        <button onClick={showBigMenu} className="optionWrapper quickSettings">
          <p>Language</p>
          <p>English</p>
        </button>
        <div className="optionWrapper quickSettings">
          <p>Theme</p>
          <p>Dark</p>
        </div>
        <div className="optionWrapper preferences">
          <p>Menu preferences</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
