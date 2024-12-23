import React from "react";
import Nav from "../components/Nav";

export default function Default({ children }){
    return (
        <>
            <Nav />
            { children }
        </>
    )
}