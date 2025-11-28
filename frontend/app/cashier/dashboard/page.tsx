import Head from 'next/head'
import { FaTrain, FaTrainSubway } from 'react-icons/fa6';
import { IoMdTrain } from "react-icons/io";
import { TbTrain } from "react-icons/tb";
import { FaSearch, } from 'react-icons/fa'; // Untuk ikon search dan lainnya
import { HiOutlineUsers } from "react-icons/hi";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { CiGlobe } from "react-icons/ci";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Sepurane Dashboard</title>
        <meta name="description" content="Dashboard Sepurane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          <div className="text-[30px] ml-22 font-poppins font-bold">
            <span className="text-[#DE5D5B]">Sepur</span>
            <span className="text-white">ane</span>
          </div>
          <div className="flex space-x-8 mr-24 items-center text-white">
            <a href="../cashier/dashboard" className="hover:text-[#DE5D5B] transition">Home</a>
            <a href="../cashier/order" className="hover:text-[#DE5D5B] transition">My Bookings</a>
            <a href="#" className="hover:text-[#DE5D5B] transition flex items-center gap-1">
              <CiGlobe className="mr-1 size={60}" />
              <span>Language</span>
            </a>
            <a href="../login" className="hover:text-[#DE5D5B] transition">Sign in</a>
            <button className="bg-white text-[#292F3A] px-4 py-1 rounded-md hover:bg-[#DE5D5B] hover:text-white transition">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Full-Screen Background */}
      <section className="relative w-full h-screen bg-gradient-to-r text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('../image/bg-kereta.png')" }}  // Path to the uploaded image
        ></div>
        <div className="relative z-10 flex flex-col items-start justify-center container mx-auto py-20 pl-12">
          <h1 className="text-6xl pl-12 font-semibold font-Mona Sans mt-12 mb-8 leading-tight text-white">
            Traveling <br /> Around <br /> The <br /> World
          </h1>
          <div className="flex justify-center  space-x-4">
            <button className="bg-white  text-gray-800 px-3 py-2 ml-12 rounded-full flex items-center hover:bg-[#DE5D5B] hover:text-white hover:scale-105 transition-all duration-300 ">
              <FaTrain className="mr-2" /> Lokal
            </button>
            <button className="bg-white text-gray-800 px-2 py-2 rounded-full flex items-center hover:bg-[#DE5D5B] hover:text-white hover:scale-105 transition-all duration-300">
              <FaTrainSubway className="mr-2" /> Antar Kota
            </button>
            <button className="bg-white text-gray-800 px-2 py-2 rounded-full flex items-center hover:bg-[#DE5D5B] hover:text-white hover:scale-105 transition-all duration-300">
              <IoMdTrain className="mr-2" /> LRT
            </button>
            <button className="bg-white text-gray-800 px-2 py-2 rounded-full flex items-center hover:bg-[#DE5D5B] hover:text-white hover:scale-105 transition-all duration-300">
              <TbTrain className="mr-2" /> Whoosh
            </button>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <div className="flex bg-white p-6 -translate-x-10 shadow-lg  mx-auto mt-[-150px] max-w-[80%] z-20 relative rounded-xl">
        <div className="flex justify-between items-center space-x-4 w-full">
          {/* Search Input */}
          <div className="flex items-center bg-[#F7F7F7] p-2 rounded-xl ml-4 w-">
            <FaSearch className="text-gray-600 mr-3" />
            <input
              type="text"
              placeholder="Gubeng, Surabaya"
              className="bg-transparent border-none text-gray-700 outline-none w-full"
            />
          </div>

          {/* Departure, Return, Round Trip Buttons */}
          <div className="flex  space-x-0 rounded-full mr-25 bg-[#F7F7F7] items-center">
            <button className="flex items-center bg-[#F7F7F7]  text-gray-700 py-2 px-4 rounded-l-full ">
              <FaRegCalendarAlt className="mr-2 size={16}" /> Departure
            </button>
            <div className="relative">
              <button className="flex items-center bg-[#F7F7F7] text-gray-700 py-2 px-4 ">
                <FaRegCalendarAlt className="mr-2 size={16}" /> Return
              </button>
              {/* Garis vertikal di kiri tombol Return */}
              <div className="absolute left-[0.5px] top-1/2 transform -translate-y-1/2 w-[1px] bg-[#292D3A] h-1/3"></div>
              {/* Garis vertikal di kanan tombol Return */}
              <div className="absolute right-[0.5px] top-1/2 transform -translate-y-1/2 w-[1px] bg-[#292D3A] h-1/3"></div>
            </div>

            {/* Round Trip with Toggle */}
            <button className="flex items-center bg-[#F7F7F7] text-gray-700 py-2 px-4 rounded-r-full  space-x-3">
              <span className="flex items-center">
                Round Trip
              </span>

              {/* Toggle Switch*/}
              <label htmlFor="toggle" className="flex items-center cursor-pointer relative">
                <input type="checkbox" id="toggle" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-[#DE5D5B] transition-colors duration-300"></div>
                <div className="dot absolute left-0.5 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 peer-checked:translate-x-5 pointer-events-none"></div>
              </label>
            </button>
          </div>


          {/* Guests Dropdown */}
          <div className="relative">
            <button className="flex items-center bg-[#F7F7F7] text-gray-700 px-4 py-2 rounded-full ">
              <HiOutlineUsers className="mr-2" /> Guests
              <span className="ml-2 pt-1/2">˅</span>
            </button>

          </div>

          {/* Search Button */}
          <button className="bg-[#DE5D5B] text-white px-6 py-4 rounded-xl hover:bg-[#c84d4a] transition">
            <FaSearch />
          </button>
        </div>
      </div>

    </div>
  );
}
