import React, { useEffect, useState } from 'react';
import Book from './Book';

const Slider = ({ data, click }) => {
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
          <div>
            <button type="button" onClick={handleClick}>Change Genre</button>
            <Book item={books[0].volumeInfo} />
          </div>
        )
        : null}
    </div>
  );
};

export default Slider;
