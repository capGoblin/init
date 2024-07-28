import { buttonVariants } from "./ui/button";

interface Props {
  status: boolean;
}

export const PopoutMenu = ({ status }: Props) => {
  return (
    <div
      className={`${
        status ? "inline" : "hidden"
      } absolute flex gap-2 left-[245px] bottom-[250px] `}
    >
      <a
        rel="noreferrer noopener"
        href="/DownloadFiles/Linux/init"
        target="_blank"
        className={`border cursor-pointer ${buttonVariants({
          variant: "secondary",
        })}`}
      >
        For Linux
      </a>
      <a
        rel="noreferrer noopener"
        href="/DownloadFiles/Windows/init"
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
