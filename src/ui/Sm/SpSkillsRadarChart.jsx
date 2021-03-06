import { memo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const SpSkillsRadarChart = memo(({ chartData, checked, allStoreAverage }) => {
  const data = [
    {
      subject: "店長力",
      A: chartData.sm,
      B: 100,
      enemy: allStoreAverage.sm,
      fullMark: 150,
    },
    {
      subject: "副店長力",
      A: chartData.ssm,
      B: 100,
      enemy: allStoreAverage.ssm,
      fullMark: 150,
    },
    {
      subject: "人事力",
      A: chartData.hr,
      B: 100,
      enemy: allStoreAverage.hr,
      fullMark: 150,
    },
    {
      subject: "VMD",
      A: chartData.vmd,
      B: 100,
      enemy: allStoreAverage.vmd,
      fullMark: 150,
    },
    {
      subject: "接客力",
      A: chartData.cs,
      B: 100,
      enemy: allStoreAverage.cs,
      fullMark: 150,
    },
    {
      subject: "ストック",
      A: chartData.stock,
      B: 100,
      enemy: allStoreAverage.stock,
      fullMark: 150,
    },
    {
      subject: "事務",
      A: chartData.pc,
      B: 100,
      enemy: allStoreAverage.pc,
      fullMark: 150,
    },
  ];

  return (
    <RadarChart outerRadius={110} width={330} height={330} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#17b397"
        fill="#17b397"
        fillOpacity={0.6}
      />
      {checked && (
        <Radar
          name="enemy"
          dataKey="enemy"
          stroke="#FF99FF"
          fill="#FF99FF"
          fillOpacity={0.5}
        />
      )}
    </RadarChart>
  );
});
export default SpSkillsRadarChart;
