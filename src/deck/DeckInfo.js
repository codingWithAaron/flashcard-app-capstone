import React from "react";
import { useEffect } from "react";
import {useParams, Link} from "react-router-dom"
import { deleteCard, deleteDeck, readDeck } from "../utils/api";
import { useState } from "react";
import {BiBookBookmark} from "react-icons/bi" 
import {BsFillTrashFill, BsPencilFill} from "react-icons/bs"
import Card from "./Card";


function DeckInfo(){
    const {deckId} = useParams()
    const [deck, setDeck] = useState([])

    useEffect(()=>{
        readDeck(deckId)
        .then(data => setDeck(data))
    },[])

    function handleDelete(cardToDelete){
        const confirm = window.confirm("Delete this card? You will not be able to recover it.")
        if(confirm){
            deleteCard(cardToDelete)
            .then(()=>readDeck(deckId))
            .then(data => setDeck(data))
        }
    }


    if(deck && deck.cards){
        return (
            <>
                <div className="container">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                {" "}
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item">{deck.name}</li>
                        </ol>
                    </nav>
                    <h3>{deck.name}</h3>
                    <p>{deck.description}</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="mr-2 btn btn-secondary">
                                <Link className="text-light" to={`/decks/${deckId}/edit`}> <BsPencilFill/> Edit</Link>
                            </div>
                            <div className="btn btn-primary">
                                <Link className="text-light" to={`/decks/${deckId}/study`}><BiBookBookmark/> Study</Link>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-danger"><BsFillTrashFill className="text-light"/></button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2>Cards</h2>
                    </div>
                    <div>
                        {deck.cards.map((card)=> <Card handleDelete={handleDelete} card={card} key={card.id} />)}
                    </div>
                </div>
            </>
        )
    }

    return <p>Loading...</p>
}

export default DeckInfo