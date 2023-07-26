"use client";
import { useState } from "react";
import Button from "./Button";

export default function SimpleStateCheck() {
  const [text, setText] = useState("SHOW SOMETHING");
  const [isShow, setIsShow] = useState(true);
  const handleToggle = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <div className="h-96 flex flex-col justify-center items-center">
      <div
        style={{ visibility: isShow ? "visible" : "hidden" }}
        className="text-xl"
      >
        {text}
      </div>
      <div>
        <Button onClick={handleToggle}>{isShow ? "HIDE" : "SHOW"}</Button>
        <input
          className="bg-black border-2 rounded border-white text-white focus:outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
