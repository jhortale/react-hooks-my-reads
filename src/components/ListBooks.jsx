import React from "react";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

const ListBooks = ({ reads }) => {
  const shelves = [...new Set(reads.map((book) => book.shelf))];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, index) => (
            <Bookshelf
              key={index}
              shelf={shelf}
              shelves={shelves}
              reads={reads}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
        </button>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  reads: PropTypes.array.isRequired,
};

export default ListBooks;
