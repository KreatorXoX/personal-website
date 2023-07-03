import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/typings";

import { useCarousel } from "@/context/carousel-ctx";
import { urlForImage } from "@/sanity/lib/image";

interface Props {
  idx: number;
  classes: string;
  project: Project;
}

const CarouselItem = ({ project, idx, classes }: Props) => {
  const setSelectedIdx = useCarousel((state) => state.setSelectedIdx);
  return (
    <div
      onClick={() => setSelectedIdx(idx)}
      className={`${classes} bg-gray-700/50 text-gray-300 p-2 md:py-4 rounded-md flex flex-col items-center space-y-8
    absolute xs:h-[20rem] md:h-[30rem] lg:h-[30rem] w-full max-w-[20rem] overflow-y-scroll overflow-x-hidden
      scrollbar-thin scrollbar-track-green-200/20 scrollbar-thumb-[#CF2400]/70 scrollbar-thumb-rounded-full
    `}
    >
      <motion.img
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75 }}
        className=" h-24 w-48 md:h-30 md:w-40 xl:h-40 xl:w-56 rounded-xl object-cover object-center"
        src={urlForImage(project?.projectImage).url()}
      />
      <div className="space-y-4 text-center md:text-left">
        <h4 className="text-sm md:text-lg font-bold tracking-[5px]">
          {project?.projectName}
        </h4>
        <p className="text-xs md:text-md italic text-gray-400">
          Technologies Used
        </p>
        <div className="flex flex-row gap-5 justify-center">
          {project?.technologiesUsed.map((tech) => (
            <Image
              key={tech._id}
              className="w-4 h-4 md:w-6 md:h-6 rounded object-cover bg-gray-300 p-[2px]"
              width={100}
              height={100}
              src={urlForImage(tech.skillImage).url()}
              alt="tech"
            />
          ))}
        </div>
        <p className="text-xs md:text-md">
          Project Date :{" "}
          <span className="tracking-widest italic font-semibold underline underline-offset-4">
            {project?.projectDate}
          </span>
        </p>
        <ul className="list-disc space-y-4 ml-4 text-left text-xs md:text-md">
          <li>{project?.projectSummary}</li>
          <li className="italic underline">{project?.projectLink}</li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselItem;
