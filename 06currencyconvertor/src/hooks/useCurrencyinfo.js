import { useEffect,useState } from "react";
// custom hook
function useCurrencyinfo(currrency){
    const [data ,setdata] = useState ({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currrency}.json`)
        .then((res) =>res.json())
        .then((res) => setdata(res[currrency]));
        console.log(data);
        
    },[currrency])
    return data;

}
export default useCurrencyinfo;