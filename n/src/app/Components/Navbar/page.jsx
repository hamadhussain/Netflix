"use client";
import React from "react";
import Link from "next/link";
import "../../globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoHomeOutline } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";

const Page = () => {
  const showToastMessageHome = () => {
    toast.success(
      <div className=" flex justify-center gap-5">
        Welcome Home <IoHomeOutline />{" "}
      </div>,
      {
        position: "top-center",
      }
    );
  };
  const showToastMessageMovie = () => {
    toast.success(
      <div className=" flex justify-center gap-5">
        Watch Movie <BiSolidCameraMovie />
      </div>,
      {
        position: "top-center",
      }
    );
  };
  return (
    <div className="nav my-4 flex flex-col md:flex-row items-center  justify-center bg-none">
    <ul className="md:flex bb justify-center bg-none space-x-20 md:space-x-12 md:ml-4">
      <Link onClick={showToastMessageHome} className="s" href="/">
        <li className=" hover:text-sky-400 hover:text-2xl text-xl font-thin text-teal-300 ">Home</li>
      </Link>
      <Link
        onClick={showToastMessageMovie}
        className="sp"
        href="/Components/Movies"
      >
        <li className="sp hover:text-sky-400 hover:text-2xl text-xl font-thin text-teal-300  ">Watch Movies</li>
      </Link>
    </ul>
    <ToastContainer />
  </div>
  );
};

export default Page;
