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



// import React, { useState, useEffect } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Sector,
// } from "recharts";

// const data = [
//   { name: "Community and Airdrops", value: 40, color: "#00FF7F" },
//   { name: "Social Media Airdrops", value: 15, color: "#DA70D6" },
//   { name: "Community Initiatives and Contests", value: 15, color: "#FF69B4" },
//   { name: "Reserve for Future Staking", value: 10, color: "#ADFF2F" },
//   { name: "Team and Advisors", value: 15, color: "#FFA07A" },
//   { name: "Marketing and Partnerships", value: 20, color: "#6495ED" },
// ];

// const renderActiveShape = (props) => {
//   const {
//     cx,
//     cy,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     value,
//   } = props;

//   return (
//     <g className="animate-bounce">
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {`${payload.name}: ${value}%`}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius + 12}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//     </g>
//   );
// };

// const TokenomicsChart = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [radius, setRadius] = useState(130);

//   const onPieEnter = (_, index) => setActiveIndex(index);
//   const onPieLeave = () => setActiveIndex(null);

//   // Animate outer radius on mount
//   useEffect(() => {
//     const spread = setTimeout(() => setRadius(160), 100);
//     const back = setTimeout(() => setRadius(130), 1000);
//     return () => {
//       clearTimeout(spread);
//       clearTimeout(back);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
//       <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
        
//         {/* Animated PieChart container */}
//         <div className="w-full md:w-1/2  transition-transform">
//           <ResponsiveContainer width="100%" height={400}>
//             <PieChart>
//               {/* <Pie
//                 activeIndex={activeIndex}
//                 activeShape={renderActiveShape}
//                 onMouseEnter={onPieEnter}
//                 onMouseLeave={onPieLeave}
//                 data={data}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={70}
//                 outerRadius={radius} // Dynamic outerRadius
//                 paddingAngle={5}
//                 label
//                 isAnimationActive={true}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie> */}
//               <Pie
//   activeIndex={activeIndex}
//   activeShape={renderActiveShape}
//   onMouseEnter={onPieEnter}
//   onMouseLeave={onPieLeave}
//   data={data}
//   dataKey="value"
//   nameKey="name"
//   cx="50%"
//   cy="50%"
//   innerRadius={90}
//   outerRadius={130}
//   paddingAngle={8}
//   cornerRadius={10} // Rounded edges
//   isAnimationActive={true}
// >
//   {data.map((entry, index) => (
//     <Cell key={`cell-${index}`} fill={entry.color} />
//   ))}
// </Pie>

//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Text and legend with animations */}
//         <div className="space-y-4">
//           <h1 className="text-5xl font-semibold font-montserrat text-white animate-pulse">
//             Tokenomics
//           </h1>
//           <p className="text-[#EEEEEE] font-montserrat transition duration-700 ease-in-out hover:translate-x-2">
//             We believe in empowering our community and ensuring everyone has a stake in our success. Here's how kinkajou is distributed:
//           </p>

//           {data.map((x, i) => (
//             <div
//               key={i}
//               className="w-[588px] h-[48px] bg-[#1F1F21] text-[#EEEEEE] mt-2 p-4 flex justify-between items-center rounded-md transform transition duration-500 hover:scale-105 hover:bg-opacity-80 hover:translate-y-1"
//             >
//               <div className="flex gap-3 items-center">
//                 <span
//                   className="w-4 h-4 inline-block rounded-sm"
//                   style={{ backgroundColor: x.color }}
//                 ></span>
//                 <p className="font-montserrat font-medium">{x.name}</p>
//               </div>
//               <p className="font-montserrat">{x.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TokenomicsChart;


// import React, { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Community and Airdrops", value: 30, color: "#00FF7F" },
//   { name: "Marketing and Partnerships", value: 15, color: "#6495ED" },
//   { name: "Social Media Airdrops", value: 10, color: "#DA70D6" },
//   { name: "Team and Advisors", value: 15, color: "#FFA07A" },
//   { name: "Reserve", value: 15, color: "#FFD700" },
//   { name: "Liquidity Pool", value: 15, color: "#E6E6A8" },
// ];

// const TokenomicsChart = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [hoverLabel, setHoverLabel] = useState(null);

//   const onPieEnter = (_, index) => {
//     setActiveIndex(index);
//     setHoverLabel(`${data[index].name}: ${data[index].value}%`);
//   };

//   const onPieLeave = () => {
//     setActiveIndex(null);
//     setHoverLabel(null);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
//       <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
        
