import axios from "axios";
import { useEffect, useState } from "react"


const useFetch = (url) => {

    const [data, setData] = useState();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();

    const dataFetch = async() =>{
        try {
           setLoading(true) 
           const response = await axios(url)
           setData(response.data.meals) 
           setLoading(false) 
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        dataFetch()
    },[url])


  return {data,loading,error}
  
}

export default useFetch