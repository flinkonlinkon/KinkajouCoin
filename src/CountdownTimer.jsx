import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 10,
    minutes: 30,
    seconds: 25,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0 || hours > 0 || days > 0) {
            seconds = 59;
            if (minutes > 0) {
              minutes--;
            } else {
              minutes = 59;
              if (hours > 0) {
                hours--;
              } else {
                hours = 23;
                if (days > 0) days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (value) => value.toString().padStart(2, "0");

  return (
    <div className="flex gap-4  bg-[#0a0a0a] p-6">
      {[
        { label: "Day", value: format(timeLeft.days) },
        { label: "Hour", value: format(timeLeft.hours) },
        { label: "Minute", value: format(timeLeft.minutes) },
        { label: "Seconds", value: format(timeLeft.seconds) },
      ].map((item, index) => (
        <div
          key={index}
          className="w-16 h-20 flex flex-col justify-center items-center border border-green-500 rounded-md"
        >
          <span className="text-white text-2xl font-bold">{item.value}</span>
          <span className="text-gray-400 text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
