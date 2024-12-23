import React, {useEffect, useState} from "react";
import NameAppContext from './NameAppContext';

function Provider({ children }){
    const [data, setData] = useState('');
    const host = 'http://localhost:3030';
    useEffect(() => {
        fetch(`${host}/products`).then((res) => res.json())
            .then(products => {
                const data = {
                    products: products
                }
                setData(JSON.stringify(data))
            })
    }, []);

    //console.log(`${host}/products`)
    return (
        <NameAppContext.Provider value={ data }>
            {children}
        </NameAppContext.Provider>
    )
}


export default Provider;