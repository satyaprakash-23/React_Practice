import { useEffect, useState } from "react";

const useData = (input) => {
//   console.log(input);

  const [data, setData] = useState();
  const [cache,setCache] = useState({});

  const getData = async () => {
    if(cache[input]){
        console.log("Cached data used:", cache[input]);
        setData(cache[input])
        return;
        
    }
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );

      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
      setCache((prev)=>({
        ...prev,
        [input]: json
      }))
    //   console.log(data);

    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };


  useEffect(() => {
    
    const timer = setTimeout(()=>{
        getData()
    },300)
    return ()=>{
        clearTimeout(timer)
    }
    
  }, [input]);

  return [data, setData];
};

export default useData;
