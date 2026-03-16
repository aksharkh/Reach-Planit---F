import { useEffect, useState } from "react";

export default function ImageSlider() {

  const images = [
    "/src/assets/wallpaper.jpg",
    "/src/assets/wallpaper2.jpg",
    "/src/assets/wallpaperflare.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 50);

    const slideTimer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };

  }, [current]);

  return (
    <div className="h-full w-full flex items-center justify-center p-6">

      {/* Slider Box */}
      <div className="relative w-[100%] h-[95vh] overflow-hidden rounded-[80px] shadow-xl">

        {/* Progress bars */}
        <div className="absolute top-6 left-0 w-full flex justify-center gap-3 z-10">

          {images.map((_, index) => {

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
                    width: index === current ? `${progress}%` : "0%",
                  }}
                />
              </div>
            );
          })}

        </div>

        {/* Image */}
        <img
          src={images[current]}
          alt="slider"
          className="h-full w-full object-cover"
        />

      </div>

    </div>
  );
}