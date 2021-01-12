import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  background-color: #fff;
  height: 360px;
  width: 303px;
  font-size: 20px;
  span {
    color: #858585;
  }
  h3 {
    font-size: 20px;
    display: inline-block;
    margin: 0 0 20px 20px;
    width: 120px;
  }
  h3:nth-of-type(1) {
    color: #1ba6f1;
  }
  h3:nth-of-type(2) {
    color: #13d569;
  }
  h3:nth-of-type(3) {
    color: #dcc200;
  }
  h3:nth-of-type(4) {
    color: #f09831;
  }
  h3:nth-of-type(5) {
    color: #e47a00;
  }
  h3:nth-of-type(6) {
    color: #ee362d;
  }
`;

const Standard = () => (
  <Section>
    <h3>體重過輕</h3>
    <span> BMI {'<'} 18.5</span>
    <br />

    <h3>正常範圍</h3>
    <span>
      {' '}
      18.5{'<='}BMI{'<'}24
    </span>
    <br />

    <h3>過重</h3>
    <span>
      24{'<='}BMI{'<'}27
    </span>
    <br />

    <h3>輕度肥胖</h3>
    <span>
      27 {'<='} BMI {'<'}30{' '}
    </span>
    <br />

    <h3>中度肥胖</h3>
    <span>
      30 {'<='} BMI{'<'}35{' '}
    </span>
    <br />

    <h3>重度肥胖</h3>
    <span>BMI {'>='} 35 </span>
  </Section>
);
export default Standard;
