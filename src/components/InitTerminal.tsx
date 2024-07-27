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
          <span className="initCommand font-semibold">
            init -n my-app --mui --shadcn
          </span>
        </p>
      </div>
    </div>
  );
};
