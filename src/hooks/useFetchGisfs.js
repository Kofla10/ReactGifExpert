import  {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGisfs = (category) => {

     const [imgs, setImgs] = useState([]);
     const [isLoading, setIsLoading] = useState(true)

    //react no permite hacer el async dentro del useEffect
    const getImgs = async()=>{
        const newImgs = await getGifs(category);
        setImgs(newImgs);
        setIsLoading(false)
    }

    useEffect( ()  => {        
        getImgs();        
    },[]);


    return {
        imgs,
        isLoading
    }
}