import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import BookContainer from './BookContainer';

const GenreBox = styled.div`
  display: flex; 
  justify-content: center; 
  text-align: center;
`;

const GenreLocation = styled.div`
  display: flex; 
  flex-direction: column;
`;

const GenreRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 10px;
  background-color: #70af85;
  color: #FCF8E8;
  border: 2px #70af85; 
  font-size: 36px;
  border-radius: 5px;
  margin-top: 2vw;
  margin-bottom: 2vw; 
`;

const Genres = ({ /*loadSlider, data,*/ saveBookInfo }) => {
  const [button, clickButton] = useState(false);
  const [genre, changeGenre] = useState('');
  const [data, setData] = useState([]);
  const [fiction, setFiction] = useState([]);
  const [juvenile, setChildren] = useState([]);
  const [youngadult, setYoungadult] = useState([]);
  const [graphic, setGraphic] = useState([]);
  const [mystery, setMystery] = useState([]);
  const [fantasy, setFantasy] = useState([]);

  const handleClick = (e) => {
    changeGenre(e.target.name);
    if (e.target.name === 'fiction') {
      setData(fiction);
    }
    if (e.target.name === 'juvenile') {
      setData(juvenile);
    }
    if (e.target.name === 'youngadult') {
      setData(youngadult);
    }
    if (e.target.name === 'graphic') {
      setData(graphic);
    }
    if (e.target.name === 'mystery') {
      setData(mystery);
    }
    if (e.target.name === 'fantasy') {
      setData(fantasy);
    }
    clickButton(true);
  };

  //original
  // const loadSlider = (genre) => {
  //   axios.get(`api/books/${genre}`)
  //     .then((response) => {
  //       // filter data with only those that have volumeinfo
  //       const books = response.data.filter(
  //         (book) => book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail,
  //       );
  //       setData(books);
  //     })
  //     .catch((error) => {
  //     });
  // };

  //added to save data ahead of time to prevent delay
  useEffect(() => {
    const genreName = ['fiction', 'juvenile', 'youngadult', 'graphic', 'mystery', 'fantasy'];
    let genreState = [setFiction, setChildren, setYoungadult, setGraphic, setMystery, setFantasy];
    for (let i = 0; i < genreName.length; i++) {
      axios.get(`api/books/${genreName[i]}`)
        .then((response) => {
          const books = response.data.filter(
            (book) => book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail,
          );
          const stateChange = genreState[i];
          stateChange(books);
        })
        .catch((error) => {
          console.log(error, 'didnt succeed');
        });
    }
  }, []);

  // useEffect(() => {
  //   if (button) {
  //     loadSlider(genre);
  //   }
  // }, [genre]);

  const changeGenres = () => {
    clickButton(false);
    changeGenre('');
  };

  return (
    <GenreBox>
      {button ? <BookContainer data={data} click={changeGenres} saveBookInfo={saveBookInfo} />
        : (
          <GenreLocation>
            <h2>Choose a Genre</h2>
            <GenreRow>
              <Button
                type="button"
                name="fiction"
                onClick={handleClick}
              >
                Fiction
              </Button>
              <Button
                type="button"
                name="juvenile"
                onClick={handleClick}
              >
                Children's
              </Button>
              <Button
                type="button"
                name="youngadult"
                onClick={handleClick}
              >
                Young Adult
              </Button>
            </GenreRow>
            <GenreRow>
              <Button
                type="button"
                name="graphic"
                onClick={handleClick}
              >
                Graphic Novels
              </Button>
              <Button
                type="button"
                name="mystery"
                onClick={handleClick}
              >
                Mystery
              </Button>
              <Button
                type="button"
                name="fantasy"
                onClick={handleClick}
              >
                Fantasy
              </Button>
            </GenreRow>
          </GenreLocation>
        )}
    </GenreBox>
  );
};

export default Genres;
