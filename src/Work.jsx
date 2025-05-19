// import React from 'react'
// import Card from './Card'
// import cf from './assets/cf.png'

// import cm from './assets/cm.png'

// import am from './assets/am.png'


// export default function Work() {
//   return (
//     <div className='text-center'>

//         <h1 className='text-6xl font-semibold text-[#FFFFFF] mt-24 font-montserrat'>How it works</h1>

//         <div className='flex justify-evenly mt-24'>

//             {/* 1st */}
//             <div className='w-[428px] h-[417px] rounded-[10px] bg-[#0F4F2A]  p-6'>
            
//                     <div className=''>
            
//                     <h1 className='text-[18px] text-[#FFFFFF] mb-16 relative font-poppins'>Buy KinkajouCoins</h1>
//                     </div>
            
//                     <div className='w-[318px] h-[156px] ml-11'>
//                         <img className='object-cover' src={cf} alt="" />
//                     </div>
            
//                     <p className='text-[14px] text-[#FFFFFF] font-poppins'>Easily purchase KinkajouCoins through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process, whether you are new to cryptocurrency or an experienced trader. </p>
                  
//                 </div>

//                 {/* 2nd */}

//                 <div className='w-[428px] h-[417px] rounded-[10px] bg-[#0F4F2A]  p-4'>
                
//                         <div className=''>
                
//                         <h1 className='text-[18px] text-[#FFFFFF] mb-16 relative font-poppins'>Support Green Projects and Land Conservation</h1>
//                         </div>
                
//                         <div className='w-[318px] h-[156px] ml-11'>
//                             <img className='object-cover' src={am} alt="" />
//                         </div>
                
//                         <p className='text-[14px] text-[#FFFFFF] font-poppins'>Every KinkajouCoin transaction contributes to purchasing carbon credits, securing land for conservation, and funding environmental sanctuaries. This ensures that your investment supports both immediate carbon offsetting and long-term environmental preservation.  </p>
                      
//                     </div>

//                     {/* 3rd */}

//                     <div className='w-[428px] h-[417px] rounded-[10px] bg-[#0F4F2A]  p-6'>
                    
//                             <div className=''>
                    
//                             <h1 className='text-[18px] text-[#FFFFFF] mb-16 relative font-poppins'>Watch Your Impact Grow</h1>
//                             </div>
                    
//                             <div className='w-[318px] h-[156px] ml-11'>
//                                 <img className='object-cover' src={cm} alt="" />
//                             </div>
                    
//                             <p className='text-[14px] text-[#FFFFFF] font-poppins'>Our platform provides detailed reporting on the environmental impact of your investments. Track how your KinkajouCoins are contributing to specific projects, from reforestation efforts to wildlife protection, and see the physical land areas your investment helps protect </p>
                          
//                         </div>
            
//         </div>
      
//     </div>
//   )
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import cf from './assets/cf.png';
// import cm from './assets/cm.png';
// import am from './assets/am.png';

// const cardVariants = {
//   offscreen: {
//     y: 100,
//     opacity: 0,
//   },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       bounce: 0.2,
//       duration: 0.8,
//     },
//   },
// };

// export default function Work() {
//   return (
//     <div className='text-center'>
//       <h1 className='text-6xl font-semibold text-[#FFFFFF] mt-24 font-montserrat'>How it works</h1>

//       <div className='flex justify-evenly mt-24 flex-wrap gap-y-10'>
//         {[{
//           title: 'Buy KinkajouCoins',
//           img: cf,
//           desc: `Easily purchase KinkajouCoins through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process, whether you are new to cryptocurrency or an experienced trader.`,
//         },
//         {
//           title: 'Support Green Projects and Land Conservation',
//           img: am,
//           desc: `Every KinkajouCoin transaction contributes to purchasing carbon credits, securing land for conservation, and funding environmental sanctuaries.`,
//         },
//         {
//           title: 'Watch Your Impact Grow',
//           img: cm,
//           desc: `Our platform provides detailed reporting on the environmental impact of your investments. Track how your KinkajouCoins are contributing to projects like reforestation and wildlife protection.`,
//         }].map((card, idx) => (
//           <motion.div
//             key={idx}
//             className='w-[428px] h-[417px] rounded-[10px] bg-[#0F4F2A] p-6 text-left'
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={cardVariants}
//             whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.7)" }}
//           >
//             <h1 className='text-[18px] text-[#FFFFFF] mb-10 font-poppins'>{card.title}</h1>
//             <div className='w-[318px] h-[156px] mx-auto mb-4'>
//               <img className='object-cover' src={card.img} alt={card.title} />
//             </div>
//             <p className='text-[14px] text-[#FFFFFF] font-poppins'>{card.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import { motion } from 'framer-motion';
// import cf from './assets/cf.png';
// import cm from './assets/cm.png';
// import am from './assets/am.png';

