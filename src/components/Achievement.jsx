import React from "react";

function Achievement(props) {
  return (
    <div className="flex flex-row items-center w-full">
      <div className="">
        <img src={props.img} alt={props.company} className="w-[150px]" />
      </div>
      <div className="flex flex-col p-4 text-left justify-center w-full flex-1">
        <div className="text-zinc-800 dark:text-zinc-300 text-md font-semibold">
          {props.role + " "}
        </div>
        <div className="text-zinc-400 text-xs pb-2 ">{props.duration}</div>
        <div className="text-zinc-400 text-sm">{props.children}</div>
      </div>
    </div>
  );
}

export default Achievement;
