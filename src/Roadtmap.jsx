
// import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import bg from './assets/bg.png';

// const roadmap = [
//   {
//     label: "G1",
//     left: ["Token Launch", "Initial Airdrops", "Build the Community"],
//     right: [],
//   },
//   {
//     label: "G2",
//     left: [],
//     right: ["Marketing Blitz", "Major Partnerships", "First Burn Event"],
//   },
//   {
//     label: "G3",
//     left: ["Staking Integration", "More Airdrops", "Community Contests"],
//     right: [],
//   },
//   {
//     label: "G4",
//     left: [],
//     right: ["New Exchange Listings", "Second Burn Event", "Continued Growth"],
//   },
// ];

// const Roadtmap = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center items-center justify-center py-20 px-4"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <h1 className='text-5xl text-[#EEEEEE] text-center mt-3 mb-3 font-montserrat'>Roadmap Highlights</h1>

//       <p className='text-[#EEEEEE] text-center font-montserrat'>
//         We're on a mission, and this is just the beginning. The Matrix won’t <br />
//         know what hit it. Here's our game plan to dominate the crypto space
//       </p>

//       <div className="max-w-4xl w-full grid grid-cols-3 gap-8 relative ml-[304px] mt-5 font-montserrat">
//         {roadmap.map((item, index) => (
//           <div key={index} className="col-span-3 flex justify-between items-center" data-aos="fade-up">
//             <div className="w-1/3 text-white text-right pr-4">
//               {item.left.map((text, i) => (
//                 <p key={i}>{text}</p>
//               ))}
//             </div>
//             <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold relative z-10 border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]">
//               {item.label}
//             </div>
//             <div className="w-1/3 text-white text-left pl-4">
//               {item.right.map((text, i) => (
//                 <p key={i}>{text}</p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Roadtmap;


// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import bg from "./assets/bg.png";
// import glowLine from "./assets/Frame 1000003218.png"; // glowing timeline image

// const roadmap = [
//   {
//     label: "G1",
//     left: ["Token Launch", "Initial Airdrops", "Build the Community"],
//     right: [],
//   },
//   {
//     label: "G2",
//     left: [],
//     right: ["Marketing Blitz", "Major Partnerships", "First Burn Event"],
//   },
//   {
//     label: "G3",
//     left: ["Staking Integration", "More Airdrops", "Community Contests"],
//     right: [],
//   },
//   {
//     label: "G4",
//     left: [],
//     right: ["New Exchange Listings", "Second Burn Event", "Continued Growth"],
//   },
// ];

// const Roadtmap = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className="relative min-h-screen bg-cover bg-center py-20 px-4"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <h1 className="text-5xl text-[#EEEEEE] text-center font-montserrat mb-6">
//         Roadmap Highlights
//       </h1>

//       <p className="text-[#EEEEEE] text-center font-montserrat mb-12">
//         We're on a mission, and this is just the beginning. The Matrix won’t <br />
//         know what hit it. Here's our game plan to dominate the crypto space
//       </p>

//       {/* Glowing vertical line behind circles */}
//       <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 z-0">
//         <img
//           src={glowLine}
//           alt="Timeline"
//           className="h-[629px] w-[168px] object-contain pointer-events-none relative top-[-70px] left-[-3px] right-[63px]"
//         />
//       </div>

//       <div className="relative max-w-6xl mx-auto z-10 space-y-20">
//         {roadmap.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row justify-between items-center"
//             data-aos="fade-up"
//           >
//             {/* Left Items */}
//             <div className="w-full sm:w-1/3 text-white text-right pr-4 font-montserrat">
//               {item.left.map((text, i) => (
//                 <p key={i}>{text}</p>
//               ))}
//             </div>

//             {/* Circle */}
//             <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] mx-auto sm:mx-0">
//               {item.label}
//             </div>

//             {/* Right Items */}
//             <div className="w-full sm:w-1/3 text-white text-left pl-4 font-montserrat">
//               {item.right.map((text, i) => (
//                 <p key={i}>{text}</p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Roadtmap;



// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import bg from "./assets/bg.png";
// import glowLine from "./assets/Frame 1000003218.png"; // glowing timeline image

// const Roadtmap = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className="relative min-h-screen bg-cover bg-center py-20 px-4"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <h1 className="text-5xl text-[#EEEEEE] text-center font-montserrat mb-6">
//         Roadmap Highlights
//       </h1>

//       <p className="text-[#EEEEEE] text-center font-montserrat mb-12">
//         We're on a mission, and this is just the beginning. The Matrix won’t <br />
//         know what hit it. Here's our game plan to dominate the crypto space
//       </p>

//       <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 z-0">
//         <img
//           src={glowLine}
//           alt="Timeline"
//           className="h-[629px] w-[168px] object-contain pointer-events-none relative top-[-70px] left-[-3px] right-[63px]"
//         />
//       </div>

