import Image from "next/image";
import { Inter } from "next/font/google";
import images from "./data/pictures.json";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {images.pictures.map((img, index) => {
          return (
            <div key={index}>
              <Image
                src={img.pictureURL}
                width={img.width}
                height={img.height}
                alt={img.alt}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
