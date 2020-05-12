import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const ListBooks = ({ reads, onUpdate }) => {
  const history = useHistory();
  const shelves = [...new Set(reads.map((book) => book.shelf))];

  return reads.length > 0 ? (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, index) => (
            <Bookshelf
              onUpdate={onUpdate}
              key={index}
              shelf={shelf}
              shelves={shelves}
              reads={reads}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => history.push("/search")}>Add a book</button>
      </div>
    </div>
  ) : (
    <p>no Books</p>
  );
};

ListBooks.propTypes = {
  reads: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ListBooks;
