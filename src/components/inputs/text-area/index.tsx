import { useState } from "react";
import styles from "./styles.module.css";

interface TextAreaProps {
  maxLength?: number;
}

export function TextArea({ maxLength = 1000 }: TextAreaProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.textarea}>
      <textarea
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
      />
      <div style={{ marginTop: 8, fontSize: 12, color: "#888" }}>
        {value.length}/{maxLength} caracteres
      </div>
    </div>
  );
}
