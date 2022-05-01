import React, { useState } from "react";

import classes from "./App.module.css";
import { GridItem } from "./components/GridItem";
import { calculateBmi, Level, levels } from "./helpers/bmi";
import leftarrow from "./assets/leftarrow.png";

function App() {
  const [showedLevel, setShowedLevel] = useState<Level | null>();
  const [weightInput, setWeightInput] = useState<number>(0);
  const [heightInput, setHeightInput] = useState<number>(0);

  const calculateBmiHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (heightInput && weightInput) {
      setShowedLevel(calculateBmi(heightInput, weightInput));
    } else {
      alert("Please enter your weight and height");
    }
  };

  const clickToBackHandler = () => {
    setShowedLevel(null);
    setWeightInput(0);
    setHeightInput(0);
  };

  return (
    <div className={classes.main}>
      <header>
        <div className={classes.headerContainer}>
          <p>Inspired by Mario Elvio's app</p>
        </div>
      </header>
      <div className={classes.container}>
        <form className={classes.leftSide}>
          <h1>Calculate your BMI</h1>
          <p>
            BMI is the acronym for Body Mass Index, a parameter adopted by the
            World Health Organization to calculate the ideal weight of each
            person.
          </p>
          <input
            type="number"
            value={heightInput > 0 ? heightInput : ""}
            placeholder="Enter your height. Ex: 1.5 (in meters)"
            disabled={showedLevel ? true : false}
            onChange={(e) => setHeightInput(parseFloat(e.target.value))}
          />
          <input
            type="number"
            value={weightInput > 0 ? weightInput : ""}
            placeholder="Enter your weight. Ex: 73.5 (in Kg)"
            disabled={showedLevel ? true : false}
            onChange={(e) => setWeightInput(parseFloat(e.target.value))}
          />
          <button
            onClick={calculateBmiHandler}
            disabled={showedLevel ? true : false}
          >
            Calculate
          </button>
        </form>
        <div className={classes.rightSide}>
          {!showedLevel && (
            <div className={classes.grid}>
              {levels.map((level, key) => (
                <GridItem key={key} item={level} />
              ))}
            </div>
          )}
          {showedLevel && (
            <div className={classes.rightBig}>
              <div className={classes.arrow} onClick={clickToBackHandler}>
                <img src={leftarrow} width={25} alt="Left Arrow" />
              </div>
              <GridItem item={showedLevel} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
