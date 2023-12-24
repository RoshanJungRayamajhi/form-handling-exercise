import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const Form = ({submithandlersdata}) => {
    const Form =useRef()
    const {register , handleSubmit}=useForm()
    const handformsubmit = (data) => {
        submithandlersdata(data)
        Form.reset()
    }
  return (
    <form className="mt-10 flex justify-center gap-10" onSubmit = {handleSubmit(handformsubmit)}>
      <input {...register("name")}
        className=" rounded-md font-semibold text-base px-2 py-1 outline-none"
        placeholder="Name"
        type="text"
      />
      <input {...register("email")}
        className=" rounded-md font-semibold text-base px-2 py-1 outline-none"
        placeholder="email@"
        type="text"
      />
      <input {...register("image")}
        className=" rounded-md font-semibold text-base px-2 py-1 outline-none"
        placeholder="imgurl"
        type="text"
      />
      <input
        className="px-2 py-1 bg-blue-500 rounded-md text-white font-semibold"
        type="submit"
      />
    </form>
  );
};

export default Form;
