import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

const CardBody = styled.div`
  ${'' /* * {
    outline: 1px solid red;
  } */}
  box-sizing: border-box;
  flex: 1;
  padding: 50px 50px 25px 50px;
  display: flex;
  flex-direction: column;
  ${'' /* position: relative; */}
  ${'' /* align-items: center; */}
  label {
    margin-bottom: 30px;
    span:first-of-type {
      display: inline-block;
      width: 70px;
    }
    cursor: pointer;
  }
  input[type='number'] {
    margin-left: 20px;
    margin-right: 10px;
    padding-right: 10px;
    padding-left: 10px;

    font-size: 20px;
    background-color: #ebebeb;
    outline: none;
    border: none;
    width: 90px;
    height: 35px;
    border-radius: 15px;
  }
  input[type='range'] {
    margin-bottom: 35px;
    outline: none;
    width: 100%;
    cursor: pointer;

    appearance: none;
    height: 1px;
    background-color: #a3a3a3;
    border-radius: 10px;
  }
  /* Special styling for WebKit/Blink */
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2.5px solid #858585;
    height: 20px;
    width: 20px;
    border-radius: 40px;
    background: white;
    cursor: pointer;
    margin-top: 0px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    /*   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */ /* Add cool effects to your sliders! */
  }

  /* All the same stuff for Firefox */
  input[type='range']::-moz-range-thumb {
    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
    border: 2.5px solid #858585;
    height: 20px;
    width: 20px;
    border-radius: 40px;
    background: white;
    cursor: pointer;
  }

  /* All the same stuff for IE */
  input[type='range']::-ms-thumb {
    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
    border: 2.5px solid #858585;
    height: 20px;
    width: 20px;
    border-radius: 40px;
    background: white;
    cursor: pointer;
  }
  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  & > div > :first-of-type {
    width: 70px;
    font-weight: 600;
    overflow: hidden;
  }
  & > div > :nth-of-type(2) {
    margin-left: 20px;
    margin-right: 10px;
    padding-right: 10px;
    padding-left: 10px;

    font-size: 20px;
    font-weight: 600;
    background-color: #f6f6f6;
    width: 90px;
    height: 35px;
    border-radius: 15px;
    line-height: 35px;
    overflow: hidden;
  }
  .wrap {
    height: 35px;
    overflow: hidden;
  }
  .normal-prompt-70 div {
    margin-top: -70px;
    transition: 0.5s;
  }
  .normal-prompt-0 div {
    margin-top: 0px;
    transition: 0.5s;
  }
`;

function BMIConverter(props) {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const { setBmi, bmi } = props;

  const calcBMI = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : '';

  useEffect(() => {
    setBmi(calcBMI(+height, +weight));
  }, [height, weight]);

  return (
    <CardBody>
      <label>
        <span>HEIGHT</span>
        <input
          type="number"
          min="0"
          max="220"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <span>cm</span>
      </label>
      <br />
      <input
        type="range"
        max="220"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
      <br />
      <label>
        <span>WEIGHT</span>
        <input
          type="number"
          min="0"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
        <span>kg</span>
      </label>
      <input
        type="range"
        max="180"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <br />
      <div>
        <div>BMI</div>
        <div>{bmi}</div>
      </div>
      <div
        className={`wrap  ${
          height > 0 && weight > 0 && (bmi < 18.5 || bmi >= 24)
            ? 'normal-prompt-0'
            : 'normal-prompt-70'
        }`}
      >
        <div>NORMAL</div>
        <div>
          {(Math.pow(+height / 100, 2) * 18.5).toFixed(0)} ~{' '}
          {(Math.pow(+height / 100, 2) * 24).toFixed(0)}
        </div>
        <div>kg</div>
      </div>
    </CardBody>
  );
}

export default BMIConverter;