// // Animation variants
// const cardContainer = {
//   offscreen: { opacity: 0, y: 80 },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.2,
//       duration: 1,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const childVariant = {
//   offscreen: { opacity: 0, y: 20 },
//   onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const hoverEffect = {
//   scale: 1.05,
//   rotateX: 3,
//   rotateY: -3,
//   boxShadow: "0px 10px 30px rgba(34,197,94,0.5)",
// };

// export default function Work() {
//   const cards = [
//     {
//       title: 'Buy KinkajouCoins',
//       img: cf,
//       desc: `Easily purchase KinkajouCoins through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process.`,
//     },
//     {
//       title: 'Support Green Projects and Land Conservation',
//       img: am,
//       desc: `Every KinkajouCoin transaction contributes to purchasing carbon credits, securing land for conservation, and funding environmental sanctuaries.`,
//     },
//     {
//       title: 'Watch Your Impact Grow',
//       img: cm,
//       desc: `Track how your KinkajouCoins contribute to projects like reforestation and wildlife protection. Your investments have real-world impact.`,
//     }
//   ];

//   return (
//     <div className='text-center px-4'>
//       <h1 className='text-6xl font-semibold text-[#FFFFFF] mt-24 font-montserrat'>How it works</h1>

//       <div className='flex justify-evenly mt-24 flex-wrap gap-y-12'>
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             className='w-[428px] h-[417px] rounded-[10px] bg-[#0F4F2A] p-6 text-left cursor-pointer'
//             variants={cardContainer}
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ once: true, amount: 0.5 }}
//             whileHover={hoverEffect}
//           >
//             <motion.h1 className='text-[18px] text-[#FFFFFF] mb-10 font-poppins' variants={childVariant}>
//               {card.title}
//             </motion.h1>

//             <motion.div className='w-[318px] h-[156px] mx-auto mb-4' variants={childVariant}>
//               <img className='object-cover' src={card.img} alt={card.title} />
//             </motion.div>

//             <motion.p className='text-[14px] text-[#FFFFFF] font-poppins' variants={childVariant}>
//               {card.desc}
//             </motion.p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import Tilt from 'react-parallax-tilt';
// import { motion } from 'framer-motion';
// import cf from './assets/cf.png';
// import cm from './assets/cm.png';
// import am from './assets/am.png';

// const cardContainer = {
//   offscreen: { opacity: 0, y: 80 },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.2,
//       duration: 1,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const childVariant = {
//   offscreen: { opacity: 0, y: 20 },
//   onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// export default function Work() {
//   const cards = [
//     {
//       title: 'Buy KinkajouCoins',
//       img: cf,
//       desc: `Easily purchase KinkajouCoins through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process.`,
//     },
//     {
//       title: 'Support Green Projects and Land Conservation',
//       img: am,
//       desc: `Every KinkajouCoin transaction contributes to purchasing carbon credits, securing land for conservation, and funding environmental sanctuaries.`,
//     },
//     {
//       title: 'Watch Your Impact Grow',
//       img: cm,
//       desc: `Track how your KinkajouCoins contribute to projects like reforestation and wildlife protection. Your investments have real-world impact.`,
//     }
//   ];

//   return (
//     <div className='text-center px-4'>
//       <h1 className='text-6xl font-semibold text-[#FFFFFF] mt-24 font-montserrat'>How it works</h1>

//       <div className='flex justify-evenly mt-24 flex-wrap gap-y-12'>
//         {cards.map((card, index) => (
//           <Tilt
//             key={index}
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={10}
//             glareEnable={true}
//             glareMaxOpacity={0.15}
//             glareColor="#ffffff"
//             glarePosition="all"
//             scale={1.02}
//             transitionSpeed={1000}
//             className='rounded-[10px]'
//           >
//             <motion.div
//               className='w-[428px] h-[417px] bg-[#0F4F2A]/60 backdrop-blur-md p-6 text-left border border-[#34D399] rounded-[10px]'
//               variants={cardContainer}
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.5 }}
//             >
//               <motion.h1 className='text-[18px] text-[#FFFFFF] mb-10 font-poppins' variants={childVariant}>
//                 {card.title}
//               </motion.h1>

//               <motion.div className='w-[318px] h-[156px] mx-auto mb-4' variants={childVariant}>
//                 <img className='object-cover' src={card.img} alt={card.title} />
//               </motion.div>

