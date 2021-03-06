import React, { useState } from 'react';
import styled from 'styled-components';

const CheckList = ({ list, setList }) => (
  <div>
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
  </div>
);

export default CheckList;
