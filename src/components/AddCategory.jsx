import React, {useState} from 'react'

const AddCategory = ({handleAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleNewElement = ({target})=>{
        setInputValue( target.value)
        
    }

    const handleSubmit = (event)=>{
        
          //para evitar el refresh cuando se envíen datos del formulario usamos el prevenDefauilt
        event.preventDefault();

          // realizamos la validacion el .trim es para quitar los espacios al principio y al final
        if(inputValue.trim().length <= 1) return;
        handleAddCategory(inputValue.trim());
        setInputValue('');  // clean
    }

    return (
    <form action = "" onSubmit = {handleSubmit}>
        <input
            type        = 'text'
            placeholder = 'Add Category'
            value       = {inputValue}
            onChange    = {handleNewElement}
        />
    </form>
    )
}

export default AddCategory
