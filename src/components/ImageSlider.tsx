import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Imgslider() {
  const slides = [
    {
      img: "/src/assets/wallpaper.jpg",
      title: "Plan your projects effortlessly",
      desc: "Organize tasks and workflows in one place",
    },
    {
      img: "/src/assets/wallpaper2.jpg",
      title: "Collaborate with your team",
      desc: "Stay connected and move faster together",
    },
    {
      img: "/src/assets/wallpaperflare.jpg",
      title: "Track progress visually",
      desc: "Understand your work with powerful insights",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  // auto slide + progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 2));
    }, 100);

    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setProgress(0);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [current]);

  const changeSlide = (dir: number) => {
    setCurrent((c) => (c + dir + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <div className="relative w-full h-full rounded-[80px] overflow-hidden shadow-xl">
      {/* IMAGE */}
      <img
        src={slides[current].img}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* PROGRESS */}
      <div className="absolute top-6 w-full flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`cursor-pointer h-[4px] rounded overflow-hidden bg-white/30 transition-all ${
              i === current ? "w-[120px]" : "w-[40px]"
            }`}
          >
            <div
              className="h-full bg-white"
              style={{ width: i === current ? `${progress}%` : 0 }}
            />
          </div>
        ))}
      </div>

      {/* NAV BUTTONS */}
      <button
        onClick={() => changeSlide(-1)}
        className="absolute top-5 left-5 z-20  rounded-full backdrop-blur-l bg-white/10 border border-white/20 p-4"
      >
        <ChevronLeft size={25} className="text-white" />
      </button>

      <button
        onClick={() => changeSlide(1)}
        className="absolute bottom-[45px] right-5 z-20 rounded-full backdrop-blur-md bg-white/10 border border-white/20 p-4"
      >
        <ChevronRight size={25} className="text-white" />
      </button>

      {/* GRADIENT */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black/80 to-transparent">

      {/* TEXT CARD */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[75%] z-20 flex flex-col justify-start">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-[40px] p-4">
          <h3 className="text-white text-xl font-semibold">
            {slides[current].title}
          </h3>
          <p className="text-white/80 text-sm mt-2">{slides[current].desc}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
