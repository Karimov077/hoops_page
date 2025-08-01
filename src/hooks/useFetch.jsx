import { api } from "../api";
import { useEffect, useState } from "react";


export const useFetch = (entpoint) =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loding, setLoding] = useState(true);

    useEffect(()=> {
        setLoding(true)
        api
        .get(entpoint)
        .then((res)=> setData(res.data))
        .catch((err)=> setError(err))
        .finally(()=> setLoding(false))
        
    }, [])
    return {data, error, loding}
}