import { useEffect } from "react";
import { Project } from "@/typings";
import { useCarousel } from "@/context/carousel-ctx";
import CarouselItem from "./CarouselItem";

type Props = {
  projects: Project[];
};

const Carousel = ({ projects }: Props) => {
  const setDataLength = useCarousel((state) => state.setDataLength);
  const setSelectedIdx = useCarousel((state) => state.setSelectedIdx);
  const selectedIdx = useCarousel((state) => state.selectedIdx);
  const leftIdx = useCarousel((state) => state.leftIdx);
  const rightIdx = useCarousel((state) => state.rightIdx);
  const increaseIdx = useCarousel((state) => state.increaseIdx);
  const decreaseIdx = useCarousel((state) => state.decreaseIdx);

  useEffect(() => {
    setDataLength(projects.length);
    setSelectedIdx(0);
  }, [setDataLength, setSelectedIdx, projects.length]);

  const rightClickHandler = () => {
    increaseIdx();
  };
  const leftClickHandler = () => {
    decreaseIdx();
  };

  return (
    <div className="relative w-full h-screen">
      <div className="relative h-screen">
        {projects?.map((project, idx) => {
          let className = "card";

          if (idx === selectedIdx) className = "card card--active";
          else if (idx === rightIdx) className = "card card--right";
          else if (idx === leftIdx) className = "card card--left";
          else className = "card";

          return (
            <CarouselItem
              classes={className}
              key={idx}
              project={project}
              idx={idx}
            />
          );
        })}
        {projects?.length > 0 && (
          <div
            className="absolute lg:hidden
          -bottom-5 sm:bottom-0  left-[50%] transform -translate-x-[50%] -translate-y-24 md:-translate-y-[100%]
          wideShort:bottom-[35%]
        "
          >
            <div className="flex items-center gap-4 wideShort:gap-[25rem] ">
              <button
                onClick={leftClickHandler}
                className="font-semibold text-4xl mb-1 wideShort:text-gray-800  text-slate-200"
              >
                {"<"}
              </button>
              <h5 className="text-slate-200 wideShort:hidden">
                {selectedIdx + 1} of {projects.length}
              </h5>
              <button
                onClick={rightClickHandler}
                className="font-semibold text-4xl mb-1 wideShort:text-gray-800 text-slate-200"
              >
                {">"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
