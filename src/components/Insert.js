import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useAsync from '../useAsync';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import Modal from './Modal';

const InsertForm = styled.div`
  margin: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TimesInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 170px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const ButtonClicksBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const AmountInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const DescriptionInput = styled.textarea`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 10px;
  height: 150px;
`;

const InsertButton = styled.button`
  outline: none;
  border: 1px grey;
  border-radius: 4px;
  color: grey;
  font-border:
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 210px;
  width: 55px;
  height: 30px;
  font-size: 18px;
  text-align: center;
  background: #A6ECA8;
  &:hover {
  background: #77DD76;
  }
  &:active {
  background: #30b82e;
  }
`;

const Select = styled.select`
  appearance: none;
  width: 120px;
  padding: 13px 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
`;

const Option = styled.option`
  color: grey;
`;

function Insert() {
  const InsertData = async () => {
    console.log('Call API');
    if (date === '') {
      return moment(startDate).format('YYYY-MM-DD');
    }
    const response = await axios.post(
      'http://1.230.244.147:3000/records/insert',
      {
        date: date,
        time: time,
        type: type,
        description: description,
        amount: amount,
      },
    );
    console.log(response.data);
    if (response.data === 'Insert Success!') {
      console.log('true');
      setAPIresult(true);
      openModal();
      setInputs({
        date: '',
        time: '',
        amount: '',
        description: '',
        type: '소득',
      });
      setStartDate(new Date());
    } else if (response.data.fatal === false) {
      console.log('fail');
      setAPIresult(false);
      openModal();
    }
    return response.data;
  };

  // eslint-disable-next-line
  const [state, insert] = useAsync(InsertData, [], true);
  const [inputs, setInputs] = useState({
    date: '',
    time: moment().format('HH:mm'),
    amount: '',
    description: '',
    type: '소득',
  });
  const [startDate, setStartDate] = useState(new Date());
  const [transDate, setTransDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [APIresult, setAPIresult] = useState(null);
  const { date, time, amount, description, type } = inputs;
  const options = [
    '소득',
    '꾸밈비',
    '고정비',
    '생활비',
    '차량비',
    '친목비',
    '적금',
  ];

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    if (showModal === true) {
      setTimeout(() => {
        setShowModal(false);
      }, 1000);
    }
  }, [showModal]);

  useEffect(() => {
    setTransDate(moment(startDate).format('YYYY-MM-DD'));
    setInputs({
      ...inputs,
      date: transDate,
    });
    // eslint-disable-next-line
  }, [startDate]);

  return (
    <>
      <InsertForm>
        <ButtonClicksBlock>
          <DatePicker
            name="date"
            locale={ko}
            selected={startDate}
            dateFormat="yyyy.MM.dd(eee)"
            onChange={(date) => setStartDate(date)}
            placeholderText="날짜를 선택해주세요."
            wrapperClassName="date_picker"
          />
          <TimesInput
            type="time"
            name="time"
            value={time}
            required
            placeholder="시간"
            onChange={onChange}
          />
          <Select name="type" onChange={onChange}>
            {options.map((option, index) => {
              return <Option key={index}>{option}</Option>;
            })}
          </Select>
        </ButtonClicksBlock>
        <AmountInput
          name="amount"
          placeholder="금액(₩)"
          onChange={onChange}
          value={amount}
        />
        <DescriptionInput
          name="description"
          placeholder="설명"
          onChange={onChange}
          value={description}
        />
        <InsertButton onClick={insert}>등록</InsertButton>
        <Modal showModal={showModal} APIresult={APIresult} />
      </InsertForm>
    </>
  );
}

export default Insert;
