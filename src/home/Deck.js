import React from "react";
import {Link} from "react-router-dom"
import {AiFillEye} from "react-icons/ai"
import {BiBookBookmark} from "react-icons/bi" 
import {BsFillTrashFill} from "react-icons/bs"


function Deck({deck}){
    

    return (
        <>
            <div className="container border p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <h4>{deck.name}</h4>
                    <p>{deck.cards.length} cards</p>
                </div>
                <p>{deck.description}</p>
                <div className="d-flex justify-content-between">
                    <div>
                        <div className="mr-2 btn btn-secondary">
                            <Link className="text-light" to="#"> <AiFillEye/> View</Link>
                        </div>
                        <div className="btn btn-primary">
                            <Link className="text-light" to={`/decks/${deck.id}/study`}><BiBookBookmark/> Study</Link>
                        </div>
                    </div>
                    <div className="btn btn-danger">
                        <div>
                            <Link to="#"><BsFillTrashFill className="text-light"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deck