import { faDirections } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useMemo, useState } from 'react';
import TinderCard from 'react-tinder-card';
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

const CardDiv = styled.div`
  ${'' /* display: flex; */}
  ${'' /* width: 2000px;
  max-height: 1000px; */}
  ${'' /* justify-content: center; */}
  ${'' /* flex-direction: column; */}
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  ${'' /* max-width: 260px; */}
  height: 25vw;
`;

const TC = styled.div`
  position: absolute;
`;

const Card = styled.div`
  ${'' /* position: absolute; */}
  background-color: #fff;
  width: 18vw;
  max-width: 260px;
  height: 25vw;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 1vw;
  background-size: cover;
  background-position: center;
`;

const BookContainer = ({ data, click, saveBookInfo }) => {
  const [books, setBooks] = useState([]);
  const [carousel, startCarousel] = useState(false);
  const [index, setIndex] = useState(data.length - 1);

  useEffect(() => {
    const setSlider = (query, callback) => {
      setBooks(query);
      callback();
    };
    setSlider(data, () => {
      if (data.length > 0) {
        console.log('trueeeeeeslider', data);
        startCarousel(true);
      }
    });
  }, [data]);

  const handleClick = () => {
    setBooks([]);
    click();
  };

  const childRefs = useMemo(() => Array(data.length).fill(0).map(i => React.createRef()), []);

  const swiped = (direction, book) => {
    let boolean;
    if (direction === 'left') {
      boolean = false;
    }
    if (direction === 'right') {
      boolean = true;
    }
    const bookResult = {};
    bookResult.ibsn = book.volumeInfo.industryIdentifiers[0].identifier;
    bookResult.title =book.volumeInfo.title;
    bookResult.author = book.volumeInfo.authors[0];
    bookResult.published =book.volumeInfo.publishedDate;
    bookResult.description =book.volumeInfo.description;
    bookResult.image =book.volumeInfo.imageLinks.thumbnail;
    bookResult.liked = boolean;
    console.log(bookResult, 'inside swipe of bookcontainer');
    saveBookInfo(bookResult);
    setIndex(index - 1);
  };
  
  const swipe = (dir) => {
        console.log(index, 'button clicked', childRefs[index]);
        childRefs[index].current.swipe(dir); // Swipe the card!
  };
  

  const handleKeyPress = (e) => {
    console.log('keypress initiated');
    if (e.key === 'ArrowLeft') {
      console.log('left called', data[index].volumeInfo);
      // saveDisliked();
      swiped('left', data[index]);
    }
    if (e.key === 'ArrowRight') {
      console.log('right called', data[index].volumeInfo);
      // saveLiked();
      swiped('right', data[index]);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [index]);

  return (
    <div>
      { carousel
        ? (
          <WholeContainer>
            <ButtonContainer>
              <button type="button" onClick={handleClick}>Change Genre</button>
            </ButtonContainer>
            <Container>
            <CardDiv>
          <CardContainer>
            {data.map((book, ind) =>
              <TC>
              <TinderCard
                ref={childRefs[ind]}
                key={book.name}
                preventSwipe={[ 'up', 'down']}
                onSwipe={(dir) => swiped(dir, data[ind])}>
                {/* // onCardLeftScreen={() => outOfFrame(book.name)}> */}
                <Card style={{ backgroundImage: 'url(' + book.volumeInfo.imageLinks.thumbnail + ')' }}>
                </Card>
              </TinderCard>
              </TC>
            )}
          </CardContainer>
          </CardDiv>
            </Container>
            <ButtonContainer>
              <SaveButton name="false" onClick={() => swipe('false')}>
                <Icon className="fas fa-times" />
              </SaveButton>
              <SaveButton name="true" onClick={() => swipe('true')}>
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
