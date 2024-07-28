import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { IoTerminalOutline } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { NavbarPopoutMenu } from "./NavbarPopoutMenu";
// interface RouteProps {
//   href: string;
//   label: string;
// }

// const routeList: RouteProps[] = [
//   {
//     href: "#features",
//     label: "Features",
//   },
//   {
//     href: "#testimonials",
//     label: "Testimonials",
//   },
//   {
//     href: "#pricing",
//     label: "Pricing",
//   },
//   {
//     href: "#faq",
//     label: "FAQ",
//   },
// ];

export const Navbar = () => {
  const [DownloadOptionStatus, setDownloadOptionStatus] = useState(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <IoTerminalOutline className="mt-1.5 mr-1" />
              init
            </a>
          </NavigationMenuItem>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              onClick={() => setDownloadOptionStatus(!DownloadOptionStatus)}
              target="_blank"
              className={`border cursor-pointer ${buttonVariants({
                variant: "secondary",
              })}`}
            >
              <RxDownload className="mr-2 w-5 h-5" />
              Download
            </a>

            <a
              rel="noreferrer noopener"
              href="https://github.com/capGoblin/init"
              target="_blank"
              className={`border cursor-pointer ${buttonVariants({
                variant: "secondary",
              })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <NavbarPopoutMenu status={DownloadOptionStatus} />
    </header>
  );
};
