import Image from "next/image";
import Link from "next/link";
import React from "react";
async function getMovies() {
  const movies = await fetch("https://moviesdatabase.p.rapidapi.com/titles", {
    //method name is get to collect movies
    cache: "force-cache", //static site generation
    // next: { revalidate: 10 }, //ISR incremental static regeneration
    // cache: "no-store", // server side rendering
    method: "GET",
    //information regarding user of api
    headers: {
      "X-RapidAPI-Key": "9a64d48727msh74d5da2d4757ca4p132924jsnc6d46f99e4db",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  });
  //check error
  if (!movies.ok) {
    throw new Error("failed to fetch data");
  }
  //return object
  return movies.json();
}

const Movies = async () => {
  const Data = await getMovies();
  console.log(Data.results);
  return (
    <div className="w-[80%] mx-auto my-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Data.results.map((movie, index) => {
          return (
            <div key={index}>
              <Image
                src={movie.primaryImage?.url}
                width={500}
                height={500}
                alt={movie.titleText.text}
                className="mb-5"
              />
              <div>
                <Link href={`/movies/${movie.id}`}>
                  <h2 className="font-semibold text-xl">
                    <strong>Movie Title:</strong>
                    {movie.titleText.text}
                  </h2>
                </Link>
                <small>
                  <strong>Movie Release Year:</strong>
                  {movie.releaseYear.year}
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
