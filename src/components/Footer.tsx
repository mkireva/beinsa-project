import Link from "next/link";

export default function Footer() {

  return (
    <>
      <footer className="w-full py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center"></div>
          <Link
            href="https://www.kireva.de/"
            className="text-sm hover:text-gray-900 dark:hover:text-gray-400 light:hover:text-gray-400"
            prefetch={false}
            target="_blank"
          >
            &copy; beinsa.de {new Date().getFullYear()} 
          </Link>
          <div className="flex items-center"></div>
        </div>
      </footer>
    </>
  );
}
