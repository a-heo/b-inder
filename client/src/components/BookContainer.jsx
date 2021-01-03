import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 400px;
  height: 600px;
  display: center;
  margin: auto; 
  justify-content: center;
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  padding: 25px;
`;

const SaveButton = styled.button`
  justify-content: center;
  align-contents: center;
  background-color: transparent;
  border-style: none; 
`;

const Icon = styled.i`  
  justify-content: center;
  font-size: 200%;
  background-color: transparent;
  color: red; 
`;

const Image = styled.img`
  width: 400px;
  height: 600px;
`;

const BookContainer = ({ data, click }) => {
  const [books, setBooks] = useState([]);
  const [carousel, startCarousel] = useState(false);
  const [bookIndex, setBookIndex] = useState(0);

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

  const currentBook = books[bookIndex];

  const nextBook = () => {
    const resetIndex = bookIndex === books.length - 1;
    const index = resetIndex ? 0 : bookIndex + 1;
    setBookIndex(index);
  };

  const saveData = (e) => {
    //put request to db based on e.targetname 
    nextBook();
    console.log('next picture');
  };

  return (
    <div>
      { carousel
        ? (
          <WholeContainer>
            <ButtonContainer>
              <button type="button" onClick={handleClick}>Change Genre</button>
            </ButtonContainer>
            <Container>
              <Image
                src={currentBook.volumeInfo.imageLinks.thumbnail}
                alt={currentBook.volumeInfo.industryIdentifiers[0].identifier}
              />
            </Container>
            <ButtonContainer>
              <SaveButton type="button" name="dislike" onClick={saveData}>
                <Icon className="fas fa-times" />
              </SaveButton>
              <SaveButton type="button" name="dislike" onClick={saveData}>
                <Icon className="far fa-heart" />
              </SaveButton>
            </ButtonContainer>
          </WholeContainer>
        )
        : null}
    </div>
  );
};

export default BookContainer;
