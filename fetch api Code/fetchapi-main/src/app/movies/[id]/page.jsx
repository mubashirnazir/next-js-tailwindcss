import Image from "next/image";
import Link from "next/link";
import React from "react";
async function getMovies(id) {
  const movies = await fetch(
    `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
    {
      //method name is get to collect moviesi
      method: "GET",
      //information regarding user of api
      headers: {
        "X-RapidAPI-Key": "9a64d48727msh74d5da2d4757ca4p132924jsnc6d46f99e4db",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    }
  );
  //check error
  if (!movies.ok) {
    throw new Error("failed to fetch data");
  }
  //return object
  return movies.json();
}

const Movie = async ({ params }) => {
  const { id } = params;
  const getData = await getMovies(id);
  console.log(getData);
  console.log(getData.results.primaryImage?.caption);
  return (
    <div>
      <Image
        src={getData.results.primaryImage?.url}
        width={500}
        height={500}
        alt={getData.results.primaryImage?.caption.plainText}
      />
      <h2>{getData.results.id}</h2>
    </div>
  );
};

export default Movie;
