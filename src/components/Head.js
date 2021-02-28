import React from 'react';
import styled from 'styled-components';

const HeadBlock = styled.div`
  padding-top: 38px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 38px;
  text-align: center;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
`;

function Head() {
  return (
    <HeadBlock>
      <h1>가계부</h1>
    </HeadBlock>
  );
}

export default Head;
