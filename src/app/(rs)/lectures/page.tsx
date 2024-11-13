import Image from "next/image";
import ScrollText from "./ScrollText";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Vorträge",
};

export default function Lectures() {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-10 px-4 md:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full h-[250px] md:h-[400px] relative">
          <div
            className={cn(
              "group relative overflow-hidden rounded-lg h-full",
              "shadow-lg transition-all duration-500",
              "md:col-start-2"
            )}
          >
            <div className="absolute inset-0">
              <Image
                priority
                fill
                src={"/images/salona.jpg"}
                alt={"Beisa Duno"}
                className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl md:text-4xl font-bold mt-8 md:mt-14 mb-6 md:mb-8">Vorträge</h1>

      <div className="w-full max-w-4xl mx-auto">
        <ScrollText />
      </div>
    </div>
  );
}
