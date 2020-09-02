import React, { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ( { setCategories } ) =>{
    
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) =>{
        /*elemento que se puede editar*/
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        //Asi ya no se refresca
        e.preventDefault();
    
        if( inputValue.toString().length > 2){
            //Añadimos el inputvalue a la lista del setCategories
            //Spread la pnueva y despues las demas
            setCategories( cats => [inputValue, ...cats])
            //Dejamos despues de ser agregado vacío
            setInputValue('')
        }

        
    }

    return(

        <form 
        /*Acción al presionar intro*/
        onSubmit={ handleSubmit }>
        <input
                type='text'
                value={ inputValue }
                /*Con ello podremos editar el valor del input*/
                onChange={ handleInputChange }
            />
        </form>
    
    )
} 

/**
 * Requerimos obligatoriamente el setCategories
 */
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}