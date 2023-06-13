import React from "react";
import Deck from "./Deck";
import {Link} from "react-router-dom"
import {FaPlus} from "react-icons/fa"
import {Switch, Route} from "react-router-dom"

function Home({decks, handleDelete}){
    return (
        <>
            <Switch>
                <Route path="/">
                    <div className="mb-2 container">
                        <Link to="/decks/new" className="btn btn-secondary"><FaPlus/>Create Deck</Link>
                    </div>
                    <div>
                        {decks.map((deck)=><Deck handleDelete={handleDelete} deck={deck} key={deck.id}/>)}
                    </div>
                </Route>
            </Switch>
        </>
    )
}

export default Home