import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Community and Airdrops", value: 40, color: "#00FF7F" },
  { name: "Social Media Airdrops", value: 15, color: "#DA70D6" },
  { name: "Community Initiatives and Contests", value: 15, color: "#FF69B4" },
  { name: "Reserve for Future Staking", value: 10, color: "#ADFF2F" },
  { name: "Team and Advisors", value: 15, color: "#FFA07A" },
  { name: "Marketing and Partnerships", value: 20, color: "#6495ED" },
];

const TokenomicsChart = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
     
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
        <ResponsiveContainer width="100%" height={400} className="md:w-1/2">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={130}
              paddingAngle={3}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div>
            <h1 className="text-5xl text-[#FFFFFF] font-semibold mb-5">Tokenomics</h1>
            <p className="text-[#EEEEEE]">We believe in empowering our community and ensuring everyone has a stake in our success. Here's how kinkajou is distributed:</p>

            {
                data.map((x) => (<div>
<div className="w-[588px] h-[48px] bg-[#1F1F21] text-[#EEEEEE] mt-5 p-4 flex justify-between">
<div className="flex gap-3 justify-center items-center">
    <span className='w-4 h-full inline-block' style={{ backgroundColor: x.color }}></span>
<p>{x.name}</p>
</div>
                
                <p>{x.value}</p>

            </div>
                </div>))
            }
            
        </div>
      </div>
    </div>
  );
};

export default TokenomicsChart;
