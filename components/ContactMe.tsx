import React, { useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";

type Inputs = {
  name: string;
  email: string;
  message: string;
};
type Props = {
  contactEmail: string;
  contactAddress: string;
};

const ContactMe = ({ contactAddress, contactEmail }: Props) => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({ defaultValues: { name: "", email: "", message: "" } });

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (formData.name && formData.email && formData.message) {
      const templateParams = {
        email: formData.email,
        fullname: formData.name,
        message: formData.message,
      };
      emailjs.send(
        "service_79sivws",
        "template_9vi5fpi",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY
      );
    }
    return;
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", email: "", message: "" });
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="h-screen flex flex-col md:flex-row max-w-7xl px-10 justify-center items-center mx-auto relative overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[12px] ml-[12px] hidden tall:inline text-slate-200 md:text-2xl">
        Contact me
      </h3>
      <div className="flex flex-col w-full md:items-center md:flex-row text-center gap-10 text-slate-200 md:text-xl mt-10 wideShort:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col space-y-4 md:space-y-8 w-full mt-10 sm:mt-0"
        >
          <div className="font-bold hidden md:inline-block md:text-4xl text-left space-y-4">
            <h2 className="rainbowText">Let{`'`}s Talk!</h2>
            <h2 className="rainbowText">Tell me about your projects.</h2>
          </div>
          <h5 className="text-center md:text-left text-sm font-thin text-green-200 md:font-semibold italic">
            Let{`'`}s build your dreams{" "}
            <span className=" underline underline-offset-2 decoration-[#CF2400] font-semibold md:text-xl">
              together
            </span>
          </h5>
          <div className="text-xs flex flex-row gap-3 justify-center items-center md:flex-col md:items-start md:font-bold">
            <span>
              <ImLocation className="mr-[1px] text-amber-300 md:mr-2 md:text-xl inline" />
              {contactAddress}
            </span>
            <span>
              <GrMail className="mr-[1px] text-amber-300 md:mr-2 md:text-xl inline" />
              {contactEmail}
            </span>
          </div>
        </motion.div>
        <div className="border border-gray-800 p-4 md:p-14 md:pb-4 rounded-b-xl w-full wideShort:py-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 wideShort:gap-6 text-left w-full"
          >
            <h1 className="mb-3 md:mb-6 font-semibold text-slate-50 md:text-2xl">
              Send me a Mail <span className="ml-2">🚀 </span>
            </h1>
            <div className="relative md:text-lg">
              <label
                className="absolute text-sm text-slate-200 italic -top-6"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name")}
                className="form--input"
                type="text"
                id="name"
              />
            </div>
            <div className="relative  md:text-lg">
              <label
                className="absolute text-sm text-slate-200 italic -top-6"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email")}
                className="form--input"
                type="email"
                id="email"
              />
            </div>
            <div className="relative  md:text-lg">
              <label
                className="absolute text-sm text-slate-200 italic -top-6"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                className="form--input"
                rows={3}
                id="message"
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 rounded-lg text-xs md:text-sm py-1 w-40 mx-auto md:w-full hover:bg-green-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
