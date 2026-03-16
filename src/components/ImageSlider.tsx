import { useEffect, useState } from "react";

export default function Imgslider() {

  const slides = [
    {
      img: "/src/assets/wallpaper.jpg",
      title: "Plan your projects effortlessly",
      desc: "Organize tasks and workflows in one place."
    },
    {
      img: "/src/assets/wallpaper2.jpg",
      title: "Collaborate with your team",
      desc: "Stay connected and move faster together."
    },
    {
      img: "/src/assets/wallpaperflare.jpg",
      title: "Track progress visually",
      desc: "Understand your work with powerful insights."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 50);

    const slideTimer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };

  }, [current]);

  return (
    <div className="relative w-full h-full rounded-[80px] overflow-hidden shadow-xl">

      {/* IMAGE WITH FADE TRANSITION */}
      <img
        key={slides[current].img}
        src={slides[current].img}
        alt="slider"
        className="w-full h-full object-cover transition-opacity duration-700"
      />

      {/* PROGRESS BARS */}
      <div className="absolute top-6 left-0 w-full flex justify-center gap-3 z-20">

        {slides.map((_, index) => {

          const barWidth =
            index === current ? "w-[120px]" : "w-[40px]";

          return (
            <div
              key={index}
              className={`${barWidth} h-[4px] bg-white/30 rounded overflow-hidden transition-all duration-500`}
            >
              <div
                className="h-full bg-white"
                style={{
                  width: index === current ? `${progress}%` : "0%"
                }}
              />
            </div>
          );
        })}

      </div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* GLASS CARD */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] z-20">

        <div
          key={current}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-[40px] p-6 shadow-xl transition-all duration-500"
        >

          <h3 className="text-white text-xl font-semibold">
            {slides[current].title}
          </h3>

          <p className="text-white/80 text-sm mt-2">
            {slides[current].desc}
          </p>

        </div>

      </div>

    </div>
  );
}