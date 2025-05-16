// import React from "react";
// import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Community and Airdrops", value: 40, color: "#00FF7F" },
//   { name: "Social Media Airdrops", value: 15, color: "#DA70D6" },
//   { name: "Community Initiatives and Contests", value: 15, color: "#FF69B4" },
//   { name: "Reserve for Future Staking", value: 10, color: "#ADFF2F" },
//   { name: "Team and Advisors", value: 15, color: "#FFA07A" },
//   { name: "Marketing and Partnerships", value: 20, color: "#6495ED" },
// ];

// const TokenomicsChart = () => {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
     
//       <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
//         <ResponsiveContainer width="100%" height={400} className="md:w-1/2">
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               innerRadius={70}
//               outerRadius={130}
//               paddingAngle={3}
//               label
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//         <div>
//             <h1 className="text-5xl text-[#FFFFFF] font-semibold mb-5 font-montserrat">Tokenomics</h1>
//             <p className="text-[#EEEEEE] font-montserrat">We believe in empowering our community and ensuring everyone has a stake in our success. Here's how kinkajou is distributed:</p>

//             {
//                 data.map((x) => (<div>
// <div className="w-[588px] h-[48px] bg-[#1F1F21] text-[#EEEEEE] mt-5 p-4 flex justify-between">
// <div className="flex gap-3 justify-center items-center">
//     <span className='w-4 h-full inline-block' style={{ backgroundColor: x.color }}></span>
// <p className="font-montserrat font-medium">{x.name}</p>
// </div>
                
//                 <p className="font-montserrat">{x.value}</p>

//             </div>
//                 </div>))
//             }
            
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TokenomicsChart;



import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Sector,
} from "recharts";

const data = [
  { name: "Community and Airdrops", value: 40, color: "#00FF7F" },
  { name: "Social Media Airdrops", value: 15, color: "#DA70D6" },
  { name: "Community Initiatives and Contests", value: 15, color: "#FF69B4" },
  { name: "Reserve for Future Staking", value: 10, color: "#ADFF2F" },
  { name: "Team and Advisors", value: 15, color: "#FFA07A" },
  { name: "Marketing and Partnerships", value: 20, color: "#6495ED" },
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;

  return (
    <g className="animate-bounce">
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {`${payload.name}: ${value}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 12}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const TokenomicsChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [radius, setRadius] = useState(130);

  const onPieEnter = (_, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);

  // Animate outer radius on mount
  useEffect(() => {
    const spread = setTimeout(() => setRadius(160), 100);
    const back = setTimeout(() => setRadius(130), 1000);
    return () => {
      clearTimeout(spread);
      clearTimeout(back);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Animated PieChart container */}
        <div className="w-full md:w-1/2 animate-spin-slow hover:scale-105 transition-transform">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={radius} // Dynamic outerRadius
                paddingAngle={5}
                label
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Text and legend with animations */}
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold font-montserrat text-white animate-pulse">
            Tokenomics
          </h1>
          <p className="text-[#EEEEEE] font-montserrat transition duration-700 ease-in-out hover:translate-x-2">
            We believe in empowering our community and ensuring everyone has a stake in our success. Here's how kinkajou is distributed:
          </p>

          {data.map((x, i) => (
            <div
              key={i}
              className="w-[588px] h-[48px] bg-[#1F1F21] text-[#EEEEEE] mt-2 p-4 flex justify-between items-center rounded-md transform transition duration-500 hover:scale-105 hover:bg-opacity-80 hover:translate-y-1"
            >
              <div className="flex gap-3 items-center">
                <span
                  className="w-4 h-4 inline-block rounded-sm"
                  style={{ backgroundColor: x.color }}
                ></span>
                <p className="font-montserrat font-medium">{x.name}</p>
              </div>
              <p className="font-montserrat">{x.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenomicsChart;
