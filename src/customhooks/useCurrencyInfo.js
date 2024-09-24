import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    let today = yyyy + '-' + mm + '-' + dd;
    // console.log(today);
    
    const[data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${today}/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then(res => setData(res[currency]))
        // console.log(data)
    },[currency])
    // console.log(data)
    return data
}

export default useCurrencyInfo