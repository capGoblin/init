import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

import "./Terminal.css";
import { text } from "stream/consumers";

export const Terminal = () => {
  const words = [
    {
      text: "init",
    },
    {
      text: "-f",
    },
    {
      text: "next",
    },
    {
      text: "--shadcn",
    },
    {
      text: "-b",
    },
    {
      text: "node",
    },
    {
      text: "--pg",
    },
  ];
  return (
    <div className="terminal_root h-[400px] w-[600px] bg-[#17161f] grid grid-rows-[30px_1fr] rounded-lg mt-[30px] ml-[200px] pl-2 ">
      <div className="terminalHeader ">
        <span className="bg-[#ff5f56] inline-block rounded-full h-[12px] w-[12px] ml-[0px] mt-[8px] "></span>
        <span className="bg-[#ffbd2e]  inline-block rounded-full h-[12px] w-[12px] ml-[8px] mt-[8px] "></span>
        <span className="bg-[#27c93f]  inline-block rounded-full h-[12px] w-[12px] ml-[8px] mt-[8px] "></span>
      </div>
      <div className="terminalText">
        <p>
          {" "}
          <span className="text-green-500 font-semibold">$</span>{" "}
          {/* <span className="initCommand font-semibold">
            init -n my-app --mui
          </span> */}
          <TypewriterEffectSmooth words={words} />
        </p>
        <p
          className={`opacity-0 font-semibold text-lg mt-2 blurFadeIn text-white `}
        >
          creating your next app with Typescript, Tailwind, ShadCN,
          <br></br> with backend NodeJs, postgreSQL DB inbuilt...
        </p>
      </div>
    </div>
  );
};
