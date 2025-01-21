import React, {useEffect, useState} from "react";
import NameAppContext from './NameAppContext';
import database from '../util/database.json';
import { useNavigate } from "react-router-dom"
function Provider({ children }){
    const [data, setData] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        setData(database)
    }, []);

    const productOut = (id) => {
        let products = data.products;
        const updatedProducts =products.map(product => {
            if(product.id === id){
                product.stock--
            }
            return product
        })
        //setData(updatedProducts)
        return navigate('/')
    }

    //console.log(`${host}/products`)
    return (
        <NameAppContext.Provider value={{data, productOut, setData} }>
            {children}
        </NameAppContext.Provider>
    )
}


export default Provider;