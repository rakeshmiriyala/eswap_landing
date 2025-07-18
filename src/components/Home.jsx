import React, { useEffect, useState } from "react";
import { FaRocket, FaInstagram } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import { PiTimer } from "react-icons/pi";
import { TbTicket } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { PiArrowsClockwise } from "react-icons/pi";


import logo from "../assets/Logo.png";
import swapBg from "../assets/swap_bg.png";
import bgImage from "../assets/bg.png";

export default function Home() {
  const [activeTab, setActiveTab] = useState("book");
  const tabs = ["book", "Swap", "Experience"];

  const tabContent = {
    book: {
      title: "Book Any Event",
      description: "Browse hundreds of events",
      ticket: (
        <span className="flex items-center justify-center gap-2">
          {/* SVG Icon */}
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.58235 15.0564C5.30661 15.0564 5.08301 14.8329 5.08301 14.557V5.82552C5.08301 5.54977 5.30661 5.32617 5.58235 5.32617C5.85822 5.32617 6.0817 5.54977 6.0817 5.82552V14.557C6.0817 14.8329 5.85822 15.0564 5.58235 15.0564Z"
              fill="#D1D1D1"
            />
            <path
              d="M15.3153 12.5066C15.0394 12.5066 14.8159 12.2831 14.8159 12.0072V3.27571C14.8159 2.99997 15.0394 2.77637 15.3153 2.77637C15.591 2.77637 15.8146 2.99997 15.8146 3.27571V12.0072C15.8146 12.2831 15.591 12.5066 15.3153 12.5066Z"
              fill="#D1D1D1"
            />
            <path
              d="M5.08301 3.60913C5.08301 2.84818 5.59714 2.18218 6.33318 1.98944L13.7159 0.0554907C14.2218 -0.0769327 14.7493 0.0301992 15.1633 0.34965C15.5771 0.6691 15.8146 1.15223 15.8146 1.67518V3.66477L5.08301 6.4694V3.60913Z"
              fill="#FF7045"
            />
            <path
              d="M3.6386 16.9997C2.29127 16.9997 1.19531 15.9038 1.19531 14.5564C1.19531 13.2092 2.29127 12.1133 3.6386 12.1133C4.98579 12.1133 6.08175 13.2092 6.08175 14.5564C6.08175 15.9036 4.98579 16.9997 3.6386 16.9997Z"
              fill="#FF7045"
            />
            <path
              d="M13.3715 14.4509C12.0243 14.4509 10.9282 13.3549 10.9282 12.0076C10.9282 10.6604 12.0243 9.56445 13.3715 9.56445C14.7187 9.56445 15.8148 10.6604 15.8148 12.0076C15.8148 13.3549 14.7187 14.4509 13.3715 14.4509Z"
              fill="#FF7045"
            />
            <path
              d="M15.1634 0.34965C14.7494 0.0301992 14.2219 -0.0769327 13.7161 0.0554907L9.98438 1.03304V5.18862L15.8148 3.66477V1.67518C15.8148 1.15223 15.5773 0.6691 15.1634 0.34965Z"
              fill="#F03049"
            />
            <path
              d="M3.63867 12.1133V16.9997C4.98586 16.9997 6.08183 15.9038 6.08183 14.5564C6.08183 13.2092 4.98586 12.1133 3.63867 12.1133Z"
              fill="#F03049"
            />
            <path
              d="M13.3716 9.56445V14.4509C14.7188 14.4509 15.8149 13.3549 15.8149 12.0076C15.8149 10.6604 14.7188 9.56445 13.3716 9.56445Z"
              fill="#F03049"
            />
          </svg>
          Summer Festival – ₹250
        </span>
      ),
      icon: <TbTicket className="mx-auto text-3xl" />,
    },
    Swap: {
      title: "Swap & Make Money",
      description: "Plans changed? Never let your ticket go waste-swap it!",
      ticket: (
        <span className="flex items-center justify-center gap-2">
          {/* SVG Icon */}
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_276_361)">
              <path
                d="M8 4.75421H9.5567C12.3735 3.36554 11.8317 1.97441 11.5028 1.63761C11.167 1.29378 10.5064 1.09445 9.65524 1.68472C8.56273 2.44234 8 4.75421 8 4.75421Z"
                fill="#ED6500"
              />
              <path
                d="M8.45752 4.4027C8.69854 3.64121 9.19261 2.43043 9.84805 1.97586C10.1502 1.76633 10.4355 1.66016 10.6968 1.66016C10.9948 1.66016 11.1778 1.80184 11.2602 1.88621C11.3392 1.96707 11.4738 2.2093 11.4178 2.54645C11.3148 3.16625 10.6271 3.82367 9.47793 4.40234H8.45752V4.4027Z"
                fill="#D65600"
              />
              <path
                d="M7.99997 4.75421H6.44327C3.6265 3.36554 4.16829 1.97441 4.49721 1.63761C4.833 1.29378 5.49359 1.09445 6.34473 1.68472C7.43724 2.44234 7.99997 4.75421 7.99997 4.75421Z"
                fill="#ED6500"
              />
              <path
                d="M7.54286 4.4027C7.30184 3.64121 6.80777 2.43043 6.15233 1.97586C5.85019 1.76633 5.56488 1.66016 5.3036 1.66016C5.00558 1.66016 4.82258 1.80184 4.74017 1.88621C4.66121 1.96707 4.52662 2.2093 4.58258 2.54645C4.68558 3.16625 5.37329 3.82367 6.52245 4.40234H7.54286V4.4027Z"
                fill="#D65600"
              />
              <path
                d="M7.99983 4.26758C6.69651 4.26758 0 5.76664 0 14.8577C0 18.2587 2.61316 18.4992 7.99983 18.4992C13.3865 18.4992 15.9997 18.2591 15.9997 14.8577C15.9997 5.76664 9.30315 4.26758 7.99983 4.26758Z"
                fill="#D15900"
              />
              <path
                d="M15.9995 14.8577C15.9995 18.2591 13.3864 18.4992 7.9997 18.4992C3.12667 18.4992 0.523468 18.3027 0.0712891 15.7468C1.80069 17.2329 5.99151 17.2329 7.9997 17.2329C10.0079 17.2329 14.4363 16.065 13.5979 10.8738C13.1594 8.15797 11.2745 6.68598 9.54336 6.05773C8.03541 5.51035 5.47134 5.47414 3.95618 5.81094C5.66053 4.58469 7.40057 4.26758 7.9997 4.26758C9.30337 4.26758 15.9995 5.76664 15.9995 14.8577Z"
                fill="#C64709"
              />
              <path
                d="M9.43441 0.5769C8.90635 0.78186 8.41984 0.882056 8.00028 0.882056C7.58072 0.882056 7.09421 0.78186 6.56615 0.5769C6.03809 0.371939 5.48772 0.573735 5.54402 1.2178C5.62368 2.12342 6.34469 3.62917 7.29849 4.75417H8.70207C9.65587 3.62917 10.3772 2.12342 10.4565 1.2178C10.5132 0.573735 9.96247 0.371939 9.43441 0.5769Z"
                fill="#FF7900"
              />
              <path
                d="M10.4563 1.21772C10.3766 2.12334 9.65559 3.62908 8.70179 4.75408H7.29822C6.89754 4.28123 6.53806 3.74158 6.25 3.20721C6.28193 3.2378 7.00398 3.72752 7.70508 3.72752C8.40618 3.72752 8.80377 3.53311 9.10316 3.22865C9.44272 2.88307 9.89524 2.02561 10.0017 1.41424C10.1078 0.803225 9.761 0.605295 9.441 0.574358C9.967 0.373616 10.5126 0.576467 10.4563 1.21772Z"
                fill="#F26D00"
              />
              <path
                d="M7.87417 7.45927C7.59125 7.4758 7.34817 7.25501 7.331 6.96498C7.22216 5.14951 8.67861 4.21927 8.74076 4.1806C8.98384 4.02908 9.3004 4.10783 9.44838 4.35638C9.59602 4.60423 9.5198 4.92732 9.27877 5.07955C9.23345 5.10873 8.28892 5.7324 8.35896 6.90029C8.37647 7.19103 8.16051 7.44099 7.87657 7.45892H7.87417V7.45927Z"
                fill="#FFAA00"
              />
              <path
                d="M9.45026 4.35989C9.35378 4.35673 9.25559 4.38134 9.167 4.43653C9.1052 4.47521 7.64875 5.40579 7.75725 7.22126C7.7624 7.30845 7.78815 7.38931 7.82935 7.45927C7.56601 7.45189 7.34696 7.23919 7.33048 6.96427C7.22198 5.14915 8.67843 4.21857 8.74023 4.17954C8.98332 4.02802 9.30022 4.10712 9.4482 4.35532C9.44889 4.35673 9.44957 4.35814 9.4506 4.35954L9.45026 4.35989Z"
                fill="#FC8300"
              />
              <path
                d="M10.8284 7.74224C10.7477 7.74681 10.6646 7.73239 10.586 7.69548C8.68389 6.80849 8.54415 4.74587 8.539 4.65868C8.52218 4.36794 8.73917 4.11833 9.02311 4.10146H9.02414C9.30705 4.08493 9.5498 4.30536 9.56731 4.5947C9.57211 4.66325 9.68816 6.11802 11.0128 6.73572C11.2716 6.8563 11.386 7.16919 11.2682 7.43427C11.1862 7.61884 11.0131 7.73169 10.8284 7.74224Z"
                fill="#FFAA00"
              />
              <path
                d="M11.2998 7.33914C11.2922 7.37113 11.2816 7.40277 11.2679 7.43406C11.1858 7.61828 11.0128 7.73148 10.828 7.74203C10.7474 7.7466 10.6646 7.73184 10.5856 7.69527C8.6832 6.80828 8.54415 4.74566 8.539 4.65812C8.52526 4.42012 8.66809 4.21023 8.87581 4.13184C8.8638 4.18141 8.85899 4.23344 8.86208 4.28723C8.86723 4.37477 9.00663 6.43738 10.9087 7.32437C10.9874 7.36094 11.0704 7.3757 11.1511 7.37113C11.2023 7.36832 11.2521 7.35742 11.2998 7.33914Z"
                fill="#FC8300"
              />
              <path
                d="M10.9182 4.00684H5.08142C4.79698 4.00684 4.56641 4.24294 4.56641 4.53418C4.56641 4.82542 4.79698 5.06152 5.08142 5.06152H10.9182C11.2026 5.06152 11.4332 4.82542 11.4332 4.53418C11.4332 4.24294 11.2026 4.00684 10.9182 4.00684Z"
                fill="#FFB806"
              />
              <path
                d="M11.4337 4.53418C11.4337 4.68008 11.376 4.81156 11.2826 4.90719C11.1892 5.00281 11.0608 5.06152 10.9187 5.06152H5.0819C4.79728 5.06152 4.56689 4.82563 4.56689 4.53418C4.56689 4.47266 4.57719 4.41359 4.59642 4.3584C4.66681 4.56336 4.85736 4.70996 5.0819 4.70996H10.9187C11.0608 4.70996 11.1896 4.6509 11.2826 4.55563C11.3365 4.50043 11.3784 4.43328 11.4042 4.3584C11.4234 4.41359 11.4337 4.47266 11.4337 4.53418Z"
                fill="#FF9700"
              />
              <path
                d="M10.3769 9.22848H9.29987C9.4554 9.48406 9.55634 9.77199 9.60235 10.0923H10.6636L10.3718 11.2387H9.59171C9.51034 11.7421 9.32184 12.1531 9.02657 12.472C8.7313 12.7909 8.31105 13.0352 7.76651 13.2054L9.92063 15.911V15.9922H7.92582L5.49051 13.0152L5.48536 11.9668H6.73752C7.24326 11.9559 7.57046 11.7133 7.71913 11.2387H5.33154L5.62338 10.0923H7.67656C7.52102 9.74809 7.21682 9.56879 6.76396 9.55438H5.33669L5.67626 8.08203H10.6688L10.3769 9.22848Z"
                fill="#FFB806"
              />
              <path
                d="M9.60206 10.0923H10.6633L10.3715 11.2387H9.59142C9.52138 11.6722 9.37202 12.0375 9.14267 12.3338C7.94201 12.7082 6.7362 12.9596 5.57811 13.1227L5.49022 13.0152L5.48473 11.9664H6.73689C7.24263 11.9559 7.56983 11.713 7.71815 11.2387H5.33057L5.62241 10.0923H7.67524C7.51936 9.74844 7.2155 9.56914 6.76298 9.55438H5.33537L5.67494 8.08203H10.6674L10.3756 9.22848H9.29889C9.45443 9.48406 9.55502 9.77199 9.60138 10.0923H9.60206Z"
                fill="#FFDB08"
              />
            </g>
            <defs>
              <clipPath id="clip0_276_361">
                <rect
                  width="16"
                  height="18"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          Sold for ₹100 – ₹300!
        </span>
      ),
      icon: <PiArrowsClockwise className="mx-auto text-3xl" />,
    },
    Experience: {
      title: "Experience Trading",
      description: "Time to experience it! Create memories you can save forever.",
      ticket: (
        <span className="flex items-center justify-center gap-2">
          {/* SVG Icon */}
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.79425 17.9988L12.4461 14.6981C14.1068 13.5197 15.0117 11.7681 15.0117 9.73182V6.00216C15.0117 5.28195 15.076 3.57223 15.5884 2.84597C13.3198 2.42138 10.3923 1.39788 7.79417 0C5.19612 1.39788 2.26859 2.42138 0 2.84597C0.512415 3.57223 0.576715 5.28195 0.576715 6.00216V9.73182C0.576715 11.7681 1.48164 13.5197 3.14233 14.6981L7.79425 17.9988Z"
              fill="#0E80AD"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.79435 17.9988L12.4462 14.6981C14.107 13.5198 15.0118 11.7681 15.0118 9.73182V6.00216C15.0118 5.28195 15.0761 3.57223 15.5885 2.84604C13.3199 2.42145 10.3924 1.39795 7.79428 0C5.65672 1.15011 3.29632 2.04671 1.26318 2.56495C1.71299 3.38818 1.86932 5.32147 1.86932 6.00216V9.73182C1.86932 11.0823 2.26751 13.0756 3.02002 14.6089C3.06043 14.639 3.10114 14.6687 3.14243 14.698L7.79428 17.9987L7.79435 17.9988Z"
              fill="#1391C4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.79451 17.9988L12.4464 14.6981C14.1071 13.5198 15.012 11.7681 15.012 9.73182V6.00216C15.012 5.28195 15.0763 3.57223 15.5887 2.84604C13.32 2.42145 10.3926 1.39795 7.79443 0L7.79451 17.9988Z"
              fill="#17ACE8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.88284 11.891L11.827 6.94686C12.0905 6.68332 12.0905 6.25216 11.827 5.98862C11.5634 5.72515 11.1323 5.72515 10.8687 5.98862L6.17995 10.6774L4.82779 8.33537C4.64146 8.01269 4.22498 7.90105 3.90222 8.08739C3.57946 8.27373 3.46789 8.69021 3.65423 9.01296L5.18698 11.6678C5.36019 11.9677 5.63649 12.1523 5.97982 12.1975C6.32323 12.2427 6.63795 12.1359 6.88284 11.891Z"
              fill="#62E8F1"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.88276 11.8909L7.79425 10.9795V9.06304L6.17995 10.6773L4.82779 8.33531C4.64146 8.01262 4.22498 7.90098 3.90222 8.08732C3.57946 8.27366 3.46789 8.69014 3.65423 9.0129L5.18698 11.6677C5.36019 11.9676 5.63649 12.1523 5.97982 12.1975C6.32323 12.2427 6.63787 12.1358 6.88276 11.8909Z"
              fill="#57CED6"
            />
          </svg>
          100% Secure Transfer
        </span>
      ),
      icon: "🪩",
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
      className="min-h-screen bg-cover public-sans bg-no-repeat bg-center text-white xs:p-4 sm:p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Logo */}
      <div className="text-3xl font-bold mb-4 lg:mb-0 px-4 lg:px-30 sm:px-10 md:px-20">
        <img src={logo} alt="Logo" className="h-12 sm:h-14 lg:mt-5 md:h-16" />
      </div>
      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row justify-between px-4 gap-10 sm:px-10 md:px-20 py-8">
        {/* Left Content */}
        <div className="space-y-6 lg:w-1/2 lg:px-10 lg:py-8 lg:pb-0">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 border rounded-md border-white bg-black px-4 py-2 w-fit">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_383_861)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.32033 13.0847C6.61734 13.0847 5.53005 12.4473 4.5365 11.4538C3.92724 10.8445 3.43047 10.179 3.15864 9.57914C2.84933 8.92302 2.83058 8.4075 3.11178 8.13567L3.53357 7.71388C3.79602 8.49185 4.54587 9.71037 5.4082 10.5821C6.28928 11.4631 7.50779 12.2036 8.28577 12.4661L7.86397 12.8879C7.73275 13.0191 7.54529 13.0847 7.32033 13.0847ZM3.83351 7.40457L9.45741 1.79004C9.48553 1.76192 9.51365 1.74317 9.54177 1.7338L15.7562 0.00913679C15.8218 -0.00960955 15.8968 0.00913679 15.9436 0.0560026C15.9905 0.102868 16.0093 0.168481 15.9905 0.234093L14.2565 6.45788C14.2471 6.486 14.2377 6.51412 14.2096 6.54224L8.58571 12.1661C7.91084 12.0068 6.57985 11.2194 5.68003 10.3196C4.7802 9.4198 4.00223 8.08881 3.83351 7.40457ZM11.2571 6.56098C10.7697 6.56098 10.3197 6.36415 9.97294 6.02671C9.62613 5.6799 9.43867 5.22062 9.43867 4.73321C9.43867 4.25518 9.62613 3.7959 9.97294 3.44909C10.3197 3.11166 10.7697 2.91482 11.2571 2.91482C11.7445 2.91482 12.2038 3.11166 12.5412 3.44909C13.2535 4.16145 13.2535 5.31435 12.5412 6.02671C12.2038 6.36415 11.7445 6.56098 11.2571 6.56098Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.67124 8.10756L0.168606 7.78888C0.0936209 7.7795 0.0373819 7.73264 0.00926235 7.66702C-0.00948399 7.60141 -0.000110821 7.52643 0.0561282 7.47019L3.64605 3.88964C3.68355 3.84277 3.73978 3.82402 3.79602 3.8334L6.54236 4.18021L2.84933 7.86386C2.77435 7.93885 2.71811 8.0232 2.67124 8.10756Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.38887 16C8.37012 16 8.35138 15.9906 8.33263 15.9906C8.25764 15.9625 8.21078 15.9063 8.2014 15.8313L7.89209 13.3286C7.97645 13.2818 8.06081 13.2255 8.12642 13.1505L11.8194 9.45752L12.1663 12.1945C12.1663 12.2601 12.1475 12.3163 12.11 12.3538L8.52009 15.9438C8.49197 15.9812 8.43573 16 8.38887 16Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.196767 15.9904C0.149901 15.9904 0.103035 15.9716 0.0655427 15.9341C0.00930372 15.8779 -6.94441e-05 15.7935 0.0280501 15.7279C0.178021 15.3624 0.38423 14.6969 0.487335 13.6002C0.646679 11.9224 1.46214 11.6412 1.95892 11.6318C2.05265 11.8474 2.18388 12.0536 2.36197 12.2317L3.77732 13.6471C3.95541 13.8158 4.15224 13.9564 4.36783 14.0501C4.34908 14.5094 4.08663 15.353 2.39946 15.5123C1.3028 15.6154 0.637306 15.8216 0.271752 15.9716C0.243633 15.981 0.224887 15.9904 0.196767 15.9904Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.10841 13.8253C4.70537 13.8253 4.33044 13.6659 4.03987 13.3847L2.62452 11.9694C2.03401 11.3695 2.03401 10.4134 2.62452 9.81354L2.78387 9.66357C2.79324 9.69169 2.80261 9.71044 2.81199 9.73856C3.14942 10.4603 3.71181 11.1539 4.2742 11.7257C4.76161 12.2131 5.54895 12.8692 6.3363 13.216L6.16758 13.3847C5.88639 13.6659 5.50209 13.8253 5.10841 13.8253Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_383_861">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Launching Soon</span>
            </div>

            <div className="flex items-center gap-2 text-base">
              <PiTimer />
              <p>22 days to go</p>
            </div>
          </div>

          <h2 className="lg:text-6xl sm:text-5xl xs:text-3xl font-bold">
            Book it.
          </h2>
          <h1 className="lg:text-6xl sm:text-5xl xs:text-3xl font-bold">
            Can't Go?
          </h1>
          <h1
            className="lg:text-6xl sm:text-5xl xs:text-3xl font-bold mb-6 bg-cover bg-center inline-block px-4 lg:ml-[-60px] py-2 xs:ml-[-30px] md:ml-[-50px] md:pl-12 md:pb-3 xs:pl-8 lg:pl-16 pb-3 xs:pb-2 sm:ml-[-60px]"
            style={{
              backgroundImage: `url(${swapBg})`,
              backgroundSize: "100% 100%",
            }}
          >
            Swap it.
          </h1>

          <p className="mb-8 text-sm sm:text-base lg:w-104">
            The first app where you can safely swap your event tickets when life
            happens and turn your plans into money.
          </p>

          {/* Get Notified (Visible only on lg and above) */}
          <div className="hidden lg:block">
            <p className="mb-2 text-sm sm:text-base">
              Get notified when we launch
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-white bg-transparent border border-white/30 rounded-md sm:rounded-l-md sm:rounded-r-none placeholder-white outline-none lg:w-70 w-full"
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
          <div className="text-center mb-4 lg:mr-10">
            <h2 className="text-xl font-semibold mb-2 lg:mt-10">
              How Eswap Works
            </h2>
            <p className="text-sm text-gray-300">
              See what you'll be able to do when we launch
            </p>
          </div>

          {/* Tab Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            {/* Card */}
            <div className="flex-1 backdrop-blur-md bg-[#646464a4]/30 p-6 lg:mr-10 rounded-2xl space-y-6 text-white w-full">
              {/* Tabs */}
              <div className="flex justify-between p-1 bg-black/60 rounded-xl text-sm font-medium">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`w-1/3 px-2 py-3 transition flex flex-col items-center text-center ${
                      activeTab === tab
                        ? "bg-[#ff1f42] text-white rounded-xl"
                        : ""
                    }`}
                  >
                    <div className="text-lg">
                      {tab === "book" && <TbTicket />}
                      {tab === "Swap" && <PiArrowsClockwise />}
                      {tab === "Experience" && "🪩"}
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
      <h1 className="hidden text-[#4A5565] lg:block px-30 mt-10">
        Copyright © 2025 Theories. All rights reserved.
      </h1>

      {/* Bottom Get Notified Section (visible only on sm/md/xs) */}
      <div className="block lg:hidden px-4 sm:px-10 md:px-20 pb-10">
        <p className="mb-2 text-sm sm:text-base">Get notified when we launch</p>
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
        <h1 className="block text-[#4A5565] lg:hidden">
          Copyright © 2025 Theories. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
