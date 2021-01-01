import React, { useState } from 'react';
import Book from './Book';

const Slider = ({ data }) => {
  const [books, setBooks] = useState([]);
  const [length, newLength] = useState(0);
  const [slider, startSlider] = useState(false);

  const setSlider = (query) => {
    setBooks(query);
    newLength(query.length);
    console.log(query);
  };
  
  

  if (books.length > 0) {
    startSlider(true);
  }

  return (
    <div>
      {slider ? (books.map((item, index) => {
        <Book key={index} item={item} />
      })
      )
        : null
      }
    </div>
  );
};

export default Slider;
