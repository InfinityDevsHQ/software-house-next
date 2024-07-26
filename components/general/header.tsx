"use client";
import { useState, useEffect } from "react";
import { ChevronDown, MenuIcon } from "lucide-react";
import WhiteLogoSvg from "../svgs/white-logo-svg";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY);
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 flex items-center justify-center max-w-screen-2xl w-full fixed top-0 ${
        scroll ? "!bg-primary/80" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <nav
        className={`max-w-5xl w-full mx-auto flex items-center justify-between py-5 px-3 lg:px-0`}
      >
        <Link href={"/"}>
          <WhiteLogoSvg />
        </Link>
        <ol className="hidden lg:flex items-center gap-2.5">
          <li className="flex items-center">
            <Button
              variant={"outline"}
              className="bg-transparent p-2.5 text-accent-light border-none hover:bg-transparent hover:text-accent-light gap-1.5 text-xs font-medium"
            >
              <span>Home</span>
              <ChevronDown height={12} width={12} />
            </Button>
          </li>
          <li className="flex items-center">
            <Button
              variant={"outline"}
              className="bg-transparent p-2.5 text-accent-light border-none hover:bg-transparent hover:text-accent-light gap-1.5 text-xs font-medium"
            >
              <span>Home</span>
              <ChevronDown height={12} width={12} />
            </Button>
          </li>
          <li className="flex items-center">
            <Button className="bg-secondary rounded-none p-2.5 !text-accent-dark border-none hover:bg-transparent hover:!text-accent-light gap-1.5 text-xx">
              <span>Home</span>
              <ChevronDown height={12} width={12} />
            </Button>
          </li>
        </ol>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <MenuIcon className="text-accent-light" />
          </SheetTrigger>
          <SheetContent>
            <ol className="flex flex-col items-center gap-2.5 py-12">
              <li className="flex items-center">
                <Button
                  variant={"outline"}
                  className="bg-transparent p-2.5 text-accent-foreground border-none hover:bg-transparent hover:text-accent-foreground gap-1.5 text-xs font-medium"
                >
                  <span>Home</span>
                  <ChevronDown height={12} width={12} />
                </Button>
              </li>
              <li className="flex items-center">
                <Button
                  variant={"outline"}
                  className="bg-transparent p-2.5 text-accent-foreground border-none hover:bg-transparent hover:text-accent-foreground gap-1.5 text-xs font-medium"
                >
                  <span>Home</span>
                  <ChevronDown height={12} width={12} />
                </Button>
              </li>
              <li className="flex items-center">
                <Button className="bg-secondary rounded-none p-2.5 !text-accent-dark border-none hover:bg-transparent hover:!text-accent-light gap-1.5 text-xx">
                  <span>Home</span>
                  <ChevronDown height={12} width={12} />
                </Button>
              </li>
            </ol>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
