import React, {useContext} from "react";
import Default from "./default";
import NameAppContext from "../context/NameAppContext";
import ProductSlider from "../components/ProductSlider";

export default function Home(){
    let data = useContext(NameAppContext);
    const products = data.length >= 1 ? JSON.parse(data).products : [];
    return (
        <Default>
            <ProductSlider products={products} />
        </Default>
    )
}