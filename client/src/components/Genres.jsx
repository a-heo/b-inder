import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BookContainer from './BookContainer';

const GenreLocation = styled.div`
  justify-content: space-around;
  text-align: center;
`;

const Button = styled.button`
  background-color: #70af85;
  color: #FCF8E8;
  border: 2px #70af85; 
  border-radius: 5px;
`;

const Genres = ({ loadSlider, data, saveBookInfo }) => {
  const [button, clickButton] = useState(false);
  const [genre, changeGenre] = useState('');

  const handleClick = (e) => {
    changeGenre(e.target.name);
    clickButton(true);
  };

  useEffect(() => {
    if (button) {
      loadSlider(genre);
    }
  }, [genre]);

  const changeGenres = () => {
    clickButton(false);
  };

  return (
    <div>
      {button ? <BookContainer data={data} click={changeGenres} saveBookInfo={saveBookInfo} />
        : (
          <GenreLocation>
            <div>
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
            </div>
            <div>
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
            </div>
          </GenreLocation>
        )}
    </div>
  );
};

export default Genres;
