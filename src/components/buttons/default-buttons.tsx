import styles from "./styles.module.css";
import { useState } from "react";

interface ButtonProps {
  name_inside: string;
}

export function DefaultButton({ name_inside }: ButtonProps) {
  const [ButtonAtivo, setButtonAtivo] = useState(false);

  const aoClicar = () => {
    setButtonAtivo(!ButtonAtivo);
  };

  return (
    <div
      className={`${styles.primaryButton} ${
        ButtonAtivo ? styles.ativoPrimaryButton : ""
      }`}
      onClick={aoClicar}
    >
      {name_inside}
    </div>
  );
}

export function DefaultButtonReverse({ name_inside }: ButtonProps) {
  const [ButtonAtivo, setButtonAtivo] = useState(false);

  const aoClicar = () => {
    setButtonAtivo(!ButtonAtivo);
  };

  return (
    <div
      className={`${styles.secondaryButton} ${
        ButtonAtivo ? styles.ativoSecondaryButton : ""
      }`}
      onClick={aoClicar}
    >
      {name_inside}
    </div>
  );
}
