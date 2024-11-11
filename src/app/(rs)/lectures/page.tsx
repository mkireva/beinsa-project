import Image from "next/image";
import ScrollText from "./ScrollText";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Vorträge",
};

export default function Lectures() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-full rounded-lg items-center justify-center">
        <div className="w-auto h-96 relative ">
          <div
            className={cn(
              "group relative overflow-hidden rounded-lg h-[400px]",
              "shadow-lg transition-all duration-500",
              "md:col-start-2"
            )}
          >
            <div className="absolute inset-0">
              <Image
                loading={"lazy"}
                fill
                src={"/images/salona.jpg"}
                alt={"Beisa Duno"}
                className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
              />{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-14 mb-8">Vorträge</h1>

      <div>
        <ScrollText />
      </div>
    </div>
  );
}
