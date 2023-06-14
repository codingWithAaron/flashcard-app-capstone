import React from "react";
import CardForm from "./CardForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { readDeck } from "../utils/api";

function AddCard(){
    const {deckId} = useParams()
    const [currentDeck, setCurrentDeck] = useState([])
    const addHeader = `${currentDeck.name}: Add Card`
    const initialData = {
        front: "",
        back: "",
        deckId: deckId
    }

    useEffect(()=>{
        readDeck(deckId)
        .then(data => setCurrentDeck(data))
    },[])

    return (
        <CardForm deckId={deckId} addHeader={addHeader} initialData={initialData}/>
    )
}

export default AddCard