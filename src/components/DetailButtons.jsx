import React from "react";
import BackButton from "../blocks/BackButton";
import AcceptButton from "../blocks/AcceptButton";


export default function DetailButtons(id){
    return (

        <div className="component-detail-buttons mt-2 flex">
            <BackButton />
            <AcceptButton id={id}/>
        </div>
    )
}