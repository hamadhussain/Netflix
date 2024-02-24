"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

const Page = () => {
  let [client, setClient] = useState(true);
  const [form, setForm] = useState("");

  const showToastMessageSucess = () => {
    toast.success(
      <div className=" flex justify-center gap-5">Send Successfully !</div>,
      {
        position: "top-center",
      }
    );
  };
  const showToastMessageError = () => {
    toast.error(
      <div className=" flex justify-center gap-5">Send Failed !</div>,
      {
        position: "top-center",
      }
    );
  };
  const check = () => {
    if (form == "") {
      setClient(false);
    }
  };
  return (
    <div>
      <footer className=" my-10">
        <div className="max-w-6xl mx-auto p-4 flex flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <div className="">
              <div className="font-bold text-2xl mb-4 font-serif underline">About us</div>
              <p>
                CodingLab is a channel where you can learn HTML, CSS, and also
                JavaScript along with creative CSS Animations and Effects.
              </p>
            </div>
            <div className="mt-4">
              <div className="font-bold text-2xl mb-4 font-serif underline">
                Contact us
              </div>
              <div className="phone">
                <a href="#" className="">
                  <i className="fas fa-phone-volume"></i>+007 9089 6767
                </a>
              </div>
              <div className="email">
                <a href="#" className="">
                  <i className="fas fa-envelope"></i>abc@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:pl-8 mt-8 md:mt-0">
            <div className="">
              <div className="font-bold text-2xl mb-4 font-serif underline">
                Our Services
              </div>
              <div>
                <a href="#" className="">
                  Web Design, Development
                </a>
              </div>
              <div>
                <a href="#" className="">
                  Web UX Design, Research
                </a>
              </div>
              <div>
                <a href="#" className="">
                  Web User Interface Design
                </a>
              </div>
              <div>
                <a href="#" className="">
                  Theme Development, Design
                </a>
              </div>
              <div>
                <a href="#" className="">
                  Mobile Application Design
                </a>
              </div>
              <div>
                <a href="#" className="">
                  Wireframing & Prototyping
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:pl-8 mt-8 md:mt-0">
            <div className="">
              <div className="font-bold text-2xl mb-4 font-serif underline">
                Subscribe us
              </div>
              <form action="#" className="mb-4">
                <input
                  type="text"
                  placeholder="Enter email address"
                  required="true"
                  value={form}
                  onChange={(e) => {
                    setForm(e.target.value);
                  }}
                  className="h-12 w-full font-serif  p-2 outline-none border-2 text-black border-gray-800 rounded"
                />
                <Link href="/">
                  <button
                    onClick={() => (
                      client
                        ? showToastMessageError()
                        : showToastMessageSucess(),
                      check(),
                      setForm(""),
                      setClient(true)
                    )}
                    className="h-10 w-full bg-red-500  text-lg mt-2 rounded cursor-pointer hover:bg-transparent hover:text-red-500 border-2 border-red-500 transition duration-300"
                  >
                    Send
                  </button>
                </Link>
              </form>
              <div className="flex space-x-2">
                <a href="#" className="media-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="media-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="media-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="media-icon">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="media-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" p-4 text-right">
        <p>
          Copyright © 2024{" "}
          <a href="#" className="text-red-500">
            Hammad Hussain
          </a>
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Page;
