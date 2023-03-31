"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-green-500">
        <div className="mx-auto flex w-[90%] items-center justify-between">
          {/* logo */}
          <div>
            <Image
              src="/pwd-logo.png"
              alt="pak web dev logo"
              width={150}
              height={150}
            />
          </div>
          {/* menu navigation */}
          <nav className="space-x-3">
            <Link className="text-white hover:text-green-300" href="/">
              Home
            </Link>
            <Link className="text-white hover:text-green-300" href="/blog">
              Blog
            </Link>
            <Link className="text-white hover:text-green-300" href="/courses">
              Courses
            </Link>
            <Link className="text-white hover:text-green-300" href="/resources">
              Resources
            </Link>
            <Link className="text-white hover:text-green-300" href="/about">
              About
            </Link>
            <Link className="text-white hover:text-green-300" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
