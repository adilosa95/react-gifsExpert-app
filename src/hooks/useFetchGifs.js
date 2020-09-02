import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    // /**
    //  * Con este hook lo que hacemos es la carga de varias veces, solo de este componente, sin afectar a ninguno más
    //  * Tamibien se le pueden pasar unas propiedaddes
    //  */
    useEffect( () => {
         getGifs( category )
             .then( imgs =>{

                setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    });

                }, 3000);

            } )

    }, [ category ])

    return state; //{ data: [] ,loading: true}
}