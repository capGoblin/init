import { IoTerminalOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 flex justify-between">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <IoTerminalOutline className="h-7 mr-2 " />
            INIT
          </a>
        </div>

        <div className="flex flex-col  text-right gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          {/* <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Dribbble
            </a>
          </div> */}
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 All rights{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/capGoblin/init"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Reserved
          </a>
        </h3>
      </section>
    </footer>
  );
};
