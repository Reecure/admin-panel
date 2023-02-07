import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { mockPieData as data } from "../../data/mockData";

const PieChartComp = () => {
  return (
    <div className="">
      <PieChart width={1000} height={400}>
        <Pie
          data={data}
          cx={220}
          cy={220}
          outerRadius={140}
          innerRadius={60}
          paddingAngle={2}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={data[index].color} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComp;
