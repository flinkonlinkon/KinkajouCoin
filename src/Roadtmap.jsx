
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from './assets/bg.png';

const roadmap = [
  {
    label: "G1",
    left: ["Token Launch", "Initial Airdrops", "Build the Community"],
    right: [],
  },
  {
    label: "G2",
    left: [],
    right: ["Marketing Blitz", "Major Partnerships", "First Burn Event"],
  },
  {
    label: "G3",
    left: ["Staking Integration", "More Airdrops", "Community Contests"],
    right: [],
  },
  {
    label: "G4",
    left: [],
    right: ["New Exchange Listings", "Second Burn Event", "Continued Growth"],
  },
];

const Roadtmap = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center items-center justify-center py-20 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className='text-5xl text-[#EEEEEE] text-center mt-3 mb-3 font-montserrat'>Roadmap Highlights</h1>

      <p className='text-[#EEEEEE] text-center font-montserrat'>
        We're on a mission, and this is just the beginning. The Matrix won’t <br />
        know what hit it. Here's our game plan to dominate the crypto space
      </p>

      <div className="max-w-4xl w-full grid grid-cols-3 gap-8 relative ml-[304px] mt-5 font-montserrat">
        {roadmap.map((item, index) => (
          <div key={index} className="col-span-3 flex justify-between items-center" data-aos="fade-up">
            <div className="w-1/3 text-white text-right pr-4">
              {item.left.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center text-green-400 text-2xl font-bold relative z-10 border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]">
              {item.label}
            </div>
            <div className="w-1/3 text-white text-left pl-4">
              {item.right.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadtmap;
