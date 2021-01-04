import React from 'react';
import styled from 'styled-components';

import BookList from './BookList';
import Genres from './Genres';

const Title = styled.h1`
    font-size: 125px; 
    text-align: center;
    color: #f18c8e;
`;

const CenterContainer = ({
  userBooks, user, list, data, loadSlider, saveBookInfo,
}) => (
  <div>
    {list ? (
      <BookList userBooks={userBooks} user={user} list={list} />
    ) : (
      <div>
        <Title>b-inder</Title>
        <Genres data={data} loadSlider={loadSlider} saveBookInfo={saveBookInfo} />
      </div>
    )}
  </div>
);

export default CenterContainer;
