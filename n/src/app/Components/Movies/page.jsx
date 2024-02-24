'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiSolidError } from "react-icons/bi";

const Movie = () => {
  const [serverUrl, setServerUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=96beea7721b4b2cb034cf8aa66612ec6"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setServerUrl(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="lds-hourglass "></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <div className="h-48 w-full object-cover md:h-full md:w-48 bg-gray-300 flex items-center justify-center">
              <BiSolidError className="text-red-500 text-6xl" />
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Internet Error Occurs
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            ></a>
            <p className="mt-2 text-slate-500">
              We regret to inform you of a technical issue affecting our
              services. Our team is actively addressing the error to restore
              normal functionality promptly. We apologize for any inconvenience
              and appreciate your patience as we work to resolve this matter
              swiftly
            </p>
          </div>
        </div>{" "}
      </div>
    );
  }

  return (
    <div className="my-12 px-4">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
        MOVIES AND SERIES POSTERS AND DETAILS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serverUrl.map((h) => (
          <div className="series underline space-y-5" key={h.id}>
            <h1 className="text-xl font-bold">
              {h.title} (Release Date : {h.release_date})
            </h1>
            <img
              loading="lazy"
              className="rounded-lg mx-auto"
              src={`https://image.tmdb.org/t/p/w500${h.poster_path}`}
              alt="IMAGES OF POSTERS OF MOVIES AND SERIES"
            />
            <div className="text-left">
              <b className="block text-3xl font-serif">ABOUT :</b>
              <hr className="my-2" />
              <p>{h.overview}</p>
              <Link href={`/Components/Moviepath/${h.id}`}>
                <button className="p-3 border-4 bg-black text-white rounded-3xl my-4">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
