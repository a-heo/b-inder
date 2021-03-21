import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  width: 0%
`;

const CheckList = ({ list, setList }) => (
  <Box>
    {list ? (
      <button type="button" onClick={() => setList(!list)}>
        Book Genres
      </button>
    )
      : (
        <button type="button" onClick={() => setList(!list)}>
          Show My Books
        </button>
      )}
  </Box>
);

export default CheckList;
