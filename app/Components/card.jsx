import Image from "next/image";
import Link from "next/link";

export default function Card({
  imgPath,
  imgAlt,
  imgWidth,
  imgHieght,
  postTitle,
  postLink,
}) {
  return (
    <>
      <div className="bg-white">
        <Image src={imgPath} alt={imgAlt} width={imgWidth} height={imgHieght} />
        <div className="p-4">
          <Link href={postLink}>{postTitle}</Link>
        </div>
      </div>
    </>
  );
}