//         {/* Chart Section */}
//         {/* <div className="w-full md:w-1/2 relative transition-transform hover:scale-[0.95] duration-300">
//           <ResponsiveContainer width="100%" height={400}>
//             <PieChart>
//               <Pie
//                 onMouseEnter={onPieEnter}
//                 onMouseLeave={onPieLeave}
//                 data={data}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={90}
//                 outerRadius={130}
//                 paddingAngle={8}
//                 cornerRadius={10}
//                 isAnimationActive={true}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>

         
//           {hoverLabel && (
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-lg font-semibold pointer-events-none">
//               {hoverLabel}
//             </div>
//           )}
//         </div> */}

//         {/* Chart Section */}
// <div className="w-full md:w-1/2 relative transition-transform hover:scale-105 duration-300">
//   <ResponsiveContainer width="100%" height={400}>
//     <PieChart>
//       <Pie
//         onMouseEnter={onPieEnter}
//         onMouseLeave={onPieLeave}
//         data={data}
//         dataKey="value"
//         nameKey="name"
//         cx="50%"
//         cy="50%"
//         innerRadius={90}
//         outerRadius={130}
//         paddingAngle={8}
//         cornerRadius={10}
//         isAnimationActive={true}
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={entry.color} />
//         ))}
//       </Pie>
//       <Tooltip />
//     </PieChart>
//   </ResponsiveContainer>

//   {/* Hover label in center */}
//   {hoverLabel && (
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-lg font-semibold pointer-events-none">
//       {hoverLabel}
//     </div>
//   )}
// </div>


//         {/* Legend + Description */}
//         <div className="space-y-4">
//           <h1 className="text-5xl font-semibold font-montserrat text-white">
//             Tokenomics
//           </h1>
//           <p className="text-[#EEEEEE] font-montserrat">
//             We believe in empowering our community and ensuring everyone has a stake in our success. Here's how kinkajou is distributed:
//           </p>

//           {data.map((x, i) => (
//             <div
//               key={i}
//               className="w-[588px] h-[48px] bg-[#1F1F21] text-[#EEEEEE] mt-2 p-4 flex justify-between items-center rounded-md transform transition duration-500 hover:scale-105 hover:bg-opacity-80 hover:translate-y-1"
//             >
//               <div className="flex gap-3 items-center">
//                 <span
//                   className="w-4 h-4 inline-block rounded-sm"
//                   style={{ backgroundColor: x.color }}
//                 ></span>
//                 <p className="font-montserrat font-medium">{x.name}</p>
//               </div>
//               <p className="font-montserrat">{x.value}%</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TokenomicsChart;



// import React, { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Sector,
// } from "recharts";

// const data = [
//   { name: "Community and Airdrops", value: 30, color: "#00FF7F" },
//   { name: "Marketing and Partnerships", value: 15, color: "#6495ED" },
//   { name: "Social Media Airdrops", value: 10, color: "#DA70D6" },
//   { name: "Team and Advisors", value: 15, color: "#FFA07A" },
//   { name: "Reserve", value: 15, color: "#FFD700" },
//   { name: "Liquidity Pool", value: 15, color: "#E6E6A8" },
// ];

// // Custom active shape with pointer label
// const renderActiveShape = (props) => {
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;

//   const RADIAN = Math.PI / 180;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 20 : -20);
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius + 6}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       {/* Arrow line */}
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//         strokeWidth={2}
//       />
//       <circle cx={ex} cy={ey} r={3} fill={fill} stroke="white" strokeWidth={1} />
//       {/* Text label */}
//       <text
//         x={ex + (cos >= 0 ? 6 : -6)}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#ffffff"
//         fontWeight={600}
//         dominantBaseline="central"
//       >
//         {`${payload.name}: ${value}%`}
//       </text>
//     </g>
//   );
// };

// const TokenomicsChart = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const onPieEnter = (_, index) => setActiveIndex(index);
//   const onPieLeave = () => setActiveIndex(null);

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
//       <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
        
//         {/* Chart Section with arrow labels */}
//         <div className="w-full md:w-1/2 relative transition-transform hover:scale-105 duration-300">
//           <ResponsiveContainer width="100%" height={719}>
//             <PieChart>
//               <Pie
//                 activeIndex={activeIndex}
//                 activeShape={renderActiveShape}
//                 onMouseEnter={onPieEnter}
//                 onMouseLeave={onPieLeave}
//                 data={data}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={90}
//                 outerRadius={130}
//                 paddingAngle={8}
//                 cornerRadius={10}
//                 isAnimationActive={true}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Tokenomics Legend */}
//         <div className="space-y-4">
//           <h1 className="text-5xl font-semibold font-montserrat text-white">
//             Tokenomics
//           </h1>
//           <p className="text-[#EEEEEE] font-montserrat">
//             We believe in empowering our community and ensuring everyone has a stake in our success. Here's how kinkajou is distributed:
//           </p>

