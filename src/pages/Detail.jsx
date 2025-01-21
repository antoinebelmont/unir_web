import React, {useState, useEffect, useContext} from "react";
import Default from "./default";
import NameAppContext from "../context/NameAppContext";
import { useParams } from 'react-router-dom';
import Product from "../components/ProductDetail";
import ProductSlider from "../components/ProductSlider";


export default function Detail(){
    let {data} = useContext(NameAppContext);
    let productConsulted;
    const products = (data && data.products.length >= 1) ? data.products : [];
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        productConsulted = products.filter(product => product.id == id)
        setProduct(productConsulted[0])
    }, []);
    return(
        <Default>
            <Product product={product}/>
            <div className="mt-1 text-xl font-bold"><span>Solicitud de productos</span></div>
            <ProductSlider products={products}/>
        </Default>
    )
}