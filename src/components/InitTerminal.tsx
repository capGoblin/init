export const InitTerminal = () => {
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
          <span className="initCommand font-semibold text-white">
            init -n my-app --mui --node --pg
          </span>
        </p>
        <p className="mt-4">
          {" "}
          <span className="mt-5 text-white">
            Your NextJs project is{" "}
            <span className="text-green-500 underline decoration-2">ready</span>{" "}
            with{" "}
            <span className="text-blue-500">
              Typescript, TailwindCSS, Material UI{" "}
            </span>
            already Intgerated along with{" "}
            <span className="text-blue-500">Backend Boilerplate</span>
          </span>{" "}
        </p>
        <p className="text-gray-400 opacity-50">
          // and that is all it takes!!
        </p>
      </div>
    </div>
  );
};
