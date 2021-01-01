import React, { useEffect, useState } from 'react';
import Book from './Book';

const Slider = ({ data }) => {
  const [books, setBooks] = useState([]);
  const [length, newLength] = useState(0);
  const [carousel, startCarousel] = useState(false);

  useEffect(() => {
    const setSlider = (query) => {
      setBooks(query);
      newLength(query.length);
    };
    setSlider(data);
    startCarousel(true);
  }, [data]);


  // if (data.length) {
  //   startCarousel(true);
  //   console.log('slider info changes', bool);
  // };

  return (
    <div>
      {carousel ? (books.map((item) => {
        <Book key={item.id} item={item.volumeInfo} />
      })
      )
        : null
      }
    </div>
  );
};

export default Slider;
