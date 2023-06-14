import React from "react";
import CardForm from "./CardForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function AddCard(){
    const {deckId} = useParams()

    return (
        <CardForm deckId={deckId} />
    )
}

export default AddCard