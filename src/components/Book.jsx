import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import _ from "lodash";

const Book = ({ book, shelves, onUpdate }) => {
  const history = useHistory();
  const handleUpdate = (book, e) => {
    onUpdate(book, e.target.value);
    history.push("/");
  };
  return (
    !_.isEmpty(book) && (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  book.imageLinks && book.imageLinks.thumbnail
                }")`,
              }}
            />
            <div className="book-shelf-changer">
              <select
                defaultValue={
                  !book.shelf || book.shelf === undefined ? "none" : book.shelf
                }
                onChange={(e) => handleUpdate(book, e)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                {shelves.map((s, index) => (
                  <option key={index} value={s}>
                    {_.startCase(s)}
                  </option>
                ))}
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors &&
              book.authors.length > 0 &&
              book.authors.map((a, index) => <p key={index}>{a}</p>)}
          </div>
        </div>
      </li>
    )
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Book;
