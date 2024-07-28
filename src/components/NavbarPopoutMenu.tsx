import { buttonVariants } from "./ui/button";

interface Props {
  status: boolean;
}

export const NavbarPopoutMenu = ({ status }: Props) => {
  return (
    <div
      className={`${
        status ? "inline" : "hidden"
      } absolute flex gap-2 right-[400px] top-[70px] `}
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
