import { useState } from "react";

export default function Inputs({ theme, inputChange }) {
  return (
    <div
      className={`mt-6 grid grid-cols-4 place-items-center gap-3 rounded-lg ${theme["bg-toggle"]} text-1-text-blue" px-6 py-6 md:gap-6 md:px-8 md:py-8`}
    >
      <Button theme={theme} label="7" buttonClick={inputChange}></Button>
      <Button theme={theme} label="8" buttonClick={inputChange}></Button>
      <Button theme={theme} label="9" buttonClick={inputChange}></Button>
      <Button
        theme={theme}
        label="DEL"
        buttonClick={inputChange}
        special={`pt-4 text-xl md:text-3xl`}
        themeId="1"
      ></Button>
      <Button theme={theme} label="4" buttonClick={inputChange}></Button>
      <Button theme={theme} label="5" buttonClick={inputChange}></Button>
      <Button theme={theme} label="6" buttonClick={inputChange}></Button>
      <Button theme={theme} label="+" buttonClick={inputChange}></Button>
      <Button theme={theme} label="1" buttonClick={inputChange}></Button>
      <Button theme={theme} label="2" buttonClick={inputChange}></Button>
      <Button theme={theme} label="3" buttonClick={inputChange}></Button>
      <Button theme={theme} label="-" buttonClick={inputChange}></Button>
      <Button theme={theme} label="." buttonClick={inputChange}></Button>
      <Button theme={theme} label="0" buttonClick={inputChange}></Button>
      <Button theme={theme} label="/" buttonClick={inputChange}></Button>
      <Button theme={theme} label="x" buttonClick={inputChange}></Button>
      <Button
        theme={theme}
        label="RESET"
        buttonClick={inputChange}
        special={`col-span-2  pt-4 text-xl md:text-3xl`}
        themeId="1"
      ></Button>
      <Button
        theme={theme}
        label="="
        buttonClick={inputChange}
        special={`col-span-2 pt-4 text-xl md:text-3xl`}
        themeId="2"
      ></Button>
    </div>
  );
}

const Button = ({
  theme,
  label,
  buttonClick,
  themeId = "3",
  special = `pt-2 md:pt-3 md:text-4xl ${theme["text-primary"]}`,
}) => {
  const defaultClasses =
    "flex h-[63px] w-full justify-center rounded-md border-b-4 hover:brightness-125";

  return (
    <button
      onClick={() => buttonClick(label)}
      className={`
        ${defaultClasses}
        ${theme[`key-${themeId}-bg`]}
        ${theme[`key-${themeId}-shadow`]}
        ${special}`}
    >
      {label}
    </button>
  );
};
