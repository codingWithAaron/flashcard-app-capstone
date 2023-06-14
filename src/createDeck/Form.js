import React from "react";
import { useState } from "react";
import {Link, useHistory} from "react-router-dom"
import { createDeck, listDecks } from "../utils/api";

function Form({setDecks, decks}){
    const history = useHistory()
    const initialData = {
        name: "",
        description: ""
    }

    const [formData, setFormData] = useState(initialData)

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        createDeck(formData)
        .then(()=>setFormData(initialData))
        .then(()=>listDecks())
        .then(data => setDecks(data))
        .then(()=>history.push("/"))
    }

    return(
        <>
            <div className="container">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            {" "}
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">Create Deck</li>
                    </ol>
                </nav>
                <div>
                    <h2>Create Deck</h2>
                </div>
                <div className="d-flex flex-column">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div>
                            <input className="w-100" id="name" type="text" name="name" placeholder=" Deck Name" value={formData.name} onChange={handleChange}></input>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="description">Description</label>
                        </div>
                        <div>
                            <textarea className="w-100" id="description" type="text" name="description" placeholder=" Brief description of the deck" value={formData.description} onChange={handleChange}></textarea>
                        </div>
                        <div className=" d-flex flex-row mt-2">
                            <div className="mr-2">
                                <Link to="/" className="btn btn-secondary">Cancel</Link>
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

export default Form