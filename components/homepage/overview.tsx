import { Contact, File, Globe, Phone } from "lucide-react";
import ListSvg from "../svgs/list-svg";

export default function Overview() {
  return (
    <section className="w-full px-16 flex gap-2.5 overview-shadows">
      <div className="pt-7 flex flex-col lg:flex-row self-end gap-2.5 bg-accent-light shadows p-5 w-[821px]">
        <div className="flex items-center gap-2.5">
          <File width={40} height={40} />
          <span>Business Planning, Strategy & Execution</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span>
            <ListSvg variant="black" />
          </span>
          <span>Financial Projections and Analysis</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Globe height={40} width={40} />
          <span>International Business Opportunities</span>
        </div>
      </div>
      <div className="p-4 xl:p-7 call-gradient flex-1 flex flex-col gap-2.5 text-center items-center justify-center text-accent-light">
        <div className="flex items-center gap-2.5">
          <Phone className="text-secondary-dark h-7 w-7 x:h-10 xl:w-10" />
          <div className="flex flex-col gap-2.5">
            <span>Need Help? Call Us</span>
            <span>+92 123 4567 456</span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 text-xs font-bold">
          <span>8 AM - 5 PM</span>
          <span>Monday - Saturday</span>
        </div>
      </div>
    </section>
  );
}
