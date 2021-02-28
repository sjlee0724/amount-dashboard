import React from 'react';
import axios from 'axios';
import useAsync from '../useAsync';
import { Doughnut } from 'react-chartjs-2';
import List from './List';

async function getRecords() {
  const response = await axios.get(
    'http://1.230.244.147:3000/records/getRecord',
  );
  return response.data;
}

function DashBoard() {
  const [state, refetch] = useAsync(getRecords, [], false);
  const { loading, data: rows, error } = state;
  const validationArr = [0, 0, 0, 0, 0, 0, 0];
  const options = [
    '소득',
    '꾸밈비',
    '고정비',
    '생활비',
    '차량비',
    '친목비',
    '적금',
  ];

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!rows) return <button onClick={refetch}>불러오기</button>;

  rows.map((row) => {
    switch (row.type) {
      case '소득':
        validationArr[0] += row.amount;
        break;
      case '꾸밈비':
        validationArr[1] += row.amount;
        break;
      case '고정비':
        validationArr[2] += row.amount;
        break;
      case '생활비':
        validationArr[3] += row.amount;
        break;
      case '차량비':
        validationArr[4] += row.amount;
        break;
      case '친목비':
        validationArr[5] += row.amount;
        break;
      case '적금':
        validationArr[6] += row.amount;
        break;
      default:
        throw new Error(`Unhandled type: ${row.type}`);
    }
    return 0;
  });

  const expData = {
    labels: options,
    datasets: [
      {
        labels: options,
        data: validationArr,
        backgroundColor: [
          '#FF6961',
          '#ffb347',
          '#FDFD96',
          '#D2FDBB',
          '#AECBD6',
          '#6F7297',
          '#B19CD9',
        ],
      },
    ],
  };

  return (
    <>
      <Doughnut data={expData} height={120} />
      <List data={state} />
    </>
  );
}

export default DashBoard;
