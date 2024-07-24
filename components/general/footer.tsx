import { Contact, Mail, Phone } from "lucide-react";
import LogoSvg from "../svgs/logo-svg";
import { CompanyLinks, QuickLinks } from "@/contants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-12 bg-accent text-accent-foreground text-xs">
      <div className="grid grid-cols-4 items-start justify-between gap-12">
        <div className="flex flex-col gap-5">
          <LogoSvg />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            maiores minus voluptatibus soluta minima. Eius asperiores debitis
            nihil ex error vero laborum illo, exercitationem id illum cupiditate
            dicta quos esse!
          </p>
          <div className="p-5 flex items-center gap-2.5">
            <Phone height={30} width={30} className="text-primary" />
            <div className="flex flex-col gap-2.5 font-bold">
              <h6>Need Help? Call Us</h6>
              <p className="text-base font-bold">+92 123 4567 456</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h6 className="text-base font-bold">Quick Links</h6>
          <ol className="flex flex-col gap-2.5">
            {QuickLinks.map((link) => (
              <li key={link.id} className="text-xs">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-2.5">
          <h6 className="text-base font-bold">Quick Links</h6>
          <ol className="flex flex-col gap-2.5">
            {CompanyLinks.map((link) => (
              <li key={link.id} className="text-xs">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-2.5">
          <h6 className="text-base font-bold">Get In Touch</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            maiores minus voluptatibus soluta minima. Eius asperiores debitis
            nihil ex error vero laborum illo, exercitationem id illum cupiditate
            dicta quos esse!
          </p>
          <div className="flex flex-col gap-1.5">
            <Link href={"#"} className="flex items-center gap-1.5">
              <Mail width={12} height={12} className="text-black" />
              <span>support@infinitydevs.com</span>
            </Link>
            <Link href={"#"} className="flex items-center gap-1.5">
              <Contact width={12} height={12} className="text-black" />
              <span>+92 123 4567 123</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
