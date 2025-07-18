import React, { useEffect, useState } from "react";
import { FaRocket, FaInstagram } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import { PiTimer } from "react-icons/pi";
import { MdCurrencyRupee } from "react-icons/md";
import logo from "../assets/Logo.png";
import { TbTicket } from "react-icons/tb";
import { GoPeople } from "react-icons/go";


export default function Home() {
  const [activeTab, setActiveTab] = useState("book");
  const tabs = ["book", "resell", "safe"];

  const tabContent = {
    book: {
      title: "Book Any Event",
      description: "Browse hundreds of events",
      ticket: "Summer Festival – ₹250",
      icon: <TbTicket className="mx-auto text-3xl" />,
    },
    resell: {
      title: "Resell & Make Money",
      description: "Can't go? Resell your ticket and make money",
      ticket: "Sold for ₹100 – ₹300!",
      icon: <MdCurrencyRupee className="mx-auto text-3xl" />,
    },
    safe: {
      title: "Safe Trading",
      description: "Secure transactions with buyer protection",
      ticket: "100% Secure Transfer",
      icon: <GoPeople className="mx-auto text-2xl" />,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-[#000000] via-[#000000] to-[#8e0202] to-[90%] text-white  font-sans p-6">
      {/* Logo */}
      <div className="text-3xl font-bold m-8 mb-0 px-32">
        <img src={logo} alt="Logo" className="h-15" />
      </div>

      {/* Main Content */}
      <div className="grid px-10 py-20 md:grid-cols-2 gap-10 relative ">
        {/* Left Side */}
        <div className="space-y-4 px-30">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 border rounded-md border-white bg-black px-4 py-2 w-fit">
              <FaRocket />
              <span className="">Launching Soon</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <PiTimer />
              <p>22 days to go</p>
            </div>
          </div>

          <h2 className="text-6xl font-bold">Book it.</h2>
          <h1 className="text-6xl font-bold">Can't Go?</h1>
          <h1 className="text-6xl font-bold mb-10">Swap it.</h1>

          <p className="mb-10">
            The first app where you can safely swap your event tickets when life
            happens and turn your plans into money.
          </p>

          <div>
            <p className="mb-4">Get notified when we launch</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-white bg-transparent border border-white/30 rounded-l-md placeholder-white outline-none w-full"
              />
              <button className="bg-red-600 text-white w-32 px-4 py-2 rounded-r-md">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between w-full">
          {/* Heading */}
          <div className="px-2">
            <h2 className="text-xl font-semibold text-center mb-4">
              How Eswap Works
            </h2>
            <p className="text-sm text-gray-300 text-center mb-4">
              See what you'll be able to do when we launch
            </p>
          </div>

          {/* Card + Vertical Social Icons */}
          <div className="flex w-full md:w-[90%] mx-auto gap-10 items-center justify-center">
            {/* Card Box */}
            <div className="flex-1 backdrop-blur-md bg-gradient-to-r from-[#282828] via-[#1f1f1f] to-[#4c3131]  p-6 rounded-2xl space-y-6 text-white">
              {/* Tabs */}
              <div className="flex justify-between items-center bg-black/60 rounded-xl overflow-hidden text-sm font-medium text-white">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-1/3 px-4 py-3 transition text-center flex flex-col items-center justify-center ${
                      activeTab === tab
                        ? "bg-[#ff1f42] text-white rounded-xl"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <div className="text-lg">
                      {tab === "book" && <TbTicket/>}
                      {tab === "resell" && <MdCurrencyRupee/>}
                      {tab === "safe" && <GoPeople/>}
                    </div>
                    <span className="text-xs mt-1 font-medium capitalize">
                      {tab}
                    </span>
                  </button>
                ))}
              </div>

              {/* Icon & Title */}
              <div className="text-white flex flex-col items-center">
  <div className="bg-black rounded-full w-16 h-16 p-4 flex items-center justify-center">
    {tabContent[activeTab].icon}
  </div>
</div>
              <div className="text-xl font-semibold text-center">
                {tabContent[activeTab].title}
              </div>
              <p className="text-sm text-white text-center">
                {tabContent[activeTab].description}
              </p>

              {/* Ticket Info Box */}
              <div className="rounded-xl bg-black/70 p-4 border border-dashed border-white/30 text-center space-y-2">
                <div className="p-3 text-lg font-medium">
                  {tabContent[activeTab].ticket}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {tabs.map((tab) => (
                  <div
                    key={tab}
                    className={`w-2 h-2 rounded-full ${
                      activeTab === tab ? "bg-white" : "bg-white/40"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Vertical Social Icons */}
            <div className="flex flex-col mt-70 gap-6">
              <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
              <FaMeta className="text-2xl hover:text-blue-500 cursor-pointer" />
              <FaXTwitter className="text-2xl hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
