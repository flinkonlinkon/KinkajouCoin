import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import star from './assets/Star 1.png'

const faqs = [
  {
    question: "What is KinkajouCoin ?",
    answer:
      "KinkajouCoin is a fun and community-driven meme cryptocurrency inspired by our playful kinkajou mascot. It’s designed to bring crypto enthusiasts together while offering low transaction fees and an engaging ecosystem.",
  },
  {
    question: "What is the current market value of your...",
    answer: "KinkajouCoin is a fun and community-driven meme cryptocurrency inspired by our playful kinkajou mascot. It’s designed to bring crypto enthusiasts together while offering low transaction fees and an engaging ecosystem.",
  },
  {
    question: "How do I buy KinkajouCoin ?",
    answer: "KinkajouCoin is a fun and community-driven meme cryptocurrency inspired by our playful kinkajou mascot. It’s designed to bring crypto enthusiasts together while offering low transaction fees and an engaging ecosystem.",
  },
  {
    question: "Is KinkajouCoin secure?",
    answer: "KinkajouCoin is a fun and community-driven meme cryptocurrency inspired by our playful kinkajou mascot. It’s designed to bring crypto enthusiasts together while offering low transaction fees and an engaging ecosystem.",
  },
  {
    question: "Can I Buy it with BTC?",
    answer: "KinkajouCoin is a fun and community-driven meme cryptocurrency inspired by our playful kinkajou mascot. It’s designed to bring crypto enthusiasts together while offering low transaction fees and an engaging ecosystem.",
  },
  {
    question: "How can I Connect Wallet?",
    answer: "KinkajouCoin is a fun and community-driven meme cryptocurrency inspired by our playful kinkajou mascot. It’s designed to bring crypto enthusiasts together while offering low transaction fees and an engaging ecosystem.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 text-white">
        <div className='flex justify-center items-center'>
            <img className='object-cover w-4 h-4' src={star} alt="" />

             <h1 className='text-[#3CFF71] font-medium text-2xl'>FAQ’s</h1>
        </div>
        <h1 className="text-5xl text-[#FFFFFF] mt-3 mb-6 font-semibold">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`rounded-lg mb-4 transition-all duration-300 ${
            openIndex === index ? "bg-[#2A2A2A]" : "bg-[#121212]"
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer p-4"
            onClick={() => toggleFAQ(index)}
          >
            <span className={`text-[20px] font-medium ${openIndex === index ? "text-green-400" : "text-gray-200"}`}>
              {index + 1}. {faq.question}
            </span>
            {openIndex === index ? (
              <FaChevronUp className="text-green-400" />
            ) : (
              <FaChevronDown className="text-gray-400" />
            )}
          </div>

          {openIndex === index && faq.answer && (
            <div className="px-4 pb-4 text-sm text-gray-300 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
