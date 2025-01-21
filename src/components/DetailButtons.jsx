import React from "react";
import BackButton from "../blocks/BackButton";
import AcceptButton from "../blocks/AcceptButton";


export default function DetailButtons(){
    return (

        <div className="mt-2 flex">
            <BackButton />
            <AcceptButton />
        </div>
    )
}