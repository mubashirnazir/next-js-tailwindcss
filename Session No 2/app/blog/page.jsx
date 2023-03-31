import Card from "../Components/card";

export default function Blog() {
  return (
    <>
      <h2 className="pt-10 text-center text-4xl font-bold">
        Latest Blog Posts
      </h2>
      <div className="mx-auto mt-10 flex w-[90%] flex-wrap items-center gap-3 md:flex-nowrap">
        <Card
          imgPath="/python.jpg"
          imgAlt="python"
          imgWidth="500"
          imgHieght="500"
          postTitle="Learn python with PWD"
          postLink="/"
          className="w-full md:basis-1/3"
        />
        <Card
          imgPath="/javascript.jpg"
          imgAlt="javascript"
          imgWidth="500"
          imgHieght="500"
          postTitle="Learn python with PWD"
          postLink="/"
          className="w-full md:basis-1/3"
        />
        <Card
          imgPath="/fullstack-web-dev.jpg"
          imgAlt="full stack web dev"
          imgWidth="500"
          imgHieght="500"
          postTitle="Learn python with PWD"
          postLink="/"
          className="w-full md:basis-1/3"
        />
      </div>
    </>
  );
}
