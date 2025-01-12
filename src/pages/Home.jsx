import React, {useContext} from "react";
import Default from "./default";
import NameAppContext from "../context/NameAppContext";
import ProductSlider from "../components/ProductSlider";

export default function Home(){
    let data = useContext(NameAppContext);
    const products = data.length >= 1 ? JSON.parse(data).products : [];
    return (
        <Default>
            <div className="mt-1"><label>Productos sin existencia</label></div>
            <ProductSlider products={products} />
            <div className="mt-1"><span>Productos con poca existencia (menos de 5)</span></div>
            <ProductSlider products={products} />
            <div className="mt-1"><span>Solicitud de productos</span></div>
            <ProductSlider products={products} />
        </Default>
    )
}