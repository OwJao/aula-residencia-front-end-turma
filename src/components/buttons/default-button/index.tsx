import styles from "./styles.module.css";

interface ButtonProps {
  nameInside: string;
}

export function DefaultButton({ nameInside }: ButtonProps) {
  return <button className={styles.primaryButton}>{nameInside}</button>;
}
