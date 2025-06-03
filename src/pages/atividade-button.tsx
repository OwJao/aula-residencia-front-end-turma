"use client";
import { useState } from "react";
import {
  DefaultButton,
  DefaultButtonReverse,
} from "@/components/buttons/default-buttons";
import styles from "@/components/buttons/styles.module.css";

export default function ButtonFunc() {
  const [titulo, setTitulo] = useState<string>("TEXT");

  return (
    <div className={styles.box}>
      <DefaultButton name_inside={titulo} />
      <DefaultButtonReverse name_inside={titulo} />
    </div>
  );
}
