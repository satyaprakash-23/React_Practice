import { useState, useRef, useEffect } from "react";
import "../style.css";

function OtpInput() {
  const inputRef = useRef([]);
  const [input, setInput] = useState(new Array(5).fill(""));
  console.log(input);
  const handleOnChange = (e, index) => {
    const digit = e.target.value.trim();
    const lastDig = digit.slice(-1);
    console.log(lastDig);
    const currArr = [...input];
    currArr[index] = lastDig;
    setInput(currArr);
    digit && inputRef.current[index + 1]?.focus();
  };
  const handleOnKeyDown = (e, index) => {
    console.log(e);

    if (e.key === "Backspace") {
      // const newArr = [...input];
      // newArr[index] = "";
      // setInput(newArr);
      !e.target.value && inputRef.current[index - 1]?.focus();
    }
  };
  useEffect(() => {
    // inputRef.current = input[0];
    inputRef.current[0].focus();
  }, []);
  return (
    <div className="App">
      <h1>OTP Validate</h1>
      <div className="box">
        {input.map((input, index) => {
          return (
            <input
              type="text"
              key={index}
              value={input}
              ref={(input) => (inputRef.current[index] = input)}
              className="text"
              onChange={(e) => {
                handleOnChange(e, index);
              }}
              onKeyDown={(e) => {
                handleOnKeyDown(e, index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OtpInput;
