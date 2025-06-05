import { useState } from "react";

import styles from "./styles.module.css";

interface TextInputProps {
  value: string;
}

export function TextInput() {
    return (
      <div className={styles.inputWrapper}>
        <input/>
      </div>
    );
  }