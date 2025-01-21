import React, {useContext} from "react";
import Default from "./default";
import NameAppContext from "../context/NameAppContext";
import ProductSlider from "../components/ProductSlider";

export default function Home(){
    let {data} = useContext(NameAppContext);
    const products = (data && data.products.length >= 1) ? data.products : [];
    return (
        <Default>
            <div className="mt-1 text-xl font-bold"><label>Productos sin existencia</label></div>
            <ProductSlider products={products} />
            <div className="mt-1 text-xl font-bold"><span>Productos con poca existencia (menos de 5)</span></div>
            <ProductSlider products={products} />
            <div className="mt-1 text-xl font-bold"><span>Solicitud de productos</span></div>
            <ProductSlider products={products} />
        </Default>
    )
}