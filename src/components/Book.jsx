import React from "react";
import PropTypes from "prop-types";

const Book = ({ book: { title, imageLinks, authors, shelf }, shelves }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("{${imageLinks && imageLinks.thumbnail}}")`,
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              {shelves.map((s) => (
                <option value={s} selected={s === shelf}>
                  {s}
                </option>
              ))}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors && authors.length && authors.map((a) => <p>{a}</p>)}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
