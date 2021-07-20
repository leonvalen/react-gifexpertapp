import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=> {
        
    // se usa para hacer un unico llamado en el componente y se debe agregar el parametro [] y agregar adentro el parametro que cambia
    getGifs(category)
        .then( imgs => {
            // setTimeout(()=>{
                
                console.log(imgs);
                setState({
                    data:imgs,
                    loading: false
                });

            // },3000)
            
        })

    }, [category])

    return state;

}
