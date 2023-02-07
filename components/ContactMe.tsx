import React from "react";
//GrMapLocation
import { GrLocation, GrPhone, GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen flex flex-col md:flex-row max-w-7xl px-10 justify-center items-center mx-auto relative overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[14px] text-gray-400 md:text-2xl ">
        Contact me
      </h3>
      <div className="flex flex-col w-full md:items-center md:flex-row text-center md:gap-10 gap-4 text-gray-300 md:text-xl">
        <div className="flex flex-col space-y-4 md:space-y-8 w-full mt-10 sm:mt-0">
          <div className="font-bold hidden md:inline-block md:text-4xl text-left space-y-4">
            <h2>Let{`'`}s Talk!</h2>
            <h2>Tell me about your projects.</h2>
          </div>
          <h5 className="text-left text-sm font-thin text-green-200">
            Let{`'`}s build your dreams{" "}
            <span className=" underline underline-offset-2 decoration-[#CF2400] font-semibold">
              together
            </span>
          </h5>
          <div className="text-left text-xs flex flex-row md:flex-col gap-4 md:font-bold">
            <span>
              <ImLocation className="mr-1 text-gray-200 inline" /> Ankara,
              TURKIYE
            </span>
            <span>
              <GrMail className="mr-1 inline" /> gorkemgocer7@gmail.com
            </span>
          </div>
        </div>
        <div
          className="border border-gray-800 p-4 md:p-14 md:pb-4 rounded-b-xl w-full
        "
        >
          <form className="flex flex-col gap-8 text-left w-full">
            <h1 className="mb-3 md:mb-6 font-semibold text-gray-50 md:text-2xl">
              Send me a Mail <span className="ml-2">🚀 </span>
            </h1>
            <div className="relative text-xs md:text-lg">
              <label
                className="absolute text-sm text-gray-400 italic -top-6"
                htmlFor="name"
              >
                Name
              </label>
              <input className="form--input" type="text" id="name" />
            </div>
            <div className="relative text-xs md:text-lg">
              <label
                className="absolute text-sm text-gray-400 italic -top-6"
                htmlFor="email"
              >
                Email
              </label>
              <input className="form--input" type="email" id="email" />
            </div>
            <div className="relative text-xs md:text-lg">
              <label
                className="absolute text-sm text-gray-400 italic -top-6"
                htmlFor="subject"
              >
                Subject
              </label>
              <textarea className="form--input" rows={3} id="subject" />
            </div>
            <button className="bg-green-700 rounded-lg text-xs md:text-lg py-1 w-40 mx-auto md:w-full hover:bg-green-600 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
