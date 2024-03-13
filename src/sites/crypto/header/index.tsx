import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Paths } from "@/lib/const/navigation";
import Link from "next/link";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { LinkText, PrimaryButton } from "../theme";

function NavLinks() {
  return (
    <>
      {[
        {
          text: "Home",
          url: "#home",
        },
        {
          text: "About",
          url: `#about`,
        },
        {
          text: "Sales",
          url: "#sales",
        },
        {
          text: "Roadmap",
          url: "#roadmap",
        },
        {
          text: "Contact us",
          url: "#contact",
        },
      ].map((item, i) => (
        <Link href={item.url} key={i}>
          <LinkText className="border-b-white/20 py-4 uppercase hover:border-b-purple-500 max-md:border-b-[1px]">
            {item.text}
          </LinkText>
        </Link>
      ))}
    </>
  );
}

export default function MainHeader() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-gray-900 text-white shadow-lg">
      <div
        className={`section-box-w flex items-center justify-between gap-20 py-5 max-md:gap-5 max-md:gap-y-0 max-md:py-5`}
      >
        <div className="">
          <Link
            href={Paths.home.path}
            className="text-nowrap text-[30px] font-light uppercase max-md:self-start max-md:text-2xl"
          >
            AIMA
          </Link>
        </div>

        <div className="flex w-full justify-end">
          {/* mobile nav */}
          <Drawer direction="left">
            <DrawerTrigger className="min-[850px]:hidden">
              <RiMenu2Line />
            </DrawerTrigger>
            <DrawerContent className="h-full max-w-lg rounded-none border-none bg-gray-800 px-6 py-6 text-white [&>.bg-muted]:hidden">
              <DrawerClose className="absolute right-6 top-6 ">
                <Button
                  variant="outline"
                  className="size-10 p-0 text-2xl  text-black"
                >
                  <RiCloseLine />
                </Button>
              </DrawerClose>
              <DrawerHeader className="">
                <span className="grid gap-10">
                  <Link
                    href={Paths.home.path}
                    className=" text-nowrap text-[30px] font-light uppercase max-md:self-start max-md:text-2xl"
                  >
                    Property
                  </Link>
                  <div className="my-auto grid">
                    <NavLinks />
                  </div>
                  <Link href={Paths.cart.path} className="relative">
                    <PrimaryButton>Get Started</PrimaryButton>
                  </Link>
                </span>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>

          <div className="flex w-full flex-wrap items-center justify-between gap-5 pr-3 max-[850px]:hidden">
            {/* desktop nav */}
            <span className="my-auto flex gap-10 self-start justify-self-start max-md:max-w-full max-md:flex-wrap">
              <NavLinks />
            </span>
            <Link href={Paths.cart.path} className="relative">
              <PrimaryButton>Get Started</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}