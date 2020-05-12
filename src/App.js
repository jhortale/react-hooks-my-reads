import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";

function App() {
  const [reads, setReads] = useState([{}]);
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => setReads(books));
  });

  const onSearch = (terms) => {
    BooksAPI.search(terms).then((books) => setResult(books));
    setTerm(terms);
  };

  const onUpdate = async (book, shelf) => {
    try {
      const books = await BooksAPI.update(book, shelf);
      setTerm("");
      setResult([]);
      console.log(books);
    } catch (err) {
      console.log(err);
    }

    //console.log(reads);
  };

  return (
    <Switch>
      <Route exact path="/">
        <ListBooks reads={reads} onUpdate={onUpdate} />
      </Route>
      <Route path="/search">
        <SearchBooks
          onSearch={onSearch}
          onUpdate={onUpdate}
          result={result}
          reads={reads}
          term={term}
        />
      </Route>
    </Switch>
  );
}

export default App;
