import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import {
  Button,
  Card,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import FormInput from "../IndexSections/FormInput.js";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const data = [
  { option: "A", style: { backgroundColor: "#A6192E", textColor: "white" } },
  { option: "B", style: { backgroundColor: "#C6007E", textColor: "white" } },
  { option: "C", style: { backgroundColor: "#D6D2C4", textColor: "black" } },
  { option: "D", style: { backgroundColor: "#80225F", textColor: "white" } },
  { option: "E" },
  { option: "F" },
  { option: "G" },
  { option: "H" },
  { option: "I" },
  { option: "J" },
  { option: "K" },
  { option: "L" },
  { option: "M" },
  { option: "N" },
  { option: "O" },
  { option: "P" },
  { option: "Q" },
  { option: "R" },
  { option: "S" },
  { option: "T" },
  { option: "U" },
  { option: "V" },
  { option: "W" },
  { option: "X" },
  { option: "Y" },
  { option: "Z" },
];

var letter;
const FortuneWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = (props) => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    letter = alphabet[newPrizeNumber];
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        innerRadius={10}
      />
      <button onClick={handleSpinClick}>SPIN </button>
      <div className="mt-5 py-5 border-top text-center">
        <div className="py-5 bg-secondary">
          <div>
            <i
              className="ni education_hat mr-2"
              onClick={() => handleSpinClick(letter)}
            />
            Can you think of an careers that start with the letter{" "}
            <b>{letter}</b>?
          </div>
          <div>
            <i className="ni education_hat mr-2" />
            Pleast write down as many as you can think of
          </div>
          <div>
          <FormInput/>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="Input1"
                    placeholder="Please enter your answers here"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          
     
          </Form>
          </div>

          

          <div>
            <Button
              block
              className="btn-round"
              color="default"
              size="lg"
              type="button"
            >
              Add to List
            </Button>
          </div>
        </div>

      </div>

      
    </>
  );
};

export default FortuneWheel;
