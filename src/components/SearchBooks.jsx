import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Book from "./Book";

const SearchBooks = ({ result, onSearch, reads, term, onUpdate }) => {
  const shelves = [...new Set(reads.map((book) => book.shelf))];
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };
  const history = useHistory();
  const handleBack = () => {
    onSearch("");
    history.push("/");
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={handleBack}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleSearch}
            value={term}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {result &&
            result.length > 0 &&
            result.map((book) => (
              <Book
                key={book.id}
                book={book}
                reads={reads}
                shelves={shelves}
                onUpdate={onUpdate}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  result: PropTypes.array.isRequired,
  reads: PropTypes.array.isRequired,
  term: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBooks;
