import React from 'react';
import styled from '@emotion/styled';

const CardFooterStyle = styled.footer`
  min-height: 60px;
  margin: 5px;
  border-radius: 0 0 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const CardFooter = (props) => {
  const { bmi } = props;

  let criteria = {};

  if (!bmi) {
    criteria = {
      title: '---',
      backgroundColor: '#d3d8e2',
    };
  } else if (bmi < 18.5) {
    criteria = {
      title: '體重過輕',
      backgroundColor: '#1ba6f1',
    };
  } else if (18.5 <= bmi && bmi < 24) {
    criteria = {
      title: '正常範圍',
      backgroundColor: '#13d569',
    };
  } else if (24 <= bmi && bmi < 27) {
    criteria = {
      title: '過重',
      backgroundColor: '#dcc200',
    };
  } else if (27 <= bmi && bmi < 30) {
    criteria = {
      title: '輕度肥胖',
      backgroundColor: '#f09831',
    };
  } else if (30 <= bmi && bmi < 35) {
    criteria = {
      title: '中度肥胖',
      backgroundColor: '#e47a00',
    };
  } else if (bmi >= 35) {
    criteria = {
      title: '重度肥胖',
      backgroundColor: '#ee362d',
    };
  }
  return (
    <CardFooterStyle
      style={{
        backgroundColor: criteria.backgroundColor,
      }}
    >
      {criteria.title}
    </CardFooterStyle>
  );
};

export default CardFooter;
