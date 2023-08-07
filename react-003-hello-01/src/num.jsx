import { useState } from "react";

const num = () => {
  [sum, sub, mul, div] = useState("");
  const sum = (num1, num2) => num1 + num2;
  const sub = (num1, num2) => num1 - num2;
  const mul = (num1, num2) => num1 * num2;
  const div = (num1, num2) => num1 / num2;
  console.log(num);

  return (
    <div className="imputNum">
      <input placeholder="숫자1">num1</input>
      <input placeholder="숫자2">num2</input>
    </div>
  );
};

export default num;
