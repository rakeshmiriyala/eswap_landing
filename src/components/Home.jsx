import React, { useEffect, useState } from "react";
import { FaRocket, FaInstagram } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import { PiTimer } from "react-icons/pi";
import { MdCurrencyRupee } from "react-icons/md";
import { TbTicket } from "react-icons/tb";
import { GoPeople } from "react-icons/go";

import logo from "../assets/Logo.png";
import swapBg from "../assets/swap_bg.png";
import bgImage from "../assets/bg.png";

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
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center text-white font-sans p-4 sm:p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Logo */}
      <div className="text-3xl font-bold mb-4 px-4 sm:px-10 md:px-20">
        <img src={logo} alt="Logo" className="h-12 sm:h-14 md:h-16" />
      </div>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 px-4 sm:px-10 md:px-20 py-8">
        {/* Left Content */}
        <div className="space-y-4 lg:w-1/2">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 border rounded-md border-white bg-black px-4 py-2 w-fit">
              <FaRocket />
              <span>Launching Soon</span>
            </div>
            <div className="flex items-center gap-2 text-base">
              <PiTimer />
              <p>22 days to go</p>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold">Book it.</h2>
          <h1 className="text-4xl sm:text-5xl font-bold">Can't Go?</h1>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 bg-cover bg-center inline-block px-4 ml-[-40px] sm:ml-[-60px]"
            style={{
              backgroundImage: `url(${swapBg})`,
              backgroundSize: "100% 100%",
            }}
          >
            Swap it.
          </h1>

          <p className="mb-8 text-sm sm:text-base">
            The first app where you can safely swap your event tickets when life
            happens and turn your plans into money.
          </p>

          <div>
            <p className="mb-2 text-sm sm:text-base">
              Get notified when we launch
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-white bg-transparent border border-white/30 rounded-md sm:rounded-l-md sm:rounded-r-none placeholder-white outline-none w-full"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md w-full sm:w-32">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full flex flex-col justify-between items-center">
          {/* Header Text */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold mb-2">How Eswap Works</h2>
            <p className="text-sm text-gray-300">
              See what you'll be able to do when we launch
            </p>
          </div>

          {/* Tab Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            {/* Card */}
            <div className="flex-1 backdrop-blur-md bg-[#646464a4]/30 p-6 rounded-2xl space-y-6 text-white w-full">
              {/* Tabs */}
              <div className="flex justify-between p-1 bg-black/60 rounded-xl text-sm font-medium">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-1/3 px-2 py-3 transition flex flex-col items-center text-center ${
                      activeTab === tab
                        ? "bg-[#ff1f42] text-white rounded-xl"
                        : ""
                    }`}
                  >
                    <div className="text-lg">
                      {tab === "book" && <TbTicket />}
                      {tab === "resell" && <MdCurrencyRupee />}
                      {tab === "safe" && <GoPeople />}
                    </div>
                    <span className="text-xs mt-1 capitalize">{tab}</span>
                  </button>
                ))}
              </div>

              {/* Icon + Info */}
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

              {/* Ticket Info */}
              <div className="rounded-xl bg-black/70 p-4 border border-dashed border-white/30 text-center">
                <div className="text-lg font-medium">
                  {tabContent[activeTab].ticket}
                </div>
              </div>

              {/* Tab Dots */}
              <div className="flex justify-center items-center gap-2">
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

            {/* Vertical Socials */}
            <div className="flex sm:flex-col md:pt-68 justify-center gap-9">
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
