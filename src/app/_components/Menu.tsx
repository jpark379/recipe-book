"use client";

import { useState } from "react";
import styles from "../_styles/menu.module.css";
import MenuContainer from "./MenuContainer";

export default function MenuComponent({ menuOptions }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menu}>
      <button onClick={toggleMenu} className={styles["menu-button"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <MenuContainer menuOptions={menuOptions} isOpen={isOpen} />
    </div>
  );
}
