import { Folder, File } from "lucide-react";
import "../../style.css";
import { useRef, useState } from "react";
import { useRef } from "react";

const UseStructure = ({ isFolder, name, children }) => {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);
  const handleOnClick = (e) => {
    console.log(e.target);
    setClicked(!clicked);
    clicked
      ? (ref.current.style.display = "")
      : (ref.current.style.display = "none");
  };
  return isFolder ? (
    <div>
      <div
        className={clicked ? "expand" : "compress"}
        onClick={(e) => {
          handleOnClick(e);
        }}
      >
        <div className="folderBox">
          <div className="folderName">
            <div>
              <Folder />
            </div>
            <div><h3>{name}</h3></div>
          </div>
          <div className="childs"><h3>{children.length}</h3></div>
        </div>
      </div>
      <div className="indent" ref={ref}>
        {children.map((element, index) => {
          return (
            <UseStructure
              isFolder={element.isFolder}
              name={element.name}
              children={element.children}
              key={index}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <h4>
        <span>
          <File />
        </span>
        {name}
      </h4>
    </div>
  );
};

export default UseStructure;
