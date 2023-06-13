import React from "react";
import {Link} from "react-router-dom"
import {BsFillTrashFill, BsPencilFill} from "react-icons/bs"

function Card({card, handleDelete}){

    return (
        <>
            <div className="d-flex flex-column container border">
                <div className="d-flex flex-row">
                    <div className="mt-3">
                        <p>{card.front}</p>
                    </div>
                    <div className="mt-3">
                        <p>{card.back}</p>
                    </div>
                </div>
                <div className="d-flex flex-row-reverse mb-3">
                    <div>
                        <button onClick={()=>handleDelete(card.id)} className="btn btn-danger"><BsFillTrashFill className="text-light"/></button>
                    </div>
                    <div>
                        <button className="text-light mr-2 btn btn-secondary"> <BsPencilFill/> Edit</button>
                    </div>                     
                </div>
            </div>
        </>
    )
}

export default Card