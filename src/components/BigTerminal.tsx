export const BigTerminal = () => {
  return (
    <div className="terminal_root h-[600px] w-[800px] bg-[#17161f] grid grid-rows-[30px_1fr] rounded-lg   pl-2 ">
      <div className="terminalHeader ">
        <span className="bg-[#ff5f56] inline-block rounded-full h-[12px] w-[12px] ml-[0px] mt-[8px] "></span>
        <span className="bg-[#ffbd2e]  inline-block rounded-full h-[12px] w-[12px] ml-[8px] mt-[8px] "></span>
        <span className="bg-[#27c93f]  inline-block rounded-full h-[12px] w-[12px] ml-[8px] mt-[8px] "></span>
      </div>
      <div className="terminalText">
        <p>
          {" "}
          <span className="text-green-500 font-semibold">$</span>{" "}
          <span className="initCommand font-semibold">
            npx create-next-app@latest
          </span>
        </p>
        <p className={` font-semibold mt-1  text-white `}>
          <span className="text-blue-500">?</span> What is your project named ?{" "}
          <span className="text-[#707070]"> &#62; my-app</span>
        </p>
        <p className={` font-semibold mt-1  text-white `}>
          <span className="text-blue-500">?</span> Would you like to use{" "}
          <span className="text-blue-500">Typescript</span>{" "}
          <span className="text-[#707070]">
            {" "}
            &#62; No \ <span className="text-white">Yes</span>
          </span>
        </p>
        <p className={` font-semibold mt-1  text-white `}>
          <span className="text-blue-500">?</span> Would you like to use ESLint
          ?{" "}
          <span className="text-[#707070]">
            {" "}
            &#62; <span className="text-white">No</span> \ Yes
          </span>
        </p>
        <p className={`font-semibold mt-1  text-white `}>
          <span className="text-blue-500">?</span> Would you like to use
          Tailwind CSS ?{" "}
          <span className="text-[#707070]">
            {" "}
            &#62; No \ <span className="text-white">Yes</span>
          </span>
        </p>
        <p className={` font-semibold mt-1  text-white `}>
          <span className="text-blue-500">?</span> Would you like to use 'src/'
          directory ?{" "}
          <span className="text-[#707070]">
            {" "}
            &#62; No \ <span className="text-white">Yes</span>
          </span>
        </p>
        <p className={` font-semibold mt-2  text-white `}>
          Creating a new Next.js app in /Users/Code/Project.{" "}
        </p>
        <p className={` font-semibold mt-1  text-white `}>
          <span className="text-blue-500">cd</span> my-app{" "}
        </p>
        <p>
          {" "}
          <span className="text-green-500 font-semibold mt-2">$</span>{" "}
          <span className="initCommand font-semibold">
            npm install @mui/material @emotion/react @emotion/styled
          </span>
        </p>
      </div>
    </div>
  );
};
