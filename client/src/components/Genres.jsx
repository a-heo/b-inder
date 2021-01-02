import React, { useEffect, useState } from 'react';
import BookContainer from './BookContainer';

const Genres = ({ loadSlider, data }) => {
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
      {button ? <BookContainer data={data} click={changeGenres} />
        : (
          <div>
            <div>
              <button
                type="button"
                name="fiction"
                onClick={handleClick}
              >
                Fiction
              </button>
              <button
                type="button"
                name="juvenile"
                onClick={handleClick}
              >
                Children's
              </button>
              <button
                type="button"
                name="youngadult"
                onClick={handleClick}
              >
                Young Adult
              </button>
            </div>
            <div>
              <button
                type="button"
                name="graphic"
                onClick={handleClick}
              >
                Graphic Novels
              </button>
              <button
                type="button"
                name="mystery"
                onClick={handleClick}
              >
                Mystery
              </button>
              <button
                type="button"
                name="fantasy"
                onClick={handleClick}
              >
                Fantasy
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Genres;
