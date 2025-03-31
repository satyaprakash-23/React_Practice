import { useEffect, useState } from "react"

const useProductData = ()=>{
    const [productData,setProductData] = useState();

    useEffect(()=>{
        getData();

    },[])

    async function getData() {
        const response = await fetch("https://dummyjson.com/products/?limit=200");
        const json = await response.json();
        // console.log(json);
        setProductData(json);
    }
    
    return [productData,setProductData];
}

export default useProductData;