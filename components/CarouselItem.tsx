import { CarouselItemType } from "./data";
import { useCarousel } from "@/context/carousel-ctx";
import { motion } from "framer-motion";
import Image from "next/image";
interface Props extends CarouselItemType {
  idx: number;
  classes: string;
}

const CarouselItem = (props: Props) => {
  const setSelectedIdx = useCarousel((state) => state.setSelectedIdx);
  return (
    <div
      onClick={() => setSelectedIdx(props.idx)}
      className={`${props.classes} bg-[#202120] text-gray-300 p-4 md:py-4 rounded-md flex flex-col items-center space-y-8
    absolute  h-[25rem] md:h-[30rem] lg:h-[35rem] w-full max-w-[20rem] overflow-y-scroll overflow-x-hidden`}
    >
      {/* <h3 className="text-[#CF2400] tracking-widest text-lg md:text-3xl">
        {props.title}
      </h3>
      <div>
        <p className="text-xs md:text-sm">{props.description}</p>
      </div> */}
      <motion.img
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75 }}
        className=" h-24 w-48 md:h-30 md:w-40 xl:h-40 xl:w-56 rounded-lg object-contain object-center"
        src="https://res.cloudinary.com/dinhhwb9x/image/upload/v1675098548/busLogo_asm9hj.png"
      />
      <div className="space-y-4 text-center md:text-left">
        <h4 className="text-xl md:text-xl xl:text-2xl font-bold tracking-[10px]">
          Developer
        </h4>
        <p className="text-sm md:text-lg italic text-gray-400">
          Technologies Used
        </p>
        <div className="flex flex-row gap-5 justify-center">
          <Image
            className="w-4 h-4 md:w-6 md:h-6 rounded object-cover"
            width={100}
            height={100}
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="tech"
          />
          <Image
            className="w-4 h-4 md:w-6 md:h-6 rounded object-cover"
            width={100}
            height={100}
            src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
            alt="tech"
          />
          <Image
            className="w-4 h-4 md:w-6 md:h-6 rounded object-cover"
            width={100}
            height={100}
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            alt="tech"
          />
        </div>
        <p className="text-xs md:text-md">
          Project Date :{" "}
          <span className="tracking-widest italic font-semibold underline underline-offset-4">
            Sept 2021
          </span>
        </p>
        <ul className="list-disc space-y-4 ml-4 text-left text-xs md:text-md">
          <li>
            Student Tracker is a web app designed for parents to monitor the
            location and safety of their children while they are in transit to
            and from school via the school bus. The application provides
            real-time updates on the child{"`"}s location and allows parents to
            ensure that their child arrives at school safely and is returned
            home without any inconvenience.
          </li>
          <li>github link</li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselItem;
