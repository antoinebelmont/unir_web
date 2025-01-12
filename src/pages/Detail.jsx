import React, { useState, useEffect } from "react";
import Default from "./default";
import NameAppContext from "../context/NameAppContext";
import { useParams } from 'react-router-dom';


export default function Detail(){
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const host = 'http://localhost:3030';
        fetch(`${host}/products/${id}`).then((res) => res.json())
            .then(product => {
                setProduct(product)
                    
            })
    }, []);
    console.log(product)
    return(
        <Default>
            ola k ase {product.name}
        </Default>
    )
}