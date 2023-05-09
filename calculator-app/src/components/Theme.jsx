import { useState } from "react";

export default function Theme({ handleClick, theme }) {
  return (
    <div
      className={`flex items-center justify-between ${theme["text-secondary"]}`}
    >
      <h1 className="h-[36px] pl-2">calc</h1>
      <div className="grid grid-cols-2 place-items-center gap-y-1 text-xs">
        <div className="row-start-2 mr-6 h-[12px] tracking-widest">THEME</div>
        <div className="col-start-2 flex w-full justify-center gap-3">
          <p className="w-2">1</p>
          <p className="w-2">2</p>
          <p className="w-2">3</p>
        </div>
        <div
          className={`col-start-2 row-start-2 flex h-[26px] w-[70px] items-center justify-center gap-x-1 rounded-full ${theme["bg-toggle"]}`}
        >
          <Button
            theme={theme}
            handleButtonClick={handleClick}
            val="1"
          ></Button>
          <Button
            theme={theme}
            handleButtonClick={handleClick}
            val="2"
          ></Button>
          <Button
            theme={theme}
            handleButtonClick={handleClick}
            val="3"
          ></Button>
        </div>
      </div>
    </div>
  );
}

function Button({ theme, handleButtonClick, val }) {
  return (
    <button
      onClick={() => handleButtonClick(val)}
      className={`h-4 w-4 rounded-full ${theme["key-2-bg"]} ${
        val === theme.id ? "visible" : "bg-opacity-0"
      }`}
    ></button>
  );
}
