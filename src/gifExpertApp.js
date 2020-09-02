import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    //const categories =['One Punch','Samuray Jack','Rick and Morty'];
    const [categories, setCategories] = useState(['One Punch'])

    /*const handleAdd = () =>{
        //Añadir con el operador spread ...
        //1º Forma setCategoires([...categories , 'Hunter x Hunter'])
        //2º Forma
        setCategories( cats => [...cats, 'Hunter x Hunter'])
    }*/
    return(
        <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={ setCategories }/>
         <hr />   

         <ol>
            { 
                /*
                *Renderiza una categoria por cada una que se añada en el input
                */
                categories.map( category => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
         </ol>
        </>
    )
}