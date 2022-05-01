import { Level } from "../../helpers/bmi";
import downIcon from "../../assets/down.png";
import upIcon from "../../assets/up.png";

import classes from "./GridItem.module.css";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={classes.main} style={{ backgroundColor: item.color }}>
      <div className={classes.gridIcon}>
        <img
          src={item.icon === "up" ? upIcon : downIcon}
          alt="Icon"
          width={30}
        />
      </div>
      <div className={classes.gridTitle}>{item.title}</div>
      {item.yourBMI && (
        <div className={classes.yourBmi}>Your BMI is {item.yourBMI} kg/m²</div>
      )}
      <div className={classes.gridInfo}>
        BMI is between <strong>{item.bmi[0]}</strong> and{" "}
        <strong>{item.bmi[1]}</strong>
      </div>
    </div>
  );
};