//           {data.map((x, i) => (
//             <div
//               key={i}
//               className="w-[588px] h-[48px] bg-[#1F1F21] text-[#EEEEEE] mt-2 p-4 flex justify-between items-center rounded-md transform transition duration-500 hover:scale-105 hover:bg-opacity-80 hover:translate-y-1"
//             >
//               <div className="flex gap-3 items-center">
//                 <span
//                   className="w-4 h-4 inline-block rounded-sm"
//                   style={{ backgroundColor: x.color }}
//                 ></span>
//                 <p className="font-montserrat font-medium">{x.name}</p>
//               </div>
//               <p className="font-montserrat">{x.value}%</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TokenomicsChart;



// import React, { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Sector,
// } from "recharts";

// const data = [
//   { name: "Community and Airdrops", value: 30, color: "#00FF7F" },
//   { name: "Marketing and Partnerships", value: 15, color: "#6495ED" },
//   { name: "Social Media Airdrops", value: 10, color: "#DA70D6" },
//   { name: "Team and Advisors", value: 15, color: "#FFA07A" },
//   { name: "Reserve", value: 15, color: "#FFD700" },
//   { name: "Liquidity Pool", value: 15, color: "#E6E6A8" },
// ];


// // Custom active shape with pointer label
// const renderActiveShape = (props) => {
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     value,
//   } = props;

//   const RADIAN = Math.PI / 180;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 20 : -20);
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius + 6}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       {/* Arrow line */}
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//         strokeWidth={2}
//       />
//       <circle cx={ex} cy={ey} r={3} fill={fill} stroke="white" strokeWidth={1} />
//       {/* Text label */}
//       <text
//         x={ex + (cos >= 0 ? 6 : -6)}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#ffffff"
//         fontWeight={600}
//         dominantBaseline="central"
//       >
//         {`${payload.name}: ${value}%`}
//       </text>
//     </g>
//   );
// };

// const TokenomicsChart = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const onPieEnter = (_, index) => setActiveIndex(index);
//   const onPieLeave = () => setActiveIndex(null);

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
//       <div className="w-full  flex flex-col md:flex-row items-center justify-between gap-10">

//         {/* Chart Section with arrow labels */}
//         <div className="w-full md:w-1/2 relative overflow-visible p-10 transition-transform hover:scale-105 duration-300">
//           <ResponsiveContainer width="100%" height={800}>
//             <PieChart>
//               <Pie
//                 activeIndex={activeIndex}
//                 activeShape={renderActiveShape}
//                 onMouseEnter={onPieEnter}
//                 onMouseLeave={onPieLeave}
//                 data={data}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={90}
//                 outerRadius={130}
//                 paddingAngle={10}
//                 cornerRadius={10}
//                 isAnimationActive={true}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
          
//         </div>

//         {/* Tokenomics Legend */}
//         <div className="space-y-4">
//           <h1 className="text-5xl font-semibold font-montserrat text-white">
//             Tokenomics
//           </h1>
//           <p className="text-[#EEEEEE] font-montserrat">
//             We believe in empowering our community and ensuring everyone has a stake in our success. Here's how kinkajou is distributed:
//           </p>

//           {data.map((x, i) => (
//             <div
//               key={i}
//               className="w-[588px] h-[48px] bg-[#1F1F21] text-[#EEEEEE] mt-2 p-4 flex justify-between items-center rounded-md transform transition duration-500 hover:scale-105 hover:bg-opacity-80 hover:translate-y-1"
//             >
//               <div className="flex gap-3 items-center">
//                 <span
//                   className="w-10 h-12 inline-block rounded-sm relative left-[-13px]"
//                   style={{ backgroundColor: x.color }}
//                 ></span>
//                 <p className="font-montserrat font-medium">{x.name}</p>
//               </div>
//               <p className="font-montserrat">{x.value}%</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TokenomicsChart;




// import React, { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Sector,
// } from "recharts";

// const data = [
//   { name: "Community and Airdrops", value: 30, color: "#00FF7F" },
//   { name: "Marketing and Partnerships", value: 15, color: "#6495ED" },
//   { name: "Social Media Airdrops", value: 10, color: "#DA70D6" },
//   { name: "Team and Advisors", value: 15, color: "#FFA07A" },
//   { name: "Reserve", value: 15, color: "#FFD700" },
//   { name: "Liquidity Pool", value: 15, color: "#E6E6A8" },
// ];

// // Custom active shape with pointer label
// const renderActiveShape = (props) => {
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     value,
//   } = props;

