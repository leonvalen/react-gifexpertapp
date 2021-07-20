import React, { useState }  from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiExpertApp = ()=> {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( [ 'HunterxHunter', ...categories ])
    //     setCategories( cats => ['HunterxHunter', ...cats])

    //     console.log(categories);
    // }

    // console.log(categories);

    return(
    <>
        <h2>GiExpertApp</h2>
        <AddCategory setCategories={setCategories}/>

        <hr />
        {/* <button onClick = { handleAdd }>Agregar</button> */}
        <ol>
            {
                categories.map( category => (
                    // <li key={ category }>{ category }</li>
                    <GifGrid 
                        key = {category}
                        category={category}
                    />
                ))
            }
            
        </ol>
    </>
    );
}

export default GiExpertApp;