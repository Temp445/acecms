"use client";
import { FC, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import logo from "../assets/AceLogo.png";
const Navbar1: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="hidden md:flex items-center justify-between md:pt-3 pb-2  px-4 md:px-0  relative">
        <div className="md:flex items-center hidden ">
          <Link href="https://acesoft.in/" className="text-2xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#2b2d42] flex gap-1">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-12 h-12 md:w-10 md:h-10  "
            />
            <span className="mt-2 text-xl">ACE Software Solutions Pvt. Ltd</span>
          </Link>
        </div>

        <div className="hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-2">
       <div className="group">
           <Link
            href="https://crm.acesoftcloud.in/"
            className="flex items-center text-[#2b2d42]  border border-white  text-base font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out   hover:scale-105"
          >
            Project
          </Link>
            <div className="hidden group-hover:block absolute top-14 right-20  w-52 bg-white border  text-black text-xs p-2 rounded z-[52]">
          Simplify Projects. Empower Teams.
        </div>
       </div>

     <div className="group">
           <Link
            href="https://crm.acesoftcloud.in/"
            className="flex items-center text-[#2b2d42]  border border-white  text-base font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out   hover:scale-105"
          >
            CMS
          </Link>
            <div className="hidden group-hover:block absolute top-14 right-5  w-52 bg-white border shadow-2xl text-black text-xs p-2 rounded z-[52]">
          Smart, simple, and seamless — calibration made easy 
        </div>
       </div>

        <div className="group">
           <Link
            href="https://crm.acesoftcloud.in/"
            className="flex items-center text-[#2b2d42]  border border-white  text-base font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out   hover:scale-105"
          >
            PPAP
          </Link>
            <div className="hidden group-hover:block absolute top-14 right-2  w-52 bg-white border shadow-2xl text-black text-xs p-2 rounded z-[52]">
          Ensuring Quality, Every Part, Every Time.
        </div>
       </div>

          <Link
            href="https://acesoft.in/products"
            className="flex items-center text-[#2b2d42]  border border-white   text-base font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out  hover:scale-105"
          >
            All Product
          </Link>
        </div>

        {/* {isMenuOpen && (
          <div className="fixed bottom-14 md:top-full left-0.5 right-10 bg-white shadow-lg rounded py-4 px-6 z-50 md:hidden">
            <div className="flex flex-col space-y-4">
               <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-gray-800 hover:text-orange-600 text-base font-semibold"
              >
                <House className="w-4 h-4 mr-2" />
                Home
              </Link>
              <Link
                href="#features"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-gray-800 hover:text-orange-600 text-base font-semibold"
              >
                <Star className="w-4 h-4 mr-2" />
                Feature
              </Link>

              <Link
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-gray-800 hover:text-orange-600 text-base font-semibold"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Pricing
              </Link>

              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-gray-800 hover:text-orange-600 text-base font-semibold"
              >
                <FileText className="w-4 h-4 mr-2" />
                Contact Us
              </Link>

              <Link
                href="#client"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-gray-800 hover:text-orange-600 text-base font-semibold"
              >
                <Users className="w-4 h-4 mr-2" />
                Clients
              </Link>
            </div>
          </div>
        )} */}
{/* 
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#"
            className="border  hover:underline hover:text-blue-700 hover:bg-white text-[#2b2d42] px-3 py-1 md:px-2 lg:px-6 xl:py-2 rounded-md font-medium  transition"
          >
            Sign In
          </Link>
        </div> */}
      </nav>

      {/* <div className="fixed bottom-0 left-0 right-0  flex justify-between items-center  md:hidden z-[100]">
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center text-gray-100"
        >
          <div className="w-12 h-12  bg-gray-400 flex items-center justify-center">
            <Menu className="w-6 h-6" />
          </div>
        </button>

        <Link
          href="#"
          className="flex flex-col items-center justify-center text-white w-full"
        >
          <span className="w-full h-12  bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center">
            Sign In
          </span>
        </Link>

        <Link
          href="#contact"
          className="flex flex-col items-center justify-center text-gray-600"
        >
          <div className="w-12 h-12  bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
            <Calendar className="w-5 h-8 text-white" />
          </div>
        </Link>
      </div>

      <div className="h-16 md:hidden"></div> */}
    </>
  );
};

export default Navbar1;
