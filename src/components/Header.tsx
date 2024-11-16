"use client";
import Link from "next/link";
import { BookOpen, ChevronRightIcon, MenuIcon, UsersRound } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavButton } from "./NavButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => setMenuOpen(false);
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={BookOpen} />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          ></Link>
        </div>
        <div className="flex items-center">
          <div className="flex  items-center">
            <Link
              href="/bio"
              className="flex justify-center items-center gap-2 ml-0 whitespace-nowrap rounded-md text-sm  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-2 py-1"
              title="bio"
            >
              <h1 className="hidden sm:block text-sm  m-0 mt-1">Biographie</h1>
            </Link>
            <Link
              href="/lectures"
              className="flex justify-center items-center gap-2 ml-0 whitespace-nowrap rounded-md text-sm  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-2 py-1"
              title="lectures"
            >
              <h1 className="hidden sm:block text-sm  m-0 mt-1">Vorträge</h1>
            </Link>
            <Link
              href="/music"
              className="flex justify-center items-center gap-2 ml-0 whitespace-nowrap rounded-md text-sm  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-2 py-1"
              title="Downloads"
            >
              <h1 className="hidden sm:block text-sm  m-0 mt-1">Musik</h1>
            </Link>
            <Link
              href="/paneurhythmie"
              className="flex justify-center items-center gap-2 ml-0 whitespace-nowrap rounded-md text-sm  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-2 py-1"
              title="lectures"
            >
              <h1 className="hidden sm:block text-sm  m-0 mt-1">
                Paneurhythmie
              </h1>
            </Link>
            <Link
              href="/downloads"
              className="flex justify-center items-center gap-2 ml-0 whitespace-nowrap rounded-md text-sm  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-2 py-1"
              title="Downloads"
            >
              <h1 className="hidden sm:block text-sm  m-0 mt-1">Downloads</h1>
            </Link>
            <Link
              href="/blog"
              className="flex justify-center items-center gap-2 ml-0 whitespace-nowrap rounded-md text-sm  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-2 py-1"
              title="blog"
            >
              <h1 className="hidden sm:block text-sm  m-0 mt-1">Blog</h1>
            </Link>
          </div>
          <NavButton href="/users" label="users" icon={UsersRound} />
          <ThemeToggle />
          <div className=" items-center gap-2 block sm:hidden ">
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={handleMenuToggle}
                >
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onSelect={handleMenuClose}>
                  <Link
                    href="/"
                    className="flex w-full items-center justify-between py-2 px-4 text-sm  font-medium hover:bg-muted"
                    prefetch={false}
                    onClick={handleMenuClose}
                  >
                    Startseite
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleMenuClose}>
                  <Link
                    href="/bio"
                    className="flex w-full items-center justify-between py-2 px-4 text-sm  font-medium hover:bg-muted"
                    prefetch={false}
                    onClick={handleMenuClose}
                  >
                    Biographie
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleMenuClose}>
                  <Link
                    href="/lectures"
                    className="flex w-full items-center justify-between py-2 px-4 text-sm  font-medium hover:bg-muted"
                    prefetch={false}
                    onClick={handleMenuClose}
                  >
                    Vorträge
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleMenuClose}>
                  <Link
                    href="/music"
                    className="flex w-full items-center justify-between py-2 px-4 text-sm  font-medium hover:bg-muted"
                    prefetch={false}
                    onClick={handleMenuClose}
                  >
                    Musik
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleMenuClose}>
                  <Link
                    href="/downloads"
                    className="flex w-full items-center justify-between py-2 px-4 text-sm  font-medium hover:bg-muted"
                    prefetch={false}
                    onClick={handleMenuClose}
                  >
                    Downloads
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleMenuClose}>
                  <Link
                    href="/blog"
                    className="flex w-full items-center justify-between py-2 px-4 text-sm  font-medium hover:bg-muted"
                    prefetch={false}
                    onClick={handleMenuClose}
                  >
                    Blog
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
