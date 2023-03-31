import Card from "../Components/card";

export default function Blog() {
  // array of posts object
  const blog = [
    {
      postId: 1,
      imgPath: "/javascript.jpg",
      postTitle: "Learn JavaScript from scratch",
      postExcerpt: "Javascript is most popular frontend language.",
      author: "mubashir Ali",
    },
    {
      postId: 1,
      imgPath: "/python.jpg",
      postTitle: "Learn Python from scratch",
      postExcerpt: "Python is most popular full stack web language.",
      author: "Kehkashan",
    },
    {
      postId: 1,
      imgPath: "/html.jpg",
      postTitle: "Learn NextJS from scratch",
      postExcerpt:
        "NextJS is trending JS Framework for developming high notch web apps",
      author: "Tahir Khan",
    },
    {
      postId: 1,
      imgPath: "/fullstack-web-dev.jpg",
      postTitle: "Learn NextJS from scratch",
      postExcerpt:
        "NextJS is trending JS Framework for developming high notch web apps",
      author: "Tahir Khan",
    },
    {
      postId: 1,
      imgPath: "/fullstack-web-dev.jpg",
      postTitle: "Learn NextJS from scratch",
      postExcerpt:
        "NextJS is trending JS Framework for developming high notch web apps",
      author: "Tahir Khan",
    },
    {
      postId: 1,
      imgPath: "/fullstack-web-dev.jpg",
      postTitle: "Learn NextJS from scratch",
      postExcerpt:
        "NextJS is trending JS Framework for developming high notch web apps",
      author: "Tahir Khan",
    },
    {
      postId: 1,
      imgPath: "/fullstack-web-dev.jpg",
      postTitle: "Learn NextJS from scratch",
      postExcerpt:
        "NextJS is trending JS Framework for developming high notch web apps",
      author: "Tahir Khan",
    },
  ];
  return (
    <>
      <h2 className="pt-10 text-center text-4xl font-bold">
        Latest Blog Posts
      </h2>
      <div className="mx-auto mt-10 grid w-[90%] gap-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/*  higher order functions: map reduce filter || loops: foreach for of while do while */}
        {/* call back functions automatically calls when the main function run */}
        {blog.map((post, key) => {
          return (
            // instance of an object / component
            <Card
              key={key}
              imgPath={post.imgPath}
              imgAlt={post.postTitle}
              imgWidth="1000"
              imgHieght="1000"
              postTitle={post.postTitle}
              postExcerpt={post.postExcerpt}
              author={post.author}
              postLink="/"
            />
          );
        })}
      </div>
    </>
  );
}
