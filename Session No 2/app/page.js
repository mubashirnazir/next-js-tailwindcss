import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const DMSans = DM_Sans({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className={DMSans.className}>
        {/* Hero Section */}
        <div className=" bg-white py-10">
          <div className="mx-auto flex w-[90%] items-center justify-between">
            <div className="flex flex-wrap items-center md:flex-nowrap">
              <div className="mb-8  w-full text-center md:mb-0 md:basis-1/2 md:text-left">
                <h1 className="mb-8 text-xl font-bold uppercase md:text-4xl">
                  grow your web development skills
                </h1>
                <p className="mb-8 text-gray-700">
                  Learn how to develop effective and captivating websites using
                  the latest web development tools and practices. Gain
                  experience developing with HTML, JavaScript, CSS, Python, and
                  more. Our expert authors guide you through development and
                  testing via easy-to-follow web development courses.
                </p>
                <Link
                  href="/courses"
                  className="inline-block rounded-xl bg-green-400 px-3 py-2 text-gray-700 duration-1000 hover:bg-green-300 hover:text-gray-600"
                >
                  Explore Our Courses
                </Link>
              </div>
              <div className="flex w-full items-center justify-center md:basis-1/2">
                <Image
                  src="/monitor-illustration.png"
                  alt="monitor"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
