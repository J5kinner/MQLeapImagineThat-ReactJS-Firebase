import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: 'A', style: { backgroundColor: '#A6192E', textColor: 'white' }   },
  { option: 'B', style: { backgroundColor: '#C6007E', textColor: 'white' } },
  { option: 'C', style: { backgroundColor: '#D6D2C4', textColor: 'black' }  },
  { option: 'D', style: { backgroundColor: '#80225F', textColor: 'white' } },
  { option: 'E' },
  { option: 'F' },
  { option: 'G' },
  { option: 'H' },
  { option: 'I' },
  { option: 'J' },
  { option: 'K' },
  { option: 'L' },
  { option: 'M' },
  { option: 'N' },
  { option: 'O' },
  { option: 'P' },
  { option: 'Q' },
  { option: 'R' },
  { option: 'S' },
  { option: 'T' },
  { option: 'U' },
  { option: 'V' },
  { option: 'W' },
  { option: 'X' },
  { option: 'Y' },
  { option: 'Z' },
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        onStopSpinning={() => {
          setMustSpin(false)
        }}

        innerRadius={10}

      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}