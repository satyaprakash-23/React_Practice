import "../../style.css";
import useData from "./useData";

import { useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useData(input);
  const [showResult,setShowResult] = useState(false);
  
  // console.log(data);

  const handleOnChange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="searchMain">
      <div className="searchInput">
        <h1>Search Bar</h1>
        <input
          type="text"
          className="inputBar"
          value={input}
          onFocus={()=>setShowResult(true)}
          onBlur={()=>setShowResult(false)}
          onChange={(e) => handleOnChange(e)}
        ></input>
        <div className={(showResult) ? "results" : "defalut"}>
          {showResult && data?.recipes.map((element) => {
            return (
              <div key={element.id} className="res">
                {element.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
