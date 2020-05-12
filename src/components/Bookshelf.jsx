import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ shelf, shelves, reads }) => {
  console.log(reads);
  const booksByShelf = reads.filter((book) => book.shelf === shelf);
  const title = shelf;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksByShelf.map((book, index) => (
            <Book key={index} book={book} shelves={shelves} />
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  read: PropTypes.array.isRequired,
};

export default Bookshelf;
