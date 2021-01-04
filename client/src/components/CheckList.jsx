import React, { useState } from 'react';
import styled from 'styled-components';

import BookList from './BookList';

const CheckList = ({ userBooks, user }) => {
const [list, setList] = useState(false);

const handleClick = () => {
    setList(!list);
}
  return (
    <div>
    <button type="button" onClick={handleClick}>Show My Books</button>
    <BookList userBooks={userBooks} user={user} list={list} />
    </div>
  );
};

export default CheckList;
