import React, { useState } from 'react';
import Slider from './Slider';

const Genres = ({ loadSlider, data }) => {
  const [button, clickButton] = useState(false);
  const [genre, changeGenre] = useState('');

  const handleClick = (e) => {
    clickButton(true);
    changeGenre(e.target.name);
  };

  if (button === true) {
    loadSlider(genre);
  }

  return (
    <div>
      {button ? <Slider data={data} />
        : (
          <div>
            <button
              name="fiction"
              onClick={handleClick}
            >
              Fiction
            </button>
            <button
              name="juvenile"
              onClick={handleClick}
            >
              Children's
            </button>
            <button
              name="youngadult"
              onClick={handleClick}
            >
              Young Adult
            </button>
            <button
              name="graphic"
              onClick={handleClick}
            >
              Graphic Novels
            </button>
            <button
              name="mystery"
              onClick={handleClick}
            >
              Mystery
            </button>
            <button onClick={handleClick}>Fantasy</button>
          </div>
        )}
    </div>
  );
};

export default Genres;
