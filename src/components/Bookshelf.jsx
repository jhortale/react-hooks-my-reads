import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Book from "./Book";

const Bookshelf = ({ shelf, shelves, reads, onUpdate }) => {
  const booksByShelf = reads.filter((book) => book.shelf === shelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{_.startCase(shelf)}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksByShelf.map((book, index) => (
            <Book
              key={index}
              book={book}
              shelves={shelves}
              onUpdate={onUpdate}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  shelf: PropTypes.string,
  reads: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Bookshelf;
