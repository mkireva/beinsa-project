import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 items-center rounded-xl bg-sky-700/80 w-2/4 sm:max-w-1/3 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Beinsa Projekt</h1>
          <p className="text-md">Vorträge und mehr von Beinsa Duno</p>
          <Link href="./home" >
          <Button className="text-xl w-40 font-bold text-white bg-sky-800 items-center hover:bg-sky-950" >Zum Projekt</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
