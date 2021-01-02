import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Book from './Book';

const Container = styled.div`
  max-width: 500px;
  position: relative;
  margin: auto; 
`;

const BookContainer = ({ data, click }) => {
  const [books, setBooks] = useState([]);
  const [carousel, startCarousel] = useState(false);

  useEffect(() => {
    const setSlider = (query, callback) => {
      setBooks(query);
      callback();
    };
    setSlider(data, () => {
      if (data.length > 0) {
        startCarousel(true);
      }
    });
  }, [data]);

  const handleClick = () => {
    click();
  };

  return (
    <div>
      { carousel
        ? (
          <Container>
            <button type="button" onClick={handleClick}>Change Genre</button>
            {books.map((book) => (
              <Book book={book.volumeInfo} />
            ))}
          </Container>
        )
        : null}
    </div>
  );
};

export default BookContainer;
