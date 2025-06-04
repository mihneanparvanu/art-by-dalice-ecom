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
      <div className={`bigMenuWrapper ${isBigMenuVisible ? "" : "menuHidden"}`}>
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
      <ul className="contentWrapper">
        <div className="quickSettingsWrapper">
        </div>
        <li className="optionWrapper">
          <button onClick={showBigMenu} className="optionWrapper quickSettings">
            <span>Language</span>
            <span>English</span>
          </button>
        </li>
        <li className="optionWrapper">
          <button className="optionWrapper quickSettings">
            <span>Theme</span>
            <span>Dark</span>
          </button>
        </li>
        <li className="">
          <button className="optionWrapper preferences">
            <span>Menu preferences</span>
            <span></span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FloatingMenu;
