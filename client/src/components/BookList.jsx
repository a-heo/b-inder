import React from 'react';
import styled from 'styled-components';

const BookList = ({ userBooks, user, list }) => {
  const replaceTitle = (text) => {
    if (userBooks.length > 1) { 
      const newText = text.replace(' ', '-');
      return newText;
    } else {
      return '';
    }
  };

  return (
    <div>
      {list
        ? (
          <div>
            <h2>{`${user}'s List of Books`}</h2>
            <table>
              <tbody>
                {userBooks.map((book) => (
                  <tr>
                    <td>
                      <a href={`https://www.powells.com/book/${replaceTitle(book.title)}-${book.isbn}`}>
                        <img src={book.image} alt={book.isbn} />
                      </a>
                    </td>
                    <td>{`${book.title} ${book.author} ${book.published}`}</td>
                    <td>{book.description}</td>
                    <td>
                      <a href={`https://www.powells.com/book/${replaceTitle(book.title)}-${book.isbn}`}>
                        <button type="button">Buy Book</button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        : null}
    </div>
  );
};

export default BookList;
