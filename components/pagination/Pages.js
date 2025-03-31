import { useState } from "react";
import "../../style.css";
import useProductData from "./useProductData";
import Card from "./Card";

const Pages = () => {
  const pages = 20;
  const [currData, setCurrData] = useProductData();
  // const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(currData);
  const [disabledBack,setDisabledBack] = useState(false);
  const [disabledfwd,setDisabledfwd] = useState(false);

  const buttons = new Array(pages).fill("");
  const [clicked, setClicked] = useState(0);
  const handleOnClick = (e) => {
    
    let value = e.target.innerHTML;
    if(value==="back"){
      if(value!=0){
        value = clicked - 1;
      }
    }
    else if(value==="next"){
      if(value!=19){
        value = clicked + 1;
      }
    }
    value = parseInt(value);

    if(value==0){
      setDisabledBack(true);
    }
    else if(value==19){
      setDisabledfwd(true);
    }
    else{
      setDisabledBack(false);
      setDisabledfwd(false);
    }
    setClicked(value);
    console.log(value * 10);
   

  };
  
  return (
    <div className="mainBox">
      <div className="buttons">
        <button className="btn" disabled={disabledBack} onClick={handleOnClick}>back</button>
        {buttons.map((_, index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                handleOnClick(e);
              }}
              className={(clicked===index) ? "activeBtn" : "defaultBtn"}
            >
              {index}
            </button>
          );
        })}
        <button className="btn" disabled={disabledfwd} onClick={handleOnClick}>next</button>
      </div>
      <div className="pagination">
        {currData?.products.map((data, index) => {
          return index >= clicked*10 && index < clicked*10 + 10 ? (
            <Card image={null} title={data?.title} id={data?.id} key={data?.id} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Pages;
