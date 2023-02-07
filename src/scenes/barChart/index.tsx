import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { mockBarData as data } from "../../data/mockData";

const BarChartCopmp = () => {
  return (
    <>
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          barSize={40}
          dataKey="hot dog"
          stackId="a"
          fill="hsl(229, 70%, 50%)"
        />
        <Bar
          barSize={40}
          dataKey="burger"
          stackId="a"
          fill="hsl(296, 70%, 50%)"
        />
        <Bar
          barSize={40}
          dataKey="kebab"
          stackId="a"
          fill="hsl(97, 70%, 50%)"
        />
        <Bar
          barSize={40}
          dataKey="donut"
          stackId="a"
          fill="hsl(340, 70%, 50%)"
        />
      </BarChart>
    </>
  );
};

export default BarChartCopmp;
