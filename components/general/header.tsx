import { ChevronDown } from "lucide-react";
import WhiteLogoSvg from "../svgs/white-logo-svg";
import Link from "next/link";
import { Button } from "../ui/button";
export default function Header() {
  return (
    <header className=" bg-transparent z-50 flex items-center justify-center">
      <nav className="max-w-5xl w-full mx-auto flex items-center  justify-between py-5 fixed top-0">
        <Link href={"/"}>
          <WhiteLogoSvg />
        </Link>
        <ol className="flex items-center gap-2.5">
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
      </nav>
    </header>
  );
}
