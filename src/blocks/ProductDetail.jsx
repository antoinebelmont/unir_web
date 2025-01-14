import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = ({product}) => {
    return(
        <div className="block-product p-4 mt-2 bg-gray-100 border rounded-lg flex-shrink-0 lg:w-1/2 mx-auto">
            <div className="flex flex-col lg:flex-row xl:flex-row">
                <div className="block-product-image w-1/2">
                    <img src={product.image} alt="" className="center min-h-full m-auto rounded shadow"/>
                </div>
                <table className="block-product-data text-gray-400 xl:w-1/2 lg:w-1/2 sm:w-full">
                    <tbody>
                        <tr><td className="block-product-data-label bg-gray-500 text-white">Nombre</td><td className='text-left pl-2'>{product.name}</td></tr>
                        <tr><td className="block-product-data-label bg-gray-500 text-white">Descripción</td><td className='text-left pl-2'>{product.description}</td></tr>
                        <tr><td className="block-product-data-label bg-gray-500 text-white">Marca</td><td className='text-left pl-2'>{product.brand}</td></tr>
                        <tr><td className="block-product-data-label bg-gray-500 text-white">Existencia</td><td className='text-left pl-2'>{product.stock}</td></tr>
                        <tr><td className="block-product-data-label bg-gray-500 text-white">Precio</td><td className='text-left pl-2'>{product.price}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductDetail;