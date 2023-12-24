import React from "react";

const Card = ({item,handleremove,id}) => {
  return (
    <div className="w-52 h-full bg-zinc-100 rounded-md p-2 flex flex-col items-center  ">
      <div className="image w-10 h-10 bg-blue-400 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={item.image} alt="" />
      </div>
      <h1 className=" mt-1 text-xl font-bold">{item.name}</h1>
      <h4 className=" opacity-40 text-xs font-bold">{item.email}</h4>
      <p className=" mt-1 mb-2 font-semibold text-center tracking-normal leading-[1.3vw]">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
      </p>
      <button onClick={()=>handleremove(id)} className=" text-white bg-red-600 rounded-full px-6 text-lg font-semibold">
        Remove it
      </button>
    </div>
  );
};

export default Card;
