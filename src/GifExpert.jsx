import React,{useState} from 'react'

import './style.css';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpert = () => {


    const [categories, setCategories] = useState(['Dragon Ball']);
    
    const handleAddCategory = (newCategory) =>{
        
        if(categories.includes(newCategory)) return;  //si existe no lo inserta

          // categories.push(newCategory); evitar agregar elementos de esta forma 
        setCategories([...categories, newCategory]);
          // setCategories(cat => [...categories,'Valorant']);
    }

    return (
    <>
        {/* titulo */}
        <h1>Gif Expert</h1>

        {/* input */}
        <AddCategory handleAddCategory = {handleAddCategory}/>

        {/* listado */}
        {/* <button onClick={handleAddCategory}>Add</button> */}
        
        {
            categories.map((category) => (
                <GifGrid 
                    key      = {category}
                    category = {category}
                />
                ))
        }
        

        {/* gif item */}

    </>
    )
}

export default GifExpert
