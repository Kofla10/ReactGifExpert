import React from 'react'

// import {GifItem} from './index'
import GifItem from './GifItem.jsx';
import { useFetchGisfs } from '../hooks/useFetchGisfs.js';


const GifGrid = ({category}) => {    
    

    const {imgs, isLoading} = useFetchGisfs(category);

    return (
            <>
                <h3>{category}</h3>
                {
                    //if logico, si es true muestra el h2
                    isLoading &&(<h2>Loading...</h2>)
                }
                <div className='card-grid'>
                    {
                        // usamos la desestruturacion para no tener que usar image.id o image.title
                        //sacamos los valores que necesitamos
                        // imgs.map(({id, title})=>(
                        imgs.map(image=>(
                            //enviamos solo lo que necesitamos
                            // <GifItem key={image.id} title={image.title} url={image.url} />
                            //otro metodo para enviar las prop de forma que en el componente que recibe, se usa solo lo que neceistamos\
                            <GifItem key={image.id} {...image}/>
                        ))    
                    }   
                </div>
            </>
    )
}

export default GifGrid;




