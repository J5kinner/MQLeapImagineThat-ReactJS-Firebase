import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { render } from "react-dom";
import { Button } from "reactstrap";

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
  { option: "E", style: { backgroundColor: "#A6192E", textColor: "white" } },
  { option: "F", style: { backgroundColor: "#C6007E", textColor: "white" } },
  { option: "G", style: { backgroundColor: "#D6D2C4", textColor: "black" } },
  { option: "H", style: { backgroundColor: "#80225F", textColor: "white" } },
  { option: "I", style: { backgroundColor: "#A6192E", textColor: "white" } },
  { option: "J", style: { backgroundColor: "#C6007E", textColor: "white" } },
  { option: "K", style: { backgroundColor: "#D6D2C4", textColor: "black" } },
  { option: "L", style: { backgroundColor: "#80225F", textColor: "white" } },
  { option: "M", style: { backgroundColor: "#A6192E", textColor: "white" } },
  { option: "N", style: { backgroundColor: "#C6007E", textColor: "white" } },
  { option: "O", style: { backgroundColor: "#D6D2C4", textColor: "black" } },
  { option: "P", style: { backgroundColor: "#80225F", textColor: "white" } },
  { option: "Q", style: { backgroundColor: "#A6192E", textColor: "white" } },
  { option: "R", style: { backgroundColor: "#C6007E", textColor: "white" } },
  { option: "S", style: { backgroundColor: "#D6D2C4", textColor: "black" } },
  { option: "T", style: { backgroundColor: "#80225F", textColor: "white" } },
  { option: "U", style: { backgroundColor: "#A6192E", textColor: "white" } },
  { option: "V", style: { backgroundColor: "#C6007E", textColor: "white" } },
  { option: "W", style: { backgroundColor: "#D6D2C4", textColor: "black" } },
  { option: "X", style: { backgroundColor: "#80225F", textColor: "white" } },
  { option: "Y", style: { backgroundColor: "#A6192E", textColor: "white" } },
  { option: "Z", style: { backgroundColor: "#C6007E", textColor: "white" } },
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
          innerRadius={9}
        />

        <Button
          block
          color="primary"
          size="lg"
          type="button"
          onClick={handleSpinClick}
        >
          SPIN{" "}
        </Button>
        <div>
          <i
            className="ni education_hat mr-2"
            onClick={() => handleSpinClick(letter)}
          />
          How many careers can you think of which start with the letter <b>{letter}</b>
          ?
        </div>
        <div>
          <i className="ni education_hat mr-2" />
          Pleast write down as many as you can think of.
        </div>
    </>
  );
};

export default FortuneWheel;
