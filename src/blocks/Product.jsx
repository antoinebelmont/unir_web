import React from "react";
import { Link } from "react-router-dom";

const Product = ({product}) => {
    return(
        <div className="block-product p-4 mt-2 bg-gray-100 border rounded-lg w-full lg:w-1/4 2xl:w-1/6 ml-1 flex-shrink-0 snap-start m-auto shadow-md ">
            <Link
            to={`/producto/${product.id}`}>
            <div className="block-product-image">
                <img src={product.image} alt="" className="w-full center h-40 m-auto rounded shadow"/>
            </div>
            <table className="block-product-data w-1/2 text-gray-400">
                <tr><td className="bg-gray-500 text-white">Nombre</td><td>{product.name}</td></tr>
                <tr><td className="bg-gray-500 text-white">Marca</td><td>{product.brand}</td></tr>
                <tr><td className="bg-gray-500 text-white">Existencia</td><td>{product.stock}</td></tr>
                <tr><td className="bg-gray-500 text-white">Precio</td><td>{product.price}</td></tr>
            </table>
            </Link>
        </div>
    )
}

export default Product;