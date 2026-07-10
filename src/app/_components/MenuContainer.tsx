import styles from "../_styles/menuContainer.module.css";
import clsx from "clsx";

export default function MenuComponent({ menuOptions, isOpen }) {
  const optionsList = menuOptions.map((option) => (
    <button
      key={option.id}
      className={clsx(`${styles.option}`, {
        [styles.parent]: !option.parent,
        [styles.child]: option.parent,
      })}
    >
      {option.title}
    </button>
  ));

  return (
    <menu
      className={clsx({
        [styles.open]: isOpen,
        [styles.closed]: !isOpen,
      })}
    >
      <li className={styles["menu-list"]}>{optionsList} </li>
    </menu>
  );
}
