import styles from "./styles.module.css";

interface ButtonProps {
  nameInside: string;
}

export function ReverseButton({ nameInside }: ButtonProps) {
  return <button className={styles.button}>{nameInside}</button>;
}
