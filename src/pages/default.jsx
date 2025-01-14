import React from "react";
import Nav from "../components/Nav";

export default function Default({ children }){
    return (
        <div className='bg-gray-300'>
            <Nav />
            { children }
        </div>
    )
}