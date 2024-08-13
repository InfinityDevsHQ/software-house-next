import { File, Globe, Phone } from "lucide-react";
import ListSvg from "../svgs/list-svg";

export default function Overview() {
  return (
    <section className="w-full px-4 md:px-16 flex flex-col xl:flex-row gap-2.5 overview-shadows xl:max-w-[1180px] mx-auto">
      <div className="pt-7 flex flex-col lg:flex-row lg:self-end gap-2.5 sm:gap-4 bg-accent-light shadows md:p-5 lg:w-[821px] mx-auto">
        <div className="flex items-center gap-2.5">
          <File width={40} height={40} />
          <span>Business Planning, Strategy & Execution</span>
        </div>
        <div className="flex items-center gap-2.5 pl-1">
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
      <div className="py-4 md:p-4 xl:px-5 xl:py-2.5 call-gradient flex-1 flex md:flex-col gap-2.5 text-center items-center justify-around md:justify-center text-accent-light h-[150px] xl:max-w-max">
        <div className="flex items-center gap-2.5">
          <Phone className="text-secondary-dark h-7 w-7 xl:h-10 xl:w-10" />
          <div className="flex flex-col gap-2.5">
            <span className="text-sm font-bold">Need Help? Call Us</span>
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
