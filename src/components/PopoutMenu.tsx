import { buttonVariants } from "./ui/button";

interface Props {
  status: boolean;
}

export const PopoutMenu = ({ status }: Props) => {
  const handleLinuxDownload = () => {
    const fileUrl = ".../public/DownloadFiles/Linux/init";
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = ""; // This attribute makes the browser download the file instead of navigating to it

    // Append the anchor to the document body
    document.body.appendChild(a);
    a.click(); // Programmatically click the anchor to trigger the download

    // Remove the anchor from the document
    document.body.removeChild(a);
  };

  return (
    <div
      className={`${
        status ? "inline" : "hidden"
      } absolute flex gap-2 left-[245px] bottom-[300px] `}
    >
      <div
        onClick={handleLinuxDownload}
        className={`border cursor-pointer ${buttonVariants({
          variant: "secondary",
        })}`}
      >
        For Linux
      </div>
      <div
        className={`border cursor-pointer ${buttonVariants({
          variant: "secondary",
        })}`}
      >
        For Windows
      </div>
    </div>
  );
};
