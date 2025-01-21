import React from "react";
import useButtons from "../hooks/useButtons";

export default function AcceptFunction(){
    const {saleButton} = useButtons();
    return (
        <button className="w-1/2 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800 mx-1" onClick={saleButton}>Aceptar</button>
    )
}