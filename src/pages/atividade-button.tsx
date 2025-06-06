"use client";
import { useState } from "react";
import { DefaultButton } from "@/components/buttons/default-button";
import { styles } from "@/components/buttons/default-button";

export default function ButtonFunc() {
  const [titulo, setTitulo] = useState<string>("TEXT");

  return (
    <button className={styles.box}>
      <DefaultButton nameInside={titulo} />
    </button>
  );
}
