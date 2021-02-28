import React, { useState } from 'react';
import styled from 'styled-components';
import Head from './Head';
import Insert from './Insert';
import DashBoard from './DashBoard';

const TemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const ButtonBlock = styled.div`
  display: flex;
`;

const Button = styled.button`
  flex: 1;
  font-size: 20px;
  padding: 15px;
  border-bottom-${(props) => props.side}-radius: 16px;
  background: white;
  color: grey;
  border: 1px solid #d7dbde;
  outline: none;
`;

function AppTemplate() {
  const [component, setcomponentChange] = useState('List');

  const buttonRouter = (route) => {
    setcomponentChange(route);
  };

  return (
    <TemplateBlock>
      <Head />
      {component === 'List' ? <Insert /> : <DashBoard />}
      <ButtonBlock>
        <Button side="left" onClick={() => buttonRouter('DashBoard')}>
          차트
        </Button>
        <Button side="right" onClick={() => buttonRouter('List')}>
          등록
        </Button>
      </ButtonBlock>
    </TemplateBlock>
  );
}

export default AppTemplate;
