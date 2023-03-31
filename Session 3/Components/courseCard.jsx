import Image from "next/image";

export default function CourseCard() {
  return (
    <>
      <div className="mx-auto my-10 grid w-[90%] md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white shadow-lg shadow-green-200 hover:scale-125">
          {/* Image box */}
          <div className="mb-5">
            <Image
              src="/javascript.jpg"
              className="rounded-t-lg"
              alt="js"
              width={1000}
              height={1000}
            />
          </div>
          {/* text box */}
          <div className="p-4">
            <h2>this is course card.</h2>
          </div>
        </div>
      </div>
    </>
  );
}
