import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ListBlock = styled.div`
  flex: 1;
  padding-left: 32px;
  padding-right: 14px;
  justify-content: space-between;
  overflow: scroll;
  overflow-x: hidden;
  height: 10px;
`;

const ListItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 12px;
  color: grey;
  justify-content: space-between;
`;

const ListItem = styled.span`
  text-align: center;
  width: 100px;
  font-size: 12px;
`;

const HeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
`;

const HeadItem = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 20px;
  border: 1px solid #d7dbde;
  text-align: center;
  color: grey;
`;

function List(props) {
  const { loading, data: rows, error } = props.data;

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <HeadBlock>
        <HeadItem>날짜</HeadItem>
        <HeadItem>시간</HeadItem>
        <HeadItem>분류</HeadItem>
        <HeadItem>설명</HeadItem>
        <HeadItem>금액</HeadItem>
      </HeadBlock>
      <ListBlock>
        {rows.map((row) => {
          const { id, date, time, type, description, amount } = row;
          return (
            <ListItemBlock key={id}>
              <ListItem>{moment(date).format('YYYY/MM/DD')}</ListItem>
              <ListItem>{time.substring(0, 5)}</ListItem>
              <ListItem>{type}</ListItem>
              <ListItem>{description}</ListItem>
              <ListItem>{Number(amount).toLocaleString('en')}원</ListItem>
            </ListItemBlock>
          );
        })}
      </ListBlock>
    </>
  );
}

export default List;
