import React from "react";
import Product from "../blocks/Product";

export default function ProductSlider({products}){
    return (
        <div className="component-products-slider flex flex-row overflow-x-scroll snap-x snap-mandatory">
            {products.map(product => {
                return (
                    <Product product={product}  key={product.productId}/>
                )
            })}
        </div>
    )
}