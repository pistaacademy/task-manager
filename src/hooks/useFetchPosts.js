import React, { useEffect, useState } from 'react';
import axios from "axios";
const useFetchPosts = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState([]);

    useEffect(()=> {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            let modifiedResp = response?.data.map((obj)=> {
                return {
                    ...obj,
                    status: "Open",
                    description: obj.body,
                };
            })
            setData(modifiedResp)
        })
        .catch(error => {
            setError(error)
        })
        .finally(()=> {
            setLoading(false);
        })
    },[]);


    return { loading, error, data };
}

export default useFetchPosts;