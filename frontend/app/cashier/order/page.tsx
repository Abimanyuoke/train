'use client'
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import React from "react";


export default function Home() {
  const seatRows = 8;
  const seatCols = ["A", "B", "C", "D"];
  const unavailableSeats = ["A1", "B2", "A3", "b4", "A5", "B6", "A7", "B8", "C1", "D2", "C3", "D4", "C5", "D6", "C7", "D8", "A3", "b4", "A5", "B6", "A7"];
  const [selectedSeat, setSelectedSeat] = useState<string | null>("C2");

  const handleSeatClick = (seatId: string) => {
    if (!unavailableSeats.includes(seatId)) {
      setSelectedSeat(seatId === selectedSeat ? null : seatId);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FF]">
      {/* Navbar */}
      <nav className="relative top-0 h-17 left-0 w-full z-50 bg-white">
        <div className="max-w-7xl mx-auto  px-6 py-4 flex items-center justify-between text-white">
          <div className="text-[30px] ml-22 font-poppins font-bold">
            <span className="text-[#DE5D5B]">Sepur</span>
            <span className="text-[#29303A]">ane</span>
          </div>
          <div className="flex space-x-8 mr-24 items-center text-white">
            <a href="../cashier/dashboard" className="hover:text-[#DE5D5B] text-[#29303A] transition">Home</a>
            <a href="../cashier/order" className="hover:text-[#DE5D5B] text-[#29303A] transition">My Bookings</a>
            <a href="#" className="hover:text-[#DE5D5B] text-[#29303A] transition flex items-center gap-1">
              <CiGlobe className="mr-1 size={60}" />
              <span>Language</span>
            </a>
            <a href="../login" className="hover:text-[#DE5D5B] text-[#29303A] transition">Sign in</a>
            <a href="../login">
              <button className="bg-[#DE5D5B] text-white px-4 py-1 rounded-md hover:bg-[#DE5D5B]  transition">
                Sign up
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Order Details Section */}
      <section className="px-6 py-10 bg-[#F4F7FF]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold text-[#29303A] mb-8">Order Details</h1>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-black mb-6">Order Date</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="flex flex-col space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#29303A]">Order Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-[400px] mt-1 px-4 py-2 border placeholder:text-sm text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#29303A]">Nomor Identitas</label>
                  <input
                    type="text"
                    placeholder="Enter identity"
                    className="w-[400px] mt-1 px-4 py-2 placeholder:text-sm border text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block mr-2 text-sm font-medium text-[#29303A]">Phone Number</label>
                  <div className="relative">
                    <div className="absolute left-9 top-1/2  transform -translate-y-1/2 w-px h-3 bg-black opacity-40"></div>

                    <img
                      src="https://flagcdn.com/w40/id.png"
                      alt="Indonesian Flag"
                      className="absolute left-3 top-1/2 transform  -translate-y-1/2 w-4 h-auto rounded-sm"
                    />

                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-[400px] placeholder:text-sm pl-12 mt-1 px-4 py-2 border text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#29303A]">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-[400px] mt-1 px-4 py-2 border placeholder:text-sm text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium  text-[#29303A]">Address</label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="w-[400px] mt-1 px-4 py-2 border placeholder:text-sm  text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#29303A]">Number of passengers</label>
                  <input
                    type="number"
                    placeholder="Enter total passengers"
                    className="w-[400px] mt-1 px-4 py-2 border placeholder:text-sm text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Tabel 2 */}
      <section className=" pb-10 -mt-3   bg-[#F4F7FF]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-black mb-6">Passenger 1</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Form Section - 2/3 */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col space-y-4">
                  <div>
                    <label className="block  text-sm font-medium text-[#29303A]">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-[300px] placeholder:text-sm mt-1 px-4 py-2 border text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#29303A]">Nomor Identitas</label>
                    <input
                      type="text"
                      placeholder="Enter identity"
                      className="w-[300px] placeholder:text-sm mt-1 px-4 py-2 border text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col space-y-4 ">
                  <div className="-ml-4">
                    <label className="block text-sm font-medium text-[#29303A]">Identity Number</label>
                    <div className="relative">
                      <div className="absolute left-9 top-1/2 transform -translate-y-1/2 w-px h-3 bg-[#5c5959] opacity-40"></div>
                      <img
                        src="https://flagcdn.com/w40/id.png"
                        alt="Indonesian Flag"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-auto rounded-sm"
                      />
                      <input
                        type="text"
                        placeholder="Enter phone number"
                        className="w-[300px] placeholder:text-sm pl-12 mt-1 px-4 py-2 border text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>

                  <div className="-ml-4">
                    <label className="block text-sm font-medium text-[#29303A]">Address</label>
                    <input
                      type="text"
                      placeholder="Enter address"
                      className="w-[300px] placeholder:text-sm mt-1 px-4 py-2 border text-black placeholder-[#A0A0A0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              </div>

              {/* Seat Section - 1/3 */}
              <div className="-mt-14 border-l border-gray-300 pl-6">
                {/* Legend */}
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 border-2 rounded bg-white" />
                    <span className="text-[#29303A]">Available</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 border rounded bg-[#D9D9D9]" />
                    <span className="text-[#29303A]">Unavailable</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 border-2 border-[#76C8D2] rounded bg-[#EAFDFF]" />
                    <span className="text-[#29303A]">Selected</span>
                  </div>
                </div>

                {/* Seat Header */}
                <div className="grid text-black grid-cols-4 gap-4 text-sm font-semibold mb-2 text-center">
                  {seatCols.map((col) => {
                    let headerPositionClass = "";
                    if (col === "A") headerPositionClass = "relative ";
                    else if (col === "B") headerPositionClass = "relative right-5";
                    else if (col === "C") headerPositionClass = "relative left-1";
                    else if (col === "D") headerPositionClass = "relative right-5";

                    return (
                      <div key={col} className={headerPositionClass}>
                        {col}
                      </div>
                    );
                  })}
                </div>

                {/* Seat Grid */}
                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: seatRows }, (_, rowIndex) =>
                    seatCols.map((col) => {
                      const seatId = `${col}${rowIndex + 1}`;
                      const isUnavailable = unavailableSeats.includes(seatId);
                      const isSelected = selectedSeat === seatId;

                      let buttonPositionClass = "";
                      if (col === "A") buttonPositionClass = "relative left-4";
                      else if (col === "B") buttonPositionClass = "relative right-1";
                      else if (col === "C") buttonPositionClass = "relative left-5";
                      else if (col === "D") buttonPositionClass = "relative right-1";

                      return (
                        <button
                          key={seatId}
                          onClick={() => handleSeatClick(seatId)}
                          className={`
            w-8 h-8 rounded border-2 text-xs
            ${buttonPositionClass}
            ${isUnavailable ? "bg-[#D9D9D9] cursor-not-allowed" : "bg-white hover:bg-gray-100"}
            ${isSelected ? "bg-[#EAFDFF] border-[#76C8D2]" : ""}
          `}
                          disabled={isUnavailable}
                        />
                      );
                    })
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center  mx-auto pb-12">
        <button
          className="bg-white w-[300px] text-[#29303A] px-6 py-2 rounded-md hover:bg-[#c94b4a] transition font-semibold"
          onClick={() => {
            // Logika
            console.log("Continue clicked");
          }}
        >
          Continue
        </button>
      </div>

    </div>
  );
}
