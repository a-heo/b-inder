import React from 'react';

const Book = ({ item }) => (
  <div>
    <img src={item.imageLinks.thumbnail} alt="bookimage" />
  </div>
);

export default Book;
