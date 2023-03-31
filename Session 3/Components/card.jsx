import Image from "next/image";
import Link from "next/link";

export default function Card({
  imgPath,
  imgAlt,
  imgWidth,
  imgHieght,
  postTitle,
  postLink,
  postExcerpt,
  author,
}) {
  return (
    <>
      <div className="rounded-lg bg-gray-100 duration-500 hover:cursor-pointer hover:shadow-lg hover:shadow-orange-400">
        <div
          className="overflow-hidden rounded-t-lg
        "
        >
          <Image
            className="rounded-t-lg duration-1000 hover:scale-125"
            src={imgPath}
            alt={imgAlt}
            width={imgWidth}
            height={imgHieght}
          />
        </div>
        <div className="p-4">
          <Link
            className="mb-5 inline-block text-xl font-bold duration-1000 hover:text-green-600"
            href={postLink}
          >
            {postTitle}
          </Link>
          <p className="mb-5">{postExcerpt}</p>
          <hr className="mb-5" />
          <small className="inline-block rounded bg-white p-3 shadow-sm duration-700 hover:bg-gray-500 hover:text-white">{`# ${author}`}</small>
        </div>
      </div>
    </>
  );
}
