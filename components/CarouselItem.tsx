import { CarouselItemType } from "./data";
import { useCarousel } from "@/context/carousel-ctx";
interface Props extends CarouselItemType {
  idx: number;
  classes: string;
}

const CarouselItem = (props: Props) => {
  const setSelectedIdx = useCarousel((state) => state.setSelectedIdx);
  return (
    <div
      onClick={() => setSelectedIdx(props.idx)}
      className={`${props.classes} bg-[#202120] text-gray-300 p-10 rounded-md flex flex-col items-center space-y-10
    absolute w-80 lg:w-72 lg:h-[30rem]`}
    >
      <h3 className="text-[#CF2400] tracking-widest text-lg md:text-3xl">
        {props.title}
      </h3>
      <div>
        <p className="text-xs md:text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
