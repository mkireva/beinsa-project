import { cn } from "@/lib/utils";
import Image from "next/image";
import ScrollText from "./ScrollText";

export const metadata = {
  title: "Vorträge",
};

export default function Lectures() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <div className="w-full h-200 rounded-lg items-center justify-center">
        <div
          className={cn(
            "group relative overflow-hidden rounded-lg h-[500px]",
            "shadow-lg transition-all duration-500"
          )}
        >
          <div className="absolute inset-0">
            <Image
              loading={"lazy"}
              fill
              sizes="auto"
              src={"/images/salona.jpg"}
              alt={"Beisa Duno"}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 md:w-full md:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-10">Vorträge</h1>

      <div>
        <ScrollText />
      </div>
    </div>
  );
}
