import data from "./data.json";
import UseStructure from "./UseStructure";

const Structure = () => {
  console.log(data);

  return (
    <div className="structure">
      <div className="border">
        {data.map((element, index) => {
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
  );
};

export default Structure;