//   const RADIAN = Math.PI / 180;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 20 : -20);
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius + 8}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       {/* Arrow line */}
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//         strokeWidth={2}
//       />
//       <circle cx={ex} cy={ey} r={3} fill={fill} stroke="white" strokeWidth={1} />
//       {/* Text label */}
//       <text
//         x={ex + (cos >= 0 ? 6 : -6)}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#ffffff"
//         fontWeight={600}
//         fontSize={14}
//         dominantBaseline="central"
//       >
//         {`${payload.name}: ${value}%`}
//       </text>
//     </g>
//   );
// };

// const TokenomicsChart = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const onPieEnter = (_, index) => setActiveIndex(index);
//   const onPieLeave = () => setActiveIndex(null);

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
//       <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">

//         {/* Chart Section with arrow labels */}
//         <div className="w-full lg:w-3/5 relative overflow-visible">
//           <ResponsiveContainer width="100%" height={600}>
//             <PieChart>
//               <Pie
//                 activeIndex={activeIndex}
//                 activeShape={renderActiveShape}
//                 onMouseEnter={onPieEnter}
//                 onMouseLeave={onPieLeave}
//                 data={data}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={120}
//                 outerRadius={180}
//                 paddingAngle={6}
//                 cornerRadius={8}
//                 isAnimationActive={true}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip 
//                 contentStyle={{
//                   backgroundColor: '#1F1F21',
//                   border: 'none',
//                   borderRadius: '8px',
//                   color: '#ffffff'
//                 }}
//               />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Tokenomics Legend */}
//         <div className="w-full lg:w-2/5 space-y-6">
//           <div>
//             <h1 className="text-5xl font-bold text-white mb-4">
//               Tokenomics
//             </h1>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               We believe in empowering our community and ensuring everyone has a stake in our success. Here's how kinkajou is distributed:
//             </p>
//           </div>

//           <div className="space-y-3">
//             {data.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 text-gray-100 p-4 flex justify-between items-center rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:scale-105 cursor-pointer"
//                 onMouseEnter={() => setActiveIndex(index)}
//                 onMouseLeave={() => setActiveIndex(null)}
//               >
//                 <div className="flex gap-3 items-center">
//                   <span
//                     className="w-4 h-4 rounded-sm"
//                     style={{ backgroundColor: item.color }}
//                   ></span>
//                   <p className="font-medium">{item.name}</p>
//                 </div>
//                 <p className="font-semibold">{item.value}%</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TokenomicsChart;






import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
} from "recharts";

const data = [
  { name: "Community and Airdrops", value: 30, color: "#00FF7F" },
  { name: "Marketing and Partnerships", value: 15, color: "#6495ED" },
  { name: "Social Media Airdrops", value: 10, color: "#DA70D6" },
  { name: "Team and Advisors", value: 15, color: "#FFA07A" },
  { name: "Reserve", value: 15, color: "#FFD700" },
  { name: "Liquidity Pool", value: 15, color: "#E6E6A8" },
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 20 : -20);
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
        strokeWidth={2}
      />
      <circle cx={ex} cy={ey} r={3} fill={fill} stroke="white" strokeWidth={1} />
      <text
        x={ex + (cos >= 0 ? 6 : -6)}
        y={ey}
        textAnchor={textAnchor}
        fill="#ffffff"
        fontWeight={600}
        fontSize={14}
        dominantBaseline="central"
      >
        {`${payload.name}: ${value}%`}
      </text>
    </g>
  );
};



const TokenomicsChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Chart Section with arrow labels */}
        <div className="w-full lg:w-3/5 relative overflow-visible">
          <ResponsiveContainer width="100%" height={600}>
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
                innerRadius={120}
                outerRadius={180}
                paddingAngle={6}
                cornerRadius={8}
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Tokenomics Legend */}
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold font-montserrat text-white">
             Tokenomics
           </h1>
           <p className="text-[#EEEEEE] font-montserrat">
             We believe in empowering our community and ensuring everyone has a stake in our success. Here's how kinkajou is distributed:
           </p>

           {data.map((x, i) => (
            <div
              key={i}
              className="w-[588px] h-[48px] bg-[#1F1F21] text-[#EEEEEE] mt-2 p-4 flex justify-between items-center rounded-md transform transition duration-500 hover:scale-105 hover:bg-opacity-80 hover:translate-y-1"
            >
              <div className="flex gap-3 items-center">
                <span
                  className="w-10 h-12 inline-block rounded-sm relative left-[-13px]"
                  style={{ backgroundColor: x.color }}
                ></span>
                <p className="font-montserrat font-medium">{x.name}</p>
              </div>
              <p className="font-montserrat">{x.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenomicsChart;


