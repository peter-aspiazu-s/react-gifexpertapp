import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({setCategories}) => {

    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( inputValue.trim().length > 2 ){ // El método .trim() elimina los espacios en blanco
            
            setCategories( cats => [ inputValue, ...cats ] );
            // setCategories( [ ...categories, inputValue ] ); Hace lo mismo que la linea de arriba, pero debes pedir el argumento desde el componente padre y pasarselo como atributo y valor al fragmento de este componente
            setInputValue('');

        }
    
    }

    return (
        
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            />  
        </form>
        
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;