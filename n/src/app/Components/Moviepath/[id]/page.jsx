import React from "react";

const Page = async ({ params }) => {
  const id = params.id;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=96beea7721b4b2cb034cf8aa66612ec6&language=en-US`
    );
    const result = await response.json();
    const movie = result;

    return (
      <div className="mx-auto p-4 flex justify-center">
        <div className="text-center">
          <div className="series space-y-5" key={movie.id}>
            <h1 className="underline">
              {movie.title} ({movie.release_date})
            </h1>
            <img
              loading="lazy"
              className="rounded-lg mx-auto imagesppp"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="IMAGES OF POSTERS OF MOVIES AND SERIES"
            />
            <div className="text-left">
              <b className="block text-center text-7xl  font-serif">ABOUT </b>
              <hr className="my-2 " />
              <p className=" text-center">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return <div>Error loading movie details</div>;
  }
};

export default Page;