//               <motion.p className='text-[14px] text-[#FFFFFF] font-poppins' variants={childVariant}>
//                 {card.desc}
//               </motion.p>
//             </motion.div>
//           </Tilt>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import Tilt from 'react-parallax-tilt';
// import { motion } from 'framer-motion';
// import cf from './assets/cf.png';
// import cm from './assets/cm.png';
// import am from './assets/am.png';

// const cardContainer = {
//   offscreen: { opacity: 0, y: 80 },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.2,
//       duration: 1,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const childVariant = {
//   offscreen: { opacity: 0, y: 20 },
//   onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// export default function Work() {
//   const cards = [
//     {
//       title: 'Buy KinkajouCoins',
//       img: cf,
//       desc: `Easily purchase KinkajouCoins through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process.`,
//     },
//     {
//       title: 'Support Green Projects and Land Conservation',
//       img: am,
//       desc: `Every KinkajouCoin transaction contributes to purchasing carbon credits, securing land for conservation, and funding environmental sanctuaries.`,
//     },
//     {
//       title: 'Watch Your Impact Grow',
//       img: cm,
//       desc: `Track how your KinkajouCoins contribute to projects like reforestation and wildlife protection. Your investments have real-world impact.`,
//     }
//   ];

//   return (
//     <div className='text-center px-4'>
//       <h1 className='text-6xl font-semibold text-[#FFFFFF] mt-24 font-montserrat'>How it works</h1>

//       <div className='flex justify-evenly mt-24 flex-wrap gap-y-12'>
//         {cards.map((card, index) => (
//           <Tilt
//             key={index}
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={10}
//             glareEnable={true}
//             glareMaxOpacity={0.15}
//             glareColor="#ffffff"
//             glarePosition="all"
//             scale={1.02}
//             transitionSpeed={1000}
//             className='rounded-[10px]'
//           >
//             <motion.div
//               className='w-[428px] h-[417px] bg-[#0F4F2A]/60 backdrop-blur-md p-6 text-center border border-[#34D399] rounded-[10px]'
//               variants={cardContainer}
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.5 }}
//             >
//               <motion.h1 className='text-[18px] text-[#FFFFFF] mb-10 font-poppins' variants={childVariant}>
//                 {card.title}
//               </motion.h1>

//               <motion.div className='w-[318px] h-[156px] mx-auto mb-4 flex justify-center items-center' variants={childVariant}>
//                 <img className='object-contain mx-auto max-h-full max-w-full' src={card.img} alt={card.title} />
//               </motion.div>

//               <motion.p className='text-[14px] text-[#FFFFFF] font-poppins' variants={childVariant}>
//                 {card.desc}
//               </motion.p>
//             </motion.div>
//           </Tilt>
//         ))}
//       </div>
//     </div>
//   );
// }



import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import cf from './assets/cf.png';
import cm from './assets/cm.png';
import am from './assets/am.png';

const cardContainer = {
  offscreen: { opacity: 0, y: 80 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Work() {
  const cards = [
    {
      title: 'Buy KinkajouCoins',
      img: cf,
      desc: `Easily purchase KinkajouCoins through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process.`,
    },
    {
      title: 'Support Green Projects and Land Conservation',
      img: am,
      desc: `Every KinkajouCoin transaction contributes to purchasing carbon credits, securing land for conservation, and funding environmental sanctuaries.`,
    },
    {
      title: 'Watch Your Impact Grow',
      img: cm,
      desc: `Track how your KinkajouCoins contribute to projects like reforestation and wildlife protection. Your investments have real-world impact.`,
    }
  ];

  return (
    <div className='text-center px-4'>
      <h1 className='text-6xl font-semibold text-[#FFFFFF] mt-24 font-montserrat'>How it works</h1>

      {/* Grid container */}
      <div className='grid grid-cols-3 gap-8 mt-24'>
        {cards.map((card, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.02}
            transitionSpeed={1000}
            className='rounded-[10px]'
          >
            <motion.div
              className='w-full h-[417px] bg-[#0F4F2A]/60 backdrop-blur-md p-6 text-center border border-[#34D399] rounded-[10px]'
              variants={cardContainer}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.h1 className='text-[18px] text-[#FFFFFF] mb-10 font-poppins' variants={childVariant}>
                {card.title}
              </motion.h1>

              <motion.div className='w-[318px] h-[156px] mx-auto mb-4 flex justify-center items-center' variants={childVariant}>
                <img className='object-contain mx-auto max-h-full max-w-full' src={card.img} alt={card.title} />
              </motion.div>

              <motion.p className='text-[14px] text-[#FFFFFF] font-poppins' variants={childVariant}>
                {card.desc}
              </motion.p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
