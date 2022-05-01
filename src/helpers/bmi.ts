export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  bmi: number[];
  yourBMI?: number;
};

export const levels: Level[] = [
  { title: "Skinny", color: "#96A3AB", icon: "down", bmi: [0, 18.5] },
  { title: "Normal", color: "#0EAD69", icon: "up", bmi: [18.6, 24.9] },
  { title: "Overweight", color: "#E2B039", icon: "down", bmi: [25, 30] },
  { title: "Obesity", color: "#C3423F", icon: "down", bmi: [30.1, 90] },
];

export const calculateBmi = (height: number, weight: number) => {
  const bmi = parseFloat((weight / (height * height)).toFixed(1));

  for (const i in levels) {
    if (bmi >= levels[i].bmi[0] && bmi <= levels[i].bmi[1]) {
      const level: Level = { ...levels[i] };
      level.yourBMI = parseFloat(bmi.toFixed(2));
      return level;
    }
  }

  return null;
};
