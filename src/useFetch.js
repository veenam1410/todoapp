import { useEffect, useState } from "react";
import TaskList from "./TaskList";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const abortCont = new AbortController();

        setTimeout(()=>{
        fetch(url, {signal:abortCont.signal})
        .then(res=>{
            if(!res.ok){
                throw Error("404 Page Not Found");
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setIsPending(false);
        })
        .catch((err)=>{
            if(err.name == 'AbortError'){
                console.log("Fetch aborted");
            }else{
            setIsPending(false);
            setError(err.message);
            }
        })
        return ()=> abortCont.abort();
        }, 500);
    },[]);

    return {data, isPending, error};
}
 
export default useFetch;