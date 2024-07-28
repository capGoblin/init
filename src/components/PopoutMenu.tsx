import { buttonVariants } from "./ui/button";

interface Props {
  status: boolean;
}

export const PopoutMenu = ({ status }: Props) => {
  return (
    <div
      className={`${
        status ? "inline" : "hidden"
      } absolute flex gap-2 left-[245px] bottom-[300px] `}
    >
      <a
        rel="noreferrer noopener"
        href="https://github.com/capGoblin/init/tree/main/public/DownloadFiles/Linux"
        target="_blank"
        className={`border cursor-pointer ${buttonVariants({
          variant: "secondary",
        })}`}
      >
        For Linux
      </a>
      <a
        rel="noreferrer noopener"
        href="https://github.com/capGoblin/init/tree/main/public/DownloadFiles/Windows"
        target="_blank"
        className={`border cursor-pointer ${buttonVariants({
          variant: "secondary",
        })}`}
      >
        For Windows
      </a>
    </div>
  );
};
