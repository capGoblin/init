import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Terminal } from "./Terminal";
import { RxDownload } from "react-icons/rx";
import { useState } from "react";
import { PopoutMenu } from "./PopoutMenu";

export const Hero = () => {
  const [DownloadOptionStatus, setDownloadOptionStatus] = useState(false);
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-[250px] gap-10 ">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Streamline
            </span>{" "}
            your
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Development
            </span>{" "}
            workflow
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Effortlessly create projects with customizable setups in a single
          command.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className=" ">
            <RxDownload />
            <span
              onClick={() => setDownloadOptionStatus(!DownloadOptionStatus)}
              className="ml-2"
            >
              Download
            </span>
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/capGoblin/init"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
      <PopoutMenu status={DownloadOptionStatus} />
      {/* Hero cards sections */}
      <div className="z-10">
        {/* <HeroCards /> */}
        <Terminal />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
