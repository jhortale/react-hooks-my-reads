import React, { useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";

function App() {
  const [reads, setReads] = useState([{}]);
  useEffect(() => {
    //     var grouped = _.mapValues(_.groupBy(cars, 'make'),
    //                           clist => clist.map(car => _.omit(car, 'make')));

    // console.log(grouped);
    BooksAPI.getAll().then((books) => setReads(books));
  });

  return (
    <Switch>
      <Route exact path="/">
        <ListBooks reads={reads} />
      </Route>
      <Route path="/search">
        <SearchBooks />
      </Route>
    </Switch>
  );
}

export default App;
