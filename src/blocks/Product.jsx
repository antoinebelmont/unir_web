import React from "react";

const Product = ({product}) => {
    return(
        <div className="block-product p-4 mt-2 border rounded-lg w-full flex-shrink-0 snap-start m-auto shadow-2xl ">
            <div className="block-product-image">
                <img src={product.image} alt="" className="w-full center h-40 m-auto rounded shadow"/>
            </div>
            <div className="block-product-data text-left flex flex-col text-gray-400">
                <span className="block-product-data-entry w-full">{product.name}</span>
                <span>{product.brand}</span>
                <span>{product.cost}</span>
                <span>{product.stock}</span>
                <span>{product.price}</span>
            </div>
        </div>
    )
}

export default Product;