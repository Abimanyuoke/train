import { CiGlobe } from "react-icons/ci";
import { TbTrain } from "react-icons/tb";

export default function Home() {
  return (

    <div className="min-h-screen bg-[#F4F7FF]">
      <nav className="relative top-0 h-17 left-0 w-full z-50 bg-transparent">
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

      <div className="relative mt-4  h-64 w-full">
        <img
          src="../image/kereta.png"
          alt="Train"
          className="absolute top-0 left-0 w-full h-75 object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white  bg-opacity-40">
          <h1 className="text-3xl font-bold">5 search results</h1>
          <p className="text-sm">Pilih Kereta Pulang</p>
        </div>
      </div>


      {/* Malioboro Express*/}
      <div className=" w-[1120px] mx-auto py-20 px-6 md:px-20">
        <div className="bg-white shadow-md rounded-lg p-6 h-45 flex flex-col md:flex-row justify-between items-center">

          {/* Kereta */}
          <div className="flex  -mt-12 flex-col">
            <span className=" ml-8 font-semibold font-poppins  text-[#29303A] text-lg">Malioboro Express</span>
            <span className="text-lg text-center ml-6 font-semibold text-[#29303A]">(169)</span>
          </div>

          {/* Info keberangkatan & durasi */}
          <div className="flex  gap-8 text-center">
            {/* Keberangkatan */}
            <div className="transform -translate-x-60">
              <p className="text-[#29303A] -mt-1 -ml-8 mb-1 text-[10px] ">Malang</p>
              <p className="text-lg font-semibold text-gray-800 flex items-center space-x-1">
                <span>19:30</span>
                <span className="text-lg text-[#B6B9C2] ">PM</span>
              </p>
              <p className="text-sm font-normal text-[10px] -ml-4 text-[#29303A]">1 Juni 2025</p>
            </div>

            {/* Durasi */}
            <div className="flex flex-col -mt-1 -translate-x-50  items-center text-[10px] text-[#29303A]">
              <div className="flex items-center mb-1 gap-1">
                <span>Duration</span>
                <span>6j 5m</span>
              </div>
              <div className="flex items-center gap-1">

                <div className="w-3 h-3 rounded-full mt-4 border-[2px] border-gray-300 bg-white"></div>


                {Array(12).fill(0).map((_, i) => (
                  <div key={`left-${i}`} className="w-[2px] mt-4 h-[2px] bg-gray-300 rounded-full"></div>
                ))}


                <TbTrain className="text-[#DE5D5B] text-xl mx-1 mt-4 " />

                {Array(12).fill(0).map((_, i) => (
                  <div key={`right-${i}`} className="w-[2px] h-[2px] mt-4 bg-gray-300 rounded-full"></div>
                ))}


                <div className="w-3 h-3 bg-[#DE5D5B] mt-4 rounded-full"></div>
              </div>
            </div>
            <div className="text-right -translate-x-30">
              <p className="text-[#29303A] -mt-1 mb-1 -translate-x-7  text-[10px]">Yogyakarta</p>
              <div className="flex items-center justify-end gap-1">
                <p className="text-lg font-semibold text-[#29303A]">01:35</p>
                <span className="text-lg font-semibold text-[#B6B9C2]">PM</span>
              </div>
              <p className="text-sm font-normal text-[10px] -translate-x-6  text-[#29303A]">2 Juni 2025</p>
              <p className="text-[#DE5D5B] font-semibold   text-lg mt-6">Rp 280.000</p>
            </div>
          </div>
        </div>
      </div>



      {/*Gajayana Trian*/}
      <div className=" w-[1120px] mx-auto -mt-13 px-6 md:px-20">
        <div className="bg-white shadow-md rounded-lg p-6 h-45 flex flex-col md:flex-row justify-between items-center">
          {/* Kereta */}
          <div className="flex  -mt-12 flex-col">
            <span className=" ml-8 font-semibold font-poppins  text-[#29303A] text-lg">Gajayana Train</span>
            <span className="text-lg text-center ml-8 font-semibold text-[#29303A]">(123)</span>
          </div>

          {/* Info keberangkatan & durasi */}
          <div className="flex  gap-8 text-center">
            {/* Keberangkatan */}
            <div className="transform -translate-x-60">
              <p className="text-[#29303A] -mt-1 -ml-8 mb-1 text-[10px] ">Jakarta</p>
              <p className="text-lg font-semibold text-gray-800 flex items-center space-x-1">
                <span>15:00</span>
                <span className="text-lg text-[#B6B9C2] ">PM</span>
              </p>
              <p className="text-sm font-normal text-[10px] -ml-4 text-[#29303A]">1 Juni 2025</p>
            </div>

            {/* Durasi */}
            <div className="flex flex-col -mt-1 -translate-x-50  items-center text-[10px] text-[#29303A]">
              <div className="flex items-center mb-1 gap-1">
                <span>Duration</span>
                <span>5j 45m</span>
              </div>
              {/* Progress Line */}
              <div className="flex items-center gap-1">
                {/* Lingkaran awal (abu-abu) */}
                <div className="w-3 h-3 rounded-full border-[2px] mt-4 border-gray-300 bg-white"></div>


                {Array(12).fill(0).map((_, i) => (
                  <div key={`left-${i}`} className="w-[2px] h-[2px] mt-4 bg-gray-300 rounded-full"></div>
                ))}


                <TbTrain className="text-[#DE5D5B] text-xl mx-1 mt-4" />


                {Array(12).fill(0).map((_, i) => (
                  <div key={`right-${i}`} className="w-[2px] h-[2px] mt-4 bg-gray-300 rounded-full"></div>
                ))}

                <div className="w-3 h-3 bg-[#DE5D5B] rounded-full mt-4"></div>
              </div>
            </div>
            <div className="text-right -translate-x-30">
              <p className="text-[#29303A] -mt-1 mb-1 -translate-x-7  text-[10px]">Malang</p>
              <div className="flex items-center justify-end gap-1">
                <p className="text-lg font-semibold text-[#29303A]">08:15</p>
                <span className="text-lg font-semibold text-[#B6B9C2]">AM</span>
              </div>
              <p className="text-sm font-normal text-[10px] -translate-x-6  text-[#29303A]">2 Juni 2025</p>
              <p className="text-[#DE5D5B] font-semibold   text-lg mt-6">Rp 350.000</p>
            </div>
          </div>
        </div>
      </div>


      {/* Bima Express */}
      <div className=" w-[1120px] mx-auto py-6 px-6 md:px-20">
        <div className="bg-white shadow-md rounded-lg p-6 h-45 flex flex-col md:flex-row justify-between items-center">

          <div className="flex  -mt-12 flex-col">
            <span className=" ml-8 font-semibold font-poppins  text-[#29303A] text-lg">Bima Express</span>
            <span className="text-lg text-center ml-6 font-semibold text-[#29303A]">(456)</span>
          </div>

          {/* Info keberangkatan & durasi */}
          <div className="flex  gap-8 text-center">
            {/* Keberangkatan */}
            <div className="transform -translate-x-60">
              <p className="text-[#29303A] -mt-1 -ml-8 mb-1 text-[10px] ">Surabaya</p>
              <p className="text-lg font-semibold text-gray-800 flex items-center space-x-1">
                <span>12:00</span>
                <span className="text-lg text-[#B6B9C2] ">PM</span>
              </p>
              <p className="text-sm font-normal text-[10px] -ml-4 text-[#29303A]">1 Juni 2025</p>
            </div>

            {/* Durasi */}
            <div className="flex flex-col -mt-1 -translate-x-50  items-center text-[10px] text-[#29303A]">
              <div className="flex items-center mb-1 gap-1">
                <span>Duration</span>
                <span>7j 10m</span>
              </div>

              <div className="flex items-center gap-1">

                <div className="w-3 h-3 rounded-full border-[2px] mt-4 border-gray-300 bg-white"></div>


                {Array(12).fill(0).map((_, i) => (
                  <div key={`left-${i}`} className="w-[2px] h-[2px] mt-4 bg-gray-300 rounded-full"></div>
                ))}


                <TbTrain className="text-[#DE5D5B] text-xl mx-1 mt-4" />


                {Array(12).fill(0).map((_, i) => (
                  <div key={`right-${i}`} className="w-[2px] h-[2px] mt-4 bg-gray-300 rounded-full"></div>
                ))}

                <div className="w-3 h-3 bg-[#DE5D5B] rounded-full mt-4"></div>
              </div>
            </div>
            <div className="text-right -translate-x-30">
              <p className="text-[#29303A] -mt-1 mb-1 -translate-x-7  text-[10px]">Yogyakarta</p>
              <div className="flex items-center justify-end gap-1">
                <p className="text-lg font-semibold text-[#29303A]">19:10</p>
                <span className="text-lg font-semibold text-[#B6B9C2]">PM</span>
              </div>
              <p className="text-sm font-normal text-[10px] -translate-x-6  text-[#29303A]">2 Juni 2025</p>
              <p className="text-[#DE5D5B] font-semibold   text-lg mt-6">Rp 300.000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Taksaka Train */}
      <div className=" w-[1120px] mx-auto  px-6 md:px-20">
        <div className="bg-white shadow-md rounded-lg p-6 h-45 flex flex-col md:flex-row justify-between items-center">

          <div className="flex  -mt-12 flex-col">
            <span className=" ml-8 font-semibold font-poppins  text-[#29303A] text-lg">Taksaka Train</span>
            <span className="text-lg text-center ml-6 font-semibold text-[#29303A]">(789)</span>
          </div>

          <div className="flex  gap-8 text-center">
            {/* Keberangkatan */}
            <div className="transform -translate-x-60">
              <p className="text-[#29303A] -mt-1 -ml-8 mb-1 text-[10px] ">Semarang</p>
              <p className="text-lg font-semibold text-gray-800 flex items-center space-x-1">
                <span>10:00</span>
                <span className="text-lg text-[#B6B9C2] ">AM</span>
              </p>
              <p className="text-sm font-normal text-[10px] -ml-4 text-[#29303A]">1 Juni 2025</p>
            </div>

            {/* Durasi */}
            <div className="flex flex-col -mt-1 -translate-x-50  items-center text-[10px] text-[#29303A]">
              <div className="flex items-center mb-1 gap-1">
                <span>Duration</span>
                <span>5j 30m</span>
              </div>
              {/* Progress Line */}
              <div className="flex items-center gap-1">
                {/* Lingkaran awal (abu-abu) */}
                <div className="w-3 h-3 rounded-full border-[2px] mt-4 border-gray-300 bg-white"></div>

                {Array(12).fill(0).map((_, i) => (
                  <div key={`left-${i}`} className="w-[2px] h-[2px] mt-4 bg-gray-300 rounded-full"></div>
                ))}


                <TbTrain className="text-[#DE5D5B] text-xl mx-1 mt-4" />


                {Array(12).fill(0).map((_, i) => (
                  <div key={`right-${i}`} className="w-[2px] h-[2px] mt-4 bg-gray-300 rounded-full"></div>
                ))}


                <div className="w-3 h-3 bg-[#DE5D5B] rounded-full mt-4"></div>
              </div>
            </div>
            <div className="text-right -translate-x-30">
              <p className="text-[#29303A] -mt-1 mb-1 -translate-x-7  text-[10px]">Yogyakarta</p>
              <div className="flex items-center justify-end gap-1">
                <p className="text-lg font-semibold text-[#29303A]">15:30</p>
                <span className="text-lg font-semibold text-[#B6B9C2]">PM</span>
              </div>
              <p className="text-sm font-normal text-[10px] -translate-x-6  text-[#29303A]">2 Juni 2025</p>
              <p className="text-[#DE5D5B] font-semibold   text-lg mt-6">Rp 320.000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kertajaya Express */}
      <div className=" w-[1120px] mx-auto py-6 px-6 md:px-20">
        <div className="bg-white shadow-md rounded-lg p-6 h-45 flex flex-col md:flex-row justify-between items-center">

          <div className="flex  -mt-12 flex-col">
            <span className=" ml-8 font-semibold font-poppins  text-[#29303A] text-lg">Kertajaya Express</span>
            <span className="text-lg text-center ml-6 font-semibold text-[#29303A]">(169)</span>
          </div>

          {/* Info keberangkatan & durasi */}
          <div className="flex  gap-8 text-center">
            {/* Keberangkatan */}
            <div className="transform -translate-x-60">
              <p className="text-[#29303A] -mt-1 -ml-8 mb-1 text-[10px] ">bandung</p>
              <p className="text-lg font-semibold text-gray-800 flex items-center space-x-1">
                <span>16:30</span>
                <span className="text-lg text-[#B6B9C2] ">PM</span>
              </p>
              <p className="text-sm font-normal text-[10px] -ml-4 text-[#29303A]">1 Juni 2025</p>
            </div>

            {/* Durasi */}
            <div className="flex flex-col -mt-1 -translate-x-50  items-center text-[10px] text-[#29303A]">
              <div className="flex items-center mb-1 gap-1">
                <span>Duration</span>
                <span>6j 15m</span>
              </div>

              <div className="flex items-center gap-1">

                <div className="w-3 h-3 rounded-full border-[2px] mt-4 border-gray-300 bg-white"></div>


                {Array(12).fill(0).map((_, i) => (
                  <div key={`left-${i}`} className="w-[2px] h-[2px] mt-4 bg-gray-300 rounded-full"></div>
                ))}


                <TbTrain className="text-[#DE5D5B] text-xl mx-1 mt-4" />

                {Array(12).fill(0).map((_, i) => (
                  <div key={`right-${i}`} className="w-[2px] h-[2px] mt-4 bg-gray-300 rounded-full"></div>
                ))}

                <div className="w-3 h-3 bg-[#DE5D5B] rounded-full mt-4"></div>
              </div>
            </div>
            <div className="text-right -translate-x-30">
              <p className="text-[#29303A] -mt-1 mb-1 -translate-x-7  text-[10px]">Yogyakarta</p>
              <div className="flex items-center justify-end gap-1">
                <p className="text-lg font-semibold text-[#29303A]">22:45</p>
                <span className="text-lg font-semibold text-[#B6B9C2]">PM</span>
              </div>
              <p className="text-sm font-normal text-[10px] -translate-x-6  text-[#29303A]">2 Juni 2025</p>
              <p className="text-[#DE5D5B] font-semibold   text-lg mt-6">Rp 400.000</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
