import React, { useEffect, useState } from 'react';
import Book from './Book';

const Slider = ({ data }) => {
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

  return (
    <div>
      { carousel ?
        <Book item={books[0].volumeInfo} />
        : null
      }
    </div>
  );
};

export default Slider;
