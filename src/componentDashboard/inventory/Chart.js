import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "Tháng Trước", uv: 250, pv: 2400, amt: 2400 },
  { name: "Tháng Này", uv: 200, pv: 2000, amt: 1200 },
  { name: "Kỳ vọng tháng tiếp theo", uv: 350, pv: 1000, amt: 2000 },
];

const Chart = () => {
  return (
    <LineChart width={1280} height={720} data={data} style={{ margin: "auto" }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;
