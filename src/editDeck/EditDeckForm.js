import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditDeckForm({deckId}){
    const initialData = {
        id: deckId,
        name: "",
        description:""
    }
    const [currentDeck, setCurrentDeck] = useState(initialData)
    const history = useHistory()
    
    useEffect(()=>{
        readDeck(deckId)
        .then(data => setCurrentDeck(data))
    },[])

    function handleChange(event){
        setCurrentDeck({
            ...currentDeck,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        updateDeck(currentDeck)
        .then(()=>history.push(`/decks/${deckId}`))
    }


    if(currentDeck){

        return (
            <>
                <div className="container">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                {" "}
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                {" "}
                                <Link to={`/decks/${deckId}`}>{currentDeck.name}</Link>
                            </li>
                            <li className="breadcrumb-item">Edit Deck</li>
                        </ol>
                    </nav>
                    <div>
                        <h2>Edit Deck</h2>
                    </div>
                    <div className="d-flex flex-column">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Name</label>
                            </div>
                            <div>
                                <input className="w-100" id="name" type="text" name="name" placeholder={` ${currentDeck.name}`} value={currentDeck.name} onChange={handleChange}></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="description">Description</label>
                            </div>
                            <div>
                                <textarea className="w-100" id="description" type="text" name="description" placeholder={` ${currentDeck.description}`} value={currentDeck.description} onChange={handleChange}></textarea>
                            </div>
                            <div className=" d-flex flex-row mt-2">
                                <div className="mr-2">
                                    <Link to={`/decks/${deckId}`} className="btn btn-secondary">Cancel</Link>
                                </div>
                                <div>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </div>          
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default EditDeckForm