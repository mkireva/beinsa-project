import Image from "next/image";
import ScrollText from "./ScrollText";

export const metadata = {
  title: "Vorträge",
};

export default function Lectures() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-full rounded-lg items-center justify-center">
        <div className="w-auto h-96 relative ">
          <Image
            loading={"lazy"}
            fill
            src={"/images/salona.jpg"}
            alt={"Beisa Duno"}
            className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-10">Vorträge</h1>
      <div>
        <ScrollText />
      </div>
    </div>
  );
}
