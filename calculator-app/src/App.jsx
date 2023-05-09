import { useState } from "react";
import Display from "./components/Display";
import Inputs from "./components/Inputs";
import Theme from "./components/Theme";
import themes from "./themes";

function App() {
  const initialState = {
    firstNum: "",
    operator: "",
    secondNum: "",
  };

  const [theme, setTheme] = useState(themes["1"]);
  const [input, setInput] = useState(initialState);

  const handleTheme = (theme) => {
    if (theme === "1") {
      setTheme(themes["1"]);
    } else if (theme === "2") {
      setTheme(themes["2"]);
    } else if (theme === "3") {
      setTheme(themes["3"]);
    }
  };

  const handleInputChange = (symbol) => {
    if (symbol === "RESET") {
      setInput(initialState);
      return;
    }

    if (symbol === "DEL") {
      if (input.secondNum !== "") {
        setInput({
          ...input,
          secondNum: input.secondNum.slice(0, input.secondNum.length - 1),
        });
      } else if (input.operator !== "") {
        setInput({ ...input, operator: "" });
      } else if (input.firstNum !== "") {
        setInput({
          ...input,
          firstNum: input.firstNum.slice(0, input.firstNum.length - 1),
        });
      }
      return;
    }

    if (symbol === "=") {
      if (
        input.operator === "" ||
        (input.operator !== "" && input.secondNum.length === 0) ||
        (input.secondNum.length === 1 && "-.".includes(input.secondNum)) ||
        (input.secondNum.length === 2 && input.secondNum === "-.")
      ) {
        return;
      }

      const first = Number(input.firstNum);
      const second = Number(input.secondNum);
      let result = 0;

      switch (input.operator) {
        case "x":
          result = first * second;
          break;
        case "/":
          result = first / second;
          break;
        case "+":
          result = first + second;
          break;
        case "-":
          result = first - second;
          break;
      }
      setInput({
        ...initialState,
        firstNum: Number(result.toFixed(2)).toString(),
      });
      return;
    }

    if (
      input.firstNum.length + input.secondNum.length + input.operator.length >=
      12
    ) {
      return;
    }

    const isNegativeSign =
      symbol === "-" && (input.firstNum === "" || input.operator !== "");
    const isOperatorAndNotSign = "+-x/".includes(symbol) && !isNegativeSign;
    const isOperator = "+-x/".includes(symbol);
    const isOperatorTurn =
      input.firstNum !== "" && input.firstNum !== "-" && isOperatorAndNotSign;

    if (isOperatorTurn) {
      setInput({ ...input, operator: symbol });
      return;
    }

    const numberType = input.operator === "" ? "first" : "second";
    if (isNegativeSign) {
      setInput({ ...input, [`${numberType}Num`]: "-" });
    }

    if (!isOperator) {
      if (symbol === ".") {
        if (input[`${numberType}Num`].includes(".")) return;
      }

      setInput({
        ...input,
        [`${numberType}Num`]: input[`${numberType}Num`] + symbol,
      });
    }
  };

  return (
    <div
      className={`h-screen ${theme["bg-main"]} flex w-screen flex-col items-center justify-start py-6 font-league-spartan text-[32px] text-white md:justify-center`}
    >
      <main className="w-[326px] md:w-[540px]">
        <Theme handleClick={handleTheme} theme={theme} />
        <Display theme={theme} input={input} />
        <Inputs theme={theme} inputChange={handleInputChange} />
      </main>
    </div>
  );
}

export default App;
