import React, { useEffect, useState } from 'react';
import Slider from './Slider';

const Genres = ({ loadSlider, data }) => {
  const [button, clickButton] = useState(false);
  const [genre, changeGenre] = useState('');

  const handleClick = (e) => {
    changeGenre(e.target.name);
    clickButton(true);
    console.log('clicked');
  };

  useEffect(() => {
    if (button === true) {
      loadSlider(genre);
    }
  });

  console.log(genre, button, 'info', data.length);


  return (
    <div>
      {button ? <Slider data={data} />
        : (
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
        )}
    </div>
  );
};

export default Genres;
