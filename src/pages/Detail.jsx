import React, {useState, useEffect, useContext} from "react";
import Default from "./default";
import NameAppContext from "../context/NameAppContext";
import { useParams } from 'react-router-dom';
import Product from "../components/ProductDetail";
import ProductSlider from "../components/ProductSlider";


export default function Detail(){
    let data = useContext(NameAppContext);
    const products = data.length >= 1 ? JSON.parse(data).products : [];
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const host = 'http://192.168.100.6:3030';
        fetch(`${host}/products/${id}`).then((res) => res.json())
            .then(product => {
                setProduct(product)
            })
    }, []);
    return(
        <Default>
            <Product product={product}/>
            <div className="mt-1 text-xl font-bold"><span>Solicitud de productos</span></div>
            <ProductSlider products={products}/>
        </Default>
    )
}