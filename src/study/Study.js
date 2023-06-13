import React from "react";
import { useEffect } from "react";
import { readDeck } from "../utils/api";
import {useParams, useHistory, Link} from "react-router-dom"
import { useState } from "react";
import {FaPlus} from "react-icons/fa"


function Study(){
    const [eachDeck, setEachDeck] = useState([])
    const [flip, setFlip] = useState(true)
    const [index, setIndex] = useState(0)
    const {deckId} = useParams()
    const history = useHistory()
    
    useEffect(()=>{
        readDeck(deckId)
        .then(data => setEachDeck(data))
        .then(setIndex(0))
    },[])
    
    const allCards = eachDeck.cards

    function handleFlipClick(){
        setFlip(!flip)
    }

    function handleNextClick(){
        setIndex((prevIndex)=>{
            return prevIndex + 1
        })
        setFlip(true)
    }

    function handleRestart(){
        const confirm = window.confirm("Restart cards? Click 'cancel' to return to the home page")

        if(confirm){
            setIndex(0)
            setFlip(true)
        }else{
            history.push("/")
        } 
    }
    
    if(allCards && index < allCards.length && allCards.length >= 3){
        const card = allCards && allCards[index]
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
                                <Link to={`/decks/${deckId}`}>{eachDeck.name}</Link>
                            </li>
                            <li className="breadcrumb-item">Study</li>
                        </ol>
                    </nav>
                    <div>
                        <h2>Study: {eachDeck.name}</h2>
                    </div>
                    <div className="container border">
                        <div className="mt-3">
                            <h3>{`Card ${index + 1} of ${allCards.length} `}</h3>
                        </div>
                        {flip ? <p>{card.front}</p> : <p>{card.back}</p>}
                        <div className="d-flex mb-3">
                            <div className="mr-2">
                                <button className="text-light btn btn-secondary" onClick={handleFlipClick}>Flip</button>
                            </div>
                            <div>
                                <button className="text-light btn-primary btn" onClick={handleNextClick}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }else if(allCards && allCards.length <= 2){
        return (
        <>
            <nav>
                <ol className="breadcrumb">
                     <li className="breadcrumb-item">
                        {" "}
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        {" "}
                        <Link to={`/decks/${deckId}`}>{eachDeck.name}</Link>
                    </li>
                    <li className="breadcrumb-item">Study</li>
                </ol>
            </nav>
            <div className="container">
                <div>
                    <h1>Study: {eachDeck.name}</h1>
                </div>
                <div>
                    <h2>Not enough cards.</h2>
                </div>
                <div>
                    <p>{`You need at least 3 cards to study. There are ${allCards.length} cards in this deck.`}</p>
                </div>
                <div className="btn btn-primary">
                    <Link to="#" className="text-light"><FaPlus/> Add Cards</Link>
                </div>
            </div>
        </>
     )

    }else if(allCards){
        return handleRestart()
    }
    return <p>Loading...</p>
}

export default Study