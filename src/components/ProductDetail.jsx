import React from "react";
import useButtons from "../hooks/useButtons";
import DetailButtons from "./DetailButtons";

const ProductDetail = ({product}) => {
    return(
        <div className="block-product p-4 mt-2 bg-gray-100 border rounded-lg flex-shrink-0 lg:w-1/2 mx-auto">
            <div className="flex flex-col lg:flex-row xl:flex-row">
                <div className="block-product-image w-full lg:w-1/2 h-1/2 relative overflow-hidden">
                    <img src={product.image} alt="" className="center m-auto rounded shadow w-full h-auto h-[30vh] lg:h-[50vh]"/>
                </div>
                <table className="block-product-data text-gray-400 xl:w-1/2 lg:w-1/2 bg-gray-200">
                    <tbody>
                        <tr><td className="block-product-data-label bg-gray-500 text-white p-2">Nombre</td><td className='text-left pl-2 '>{product.name}</td></tr>
                        <tr><td className="block-product-data-label bg-gray-500 text-white p-2">Descripción</td><td className='text-left pl-2'>{product.description}</td></tr>
                        <tr><td className="block-product-data-label bg-gray-500 text-white p-2">Marca</td><td className='text-left pl-2'>{product.brand}</td></tr>
                        <tr><td className="block-product-data-label bg-gray-500 text-white p-2">Existencia</td><td className='text-left pl-2'>{product.stock}</td></tr>
                        <tr><td className="block-product-data-label bg-gray-500 text-white p-2">Precio</td><td className='text-left pl-2'>{product.price}</td></tr>
                    </tbody>
                </table>
            </div>
            <DetailButtons id={product.id}/>
        </div>
    )
}

export default ProductDetail;