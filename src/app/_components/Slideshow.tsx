"use client";

import styles from "../_styles/slideshow.module.css";
import { useState } from "react";

export default function Slideshow({ displayList, slideshowTitle }) {
  const [activeDisplayId, setActiveDisplayId] = useState(0);

  const displayButtons = displayList.map((display) => (
    <button key={display.id} className={styles["display-button"]}></button>
  ));

  return (
    <div className={styles["slideshow-container"]}>
      {displayButtons}
      <div>
        {slideshowTitle}
      </div>
    </div>
  );
}
