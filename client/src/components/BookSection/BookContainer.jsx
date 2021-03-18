import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  ${'' /* width: 50%;
  height: 60%; */}
  display: center;
  margin: auto; 
  justify-content: center;
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  padding: 25px;
`;

const SaveButton = styled.span`
  justify-content: center;
  align-contents: center;
  background-color: transparent;
  border-style: none; 
`;

const Icon = styled.i`  
  justify-content: center;
  font-size: 8vw;
  margin-left: 2vw;
  margin-right: 2vw;
  background-color: transparent;
  color: #ff9b93; 
  cursor:pointer; 
  &:hover {
    font-weight: 900;
    outline: none; 
    color: #ff6c60;
  }
`;

const Image = styled.img`
  width: 15vw;
  height: 25vw;
`;

const BookContainer = ({ data, click, saveBookInfo }) => {
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
    setBooks([]);
    click();
  };

  const currentBook = books[bookIndex];

  const nextBook = () => {
    const resetIndex = bookIndex === books.length - 1;
    const index = resetIndex ? 0 : bookIndex + 1;
    setBookIndex(index);
  };

  const saveDisliked = (e) => {
    const bookResult = {};
    bookResult.ibsn = currentBook.volumeInfo.industryIdentifiers[0].identifier;
    bookResult.title = currentBook.volumeInfo.title;
    bookResult.author = currentBook.volumeInfo.authors[0];
    bookResult.published = currentBook.volumeInfo.publishedDate;
    bookResult.description = currentBook.volumeInfo.description;
    bookResult.image = currentBook.volumeInfo.imageLinks.thumbnail;
    bookResult.liked = false;
    saveBookInfo(bookResult);
    nextBook();
    console.log('savedisliked called');
  };

  const saveLiked = (e) => {
    const bookResult = {};
    bookResult.ibsn = currentBook.volumeInfo.industryIdentifiers[0].identifier;
    bookResult.title = currentBook.volumeInfo.title;
    bookResult.author = currentBook.volumeInfo.authors[0];
    bookResult.published = currentBook.volumeInfo.publishedDate;
    bookResult.description = currentBook.volumeInfo.description;
    bookResult.image = currentBook.volumeInfo.imageLinks.thumbnail;
    bookResult.liked = true;
    saveBookInfo(bookResult);
    nextBook();
    console.log('saveliked called');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      saveDisliked();
    }
    if (e.key === 'ArrowRight') {
      saveLiked();
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

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
              <SaveButton name="false" onClick={saveDisliked}>
                <Icon className="fas fa-times" />
              </SaveButton>
              <SaveButton name="true" onClick={saveLiked}>
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
