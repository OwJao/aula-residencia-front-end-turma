import styles from "./styles.module.css";
import { useState } from "react";

interface ButtonProps {
  nameInside: string;
}

export function DefaultButton({ nameInside }: ButtonProps) {
  const [buttonActive, setButtonActive] = useState(false);

  const onClick = () => {
    setButtonActive(true);

    setTimeout(() => {
      setButtonActive(false);
    }, 1000);
  };

  return (
    <div
      className={`${styles.primaryButton} ${
        buttonActive ? styles.activePrimaryButton : ""
      }`}
      onClick={onClick}
    >
      {nameInside}
    </div>
  );
}

export function DefaultButtonReverse({ nameInside }: ButtonProps) {
  const [buttonActive, setButtonActive] = useState(false);

  const onClick = () => {
    setButtonActive(true);

    setTimeout(() => {
      setButtonActive(false);
    }, 1000);
  };

  return (
    <div
      className={`${styles.secondaryButton} ${
        buttonActive ? styles.activeSecondaryButton : ""
      }`}
      onClick={onClick}
    >
      {nameInside}
    </div>
  );
}
