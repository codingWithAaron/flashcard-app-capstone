import React from "react";
import Deck from "./Deck";
import {Link} from "react-router-dom"
import {FaPlus} from "react-icons/fa"
import {Switch, Route} from "react-router-dom"

function Home({decks}){
    return (
        <>
            <Switch>
                <Route path="/">
                    <div className="mb-2 container">
                        <Link className="btn btn-secondary"><FaPlus/>Create Deck</Link>
                    </div>
                    <div>
                        {decks.map((deck)=><Deck deck={deck} key={deck.id}/>)}
                    </div>
                </Route>
                <Route>

                </Route>
            </Switch>
        </>
    )
}

export default Home