//       <div className="relative max-w-6xl mx-auto z-10 space-y-20">

//         {/* G1 */}
//         <div className="flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
//           <div className="w-full sm:w-1/3 text-white text-right pr-4 font-montserrat">
//             <p>Token Launch</p>
//             <p>Initial Airdrops</p>
//             <p>Build the Community</p>
//           </div>
//           <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] mx-auto sm:mx-0 relative top-[0px] right-[0px] left-[0px]">
//             G1
//           </div>
//           <div className="w-full sm:w-1/3 text-white text-left pl-4 font-montserrat"></div>
//         </div>

//         {/* G2 */}
//         <div className="flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
//           <div className="w-full sm:w-1/3 text-white text-right pr-4 font-montserrat"></div>

//           <div className="relative top-[0px]">

// <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] mx-auto sm:mx-0 relative top-[0px] right-[0px] left-[0px]">
//             G2
//           </div>

            
//           </div>
          
//           <div className="w-full sm:w-1/3 text-white text-left pl-4 font-montserrat">
//             <p>Marketing Blitz</p>
//             <p>Major Partnerships</p>
//             <p>First Burn Event</p>
//           </div>
//         </div>

//         {/* G3 */}
//         <div className="flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
//           <div className="w-full sm:w-1/3 text-white text-right pr-4 font-montserrat">
//             <p>Staking Integration</p>
//             <p>More Airdrops</p>
//             <p>Community Contests</p>
//           </div>
//           <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] mx-auto sm:mx-0 relative top-[0px] right-[0px] left-[0px]">
//             G3
//           </div>
//           <div className="w-full sm:w-1/3 text-white text-left pl-4 font-montserrat"></div>
//         </div>

//         {/* G4 */}
//         <div className="flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
//           <div className="w-full sm:w-1/3 text-white text-right pr-4 font-montserrat"></div>
//           <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] mx-auto sm:mx-0 relative top-[0px] right-[0px] left-[0px]">
//             G4
//           </div>
//           <div className="w-full sm:w-1/3 text-white text-left pl-4 font-montserrat">
//             <p>New Exchange Listings</p>
//             <p>Second Burn Event</p>
//             <p>Continued Growth</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Roadtmap;



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "./assets/bg.png";
import glowLine from "./assets/Frame 1000003218.png"; // glowing timeline image

const Roadtmap = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center py-20 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-5xl text-[#EEEEEE] text-center font-montserrat mb-6">
        Roadmap Highlights
      </h1>

      <p className="text-[#EEEEEE] text-center font-montserrat mb-12">
        We're on a mission, and this is just the beginning. The Matrix won’t <br />
        know what hit it. Here's our game plan to dominate the crypto space
      </p>

      <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 z-0">
        <img
          src={glowLine}
          alt="Timeline"
          className="h-[629px] w-[168px] object-contain pointer-events-none relative top-[-70px] left-[-3px] right-[63px]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10 space-y-20">
        {/* G1 */}
        <div className="flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
          <div className="w-full sm:w-1/3 text-white text-right pr-4 font-montserrat">
            <p>Token Launch</p>
            <p>Initial Airdrops</p>
            <p>Build the Community</p>
          </div>

          <div className="relative mt-0">
            <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] mx-auto sm:mx-0">
              G1
            </div>
          </div>

          <div className="w-full sm:w-1/3 text-white text-left pl-4 font-montserrat"></div>
        </div>

        {/* G2 */}
        <div className="flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
          <div className="w-full sm:w-1/3 text-white text-right pr-4 font-montserrat"></div>

          <div className="relative mt-[-5px]">
            <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] mx-auto sm:mx-0">
              G2
            </div>
          </div>

          <div className="w-full sm:w-1/3 text-white text-left pl-4 font-montserrat">
            <p>Marketing Blitz</p>
            <p>Major Partnerships</p>
            <p>First Burn Event</p>
          </div>
        </div>

        {/* G3 */}
        <div className="flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
          <div className="w-full sm:w-1/3 text-white text-right pr-4 font-montserrat">
            <p>Staking Integration</p>
            <p>More Airdrops</p>
            <p>Community Contests</p>
          </div>

          <div className="relative mt-[-4px]">
            <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] mx-auto sm:mx-0">
              G3
            </div>
          </div>

          <div className="w-full sm:w-1/3 text-white text-left pl-4 font-montserrat"></div>
        </div>

        {/* G4 */}
        <div className="flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
          <div className="w-full sm:w-1/3 text-white text-right pr-4 font-montserrat"></div>

          <div className="relative mt-[-5px]">
            <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] mx-auto sm:mx-0">
              G4
            </div>
          </div>

          <div className="w-full sm:w-1/3 text-white text-left pl-4 font-montserrat">
            <p>New Exchange Listings</p>
            <p>Second Burn Event</p>
            <p>Continued Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadtmap;
