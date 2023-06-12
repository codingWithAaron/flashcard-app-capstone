import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Home from "../home/Home";
import { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import Study from "../study/Study";

function Layout() {
  const [decks, setDecks] = useState([])
  const [cards, setCards] = useState([])
  useEffect(()=>{
    listDecks()
    .then(data => setDecks(data))
}, [])

  return (
    <>
      <Header />
      <Switch>
          <Route path="/" exact={true}>
            <Home decks={decks}/>
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
