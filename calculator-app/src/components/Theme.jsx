import { useState } from "react";

export default function Theme({ handleClick, theme }) {
  const handleToggleClick = () => {
    handleClick(theme.id === "3" ? "1" : (theme.id * 1 + 1).toString());
  };
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
          className={`col-start-2 row-start-2 flex h-[26px] w-[70px] items-center rounded-full px-2 hover:cursor-pointer ${theme["bg-toggle"]} relative`}
          onClick={() => handleToggleClick()}
        >
          <button
            className={`h-4 w-4 rounded-full ${theme["key-2-bg"]} ${theme["toggle"]} transition-{left} relative duration-150 ease-in-out`}
            label="theme"
          ></button>
        </div>
      </div>
    </div>
  );
}
