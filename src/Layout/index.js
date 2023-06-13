import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Home from "../home/Home";
import { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import Study from "../study/Study";
import {useHistory} from "react-router-dom"
import CreateDeck from "../createDeck/CreateDeck";
import DeckInfo from "../deck/DeckInfo";
import { deleteDeck } from "../utils/api";

function Layout() {
  const [decks, setDecks] = useState([])
  const [cards, setCards] = useState([])
  const history = useHistory()
  useEffect(()=>{
    listDecks()
    .then(data => setDecks(data))
  }, [])

  function handleDelete(deckToDelete){
    const confirm = window.confirm("Delete this deck? You will not be able to recover it.")
    if(confirm){
      deleteDeck(deckToDelete)
      .then(()=>listDecks())
      .then(data => setDecks(data))
    }
  }

  return (
    <>
      <Header />
      <Switch>
          <Route path="/" exact={true}>
            <Home decks={decks} handleDelete={handleDelete}/>
          </Route>
          <Route path="/decks/new">
            <CreateDeck decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/:deckId" exact={true}>
            <DeckInfo />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study decks={decks} />
          </Route>
          <Route path="/*" exact>
            <NotFound />
          </Route>
      </Switch>
    </>
  );
}

export default Layout;
