import React from "react";
import CardForm from "./CardForm";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { readDeck, updateCard } from "../utils/api";
import { readCard } from "../utils/api";
import { useState } from "react";

function EditCard(){
    const history = useHistory()
    const initialData = {
        front: "",
        back: ""
    }
    const {deckId, cardId} = useParams()
    const addHeader = "Edit Card"
    const addBreadcrumbHeader = `Edit Card ${cardId}`
    const [currentDeck, setCurrentDeck] = useState([])
    const [formData, setFormData] = useState(initialData)

    function handleSubmit(event){
        event.preventDefault()
        updateCard(formData)
        .then(()=>history.push(`/decks/${deckId}`))
    }
    
    useEffect(()=>{
        readDeck(deckId)
        .then(data => setCurrentDeck(data))
        .then(()=>readCard(cardId))
        .then(data => setFormData(data))
    },[])

    if(formData){

        return(
            <CardForm deckId={deckId} addHeader={addHeader} addBreadcrumbHeader={addBreadcrumbHeader} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
        )
    }
}

export default EditCard