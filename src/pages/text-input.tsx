import { TextInput } from "@/components/inputs/text-input/textinput";
import { useState } from "react";

export default function TextInputFunc() {
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <TextInput/>
    </>
  );
}