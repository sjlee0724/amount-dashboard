import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

const ModalWrapper = styled.div`
  width: 300px;
  height: 150px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;
  text-align: center;
  display: table;
`;

const SuccessForm = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: black;
  font-weight: bold;
`;
const FailedForm = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: black;
  font-weight: bold;
`;

function Modal({ showModal, APIresult }) {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper>
            {APIresult === true ? (
              <SuccessForm>등록 완료</SuccessForm>
            ) : (
              <FailedForm>등록 실패</FailedForm>
            )}
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}
export default Modal;
