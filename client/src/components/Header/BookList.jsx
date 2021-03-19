import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  display: block;
  padding: 2vw 2vw;
  border-spacing: 5vw;
`;

const TableRow = styled.tr`
  border: 1vw solid black;
  margin: 20vw;
  border-collapse: separate;
  border-spacing: 0 20vh;
`;

const TitleCell = styled.td`
  width: 12vw;
  text-align: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5vw;
`;

const BookList = ({ userBooks, user, list }) => {
  const replaceTitle = (text) => {
    if (userBooks.length > 1) {
      const newText = text.replace(' ', '-');
      return newText;
    }
    return '';
  };

  return (
    <List>
      {list
        ? (
          <div>
            <h2>{`${user}'s List of Books`}</h2>
            <table>
              <tbody>
                {userBooks.map((book) => (
                  <TableRow>
                    <td>
                      <a href={`https://www.powells.com/book/${replaceTitle(book.title)}-${book.isbn}`}>
                        <img src={book.image} alt={book.isbn} />
                      </a>
                    </td>
                    <TitleCell>
                      <div>
                        <Title>
                          {book.title}
                        </Title>
                        <div>
                         {book.author} 
                        </div>
                        <div>
                         {book.published}
                        </div>
                      </div>
                      <div>
                      </div>
                    </TitleCell>
                    {/* <td>{`${book.title} ${book.author} ${book.published}`}</td> */}
                    <td>{book.description}</td>
                    <td>
                      <a href={`https://www.powells.com/book/${replaceTitle(book.title)}-${book.isbn}`}>
                        <button type="button">Buy Book</button>
                      </a>
                    </td>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </div>
        )
        : null}
    </List>
  );
};

export default BookList;
