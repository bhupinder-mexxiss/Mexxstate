import React, { useState } from "react";
import bannerImg from "../../assets/images/banner.png";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import searchIcon from "../../assets/icons/searchIcon.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const [isActive, setIsActive] = useState("Rent");
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="pt-36 pb-40 sm:py-[170px] 2xl:pt-[200px] 2xl:pb-[180px] banner relative"
      >
        <div className="container mx-auto relative z-0">
          <div className="flex justify-center items-center flex-col">
            <h3 className="text-3xl sm:text-[38px] md:text-5xl lg:text-[56px] xl:text-[56px] flex flex-wrap sm:flex-nowrap justify-center flex-col xs:flex-row text-center font-medium text-white w-fit">
              Find Your{" "}
              <span className="flex">
                &nbsp;Dream&nbsp;
                <span className="text-[#56c1c8]">
                  <Typewriter
                    className=""
                    options={{
                      autoStart: true,
                      loop: true,
                      strings: ["Appartment", "Plaza", "House"],
                    }}
                  />
                </span>
              </span>
            </h3>
            <p className="text-white text-sm xs:text-base sm:text-xl tracking-wide mt-2 sm:mt-3">
              Unlock the door to your dream home
            </p>
            <Link to="/contact-us" className="bg-primary text-white py-2.5 rounded-full hover:opacity-90 duration-300 px-10 mt-8">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="relative z-0 mt-[-60px] sm:mt-[-66px] md:mt-[-72px] lg:-mt-[42px] seachTab ">
        <div className="container mx-auto">
          <div className="p-3 sm:p-5 lg:px-7 xl:py-5 bg-white rounded-xl lg:rounded-full max-w-[1026px] mx-auto border border-primary shadow-lg">
            <div className=" lg:flex gap-2 xl:gap-3 items-center justify-between">
              <div className="basis-3/5 flex flex-wrap xs:flex-nowrap lg:justify-between gap-1.5 xs:gap-2 xl:gap-3 mb-3 lg:mb-0">
                <button className={`py-2 text-nowrap flex-1 px-4 md:px-8 lg:px-5 rounded-xl  sm:rounded-3xl md:rounded-full border text-sm xs:text-base md:text-lg ${
                    isActive === "Rent"
                      ? "bg-primary border-primary text-white font-medium"
                      : "border-border1 text-text2"
                  }`}
                  onClick={() => setIsActive("Rent")}
                >
                  Rent
                </button>
                <button className={`py-2 text-nowrap flex-1 px-4 md:px-8 lg:px-5 rounded-xl  sm:rounded-3xl md:rounded-full border text-sm xs:text-base md:text-lg ${
                    isActive === "Buy"
                      ? "bg-primary border-primary text-white font-medium"
                      : "border-border1 text-text2"
                  }`}
                  onClick={() => setIsActive("Buy")}
                >
                  Buy
                </button>
                <button className={`py-2 text-nowrap flex-1 px-4 md:px-8 lg:px-5 rounded-xl  sm:rounded-3xl md:rounded-full border text-sm xs:text-base md:text-lg ${
                    isActive === "New Project"
                      ? "bg-primary border-primary text-white font-medium"
                      : "border-border1 text-text2"
                  }`}
                  onClick={() => setIsActive("New Project")}
                >
                  New Project
                </button>
                <button className={`py-2 text-nowrap flex-1 px-4 md:px-8 lg:px-5 rounded-xl  sm:rounded-3xl md:rounded-full border text-sm xs:text-base md:text-lg ${
                    isActive === "Commercial"
                      ? "bg-primary border-primary text-white font-medium"
                      : "border-border1 text-text2"
                  }`}
                  onClick={() => setIsActive("Commercial")}
                >
                  Commercial
                </button>
              </div>
              <div className="basis-2/5 py-1.5 pl-3 md:pl-4 pr-2 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex">
                <input
                  type="text"
                  className="lg:w-auto flex-1 border-none ring-0 focus:ring-0 text-text2 text-sm xs:text-base md:text-lg font-normal px-0 py-0 leading-4 md:leading-8 placeholder:text-text2 pr-3"
                  placeholder="Search City, community or building"
                />
                <span className="min-w-8 min-h-8 rounded-full flex items-center justify-center bg-primary cursor-pointer  ">
                  <img src={searchIcon} alt="" className=" w-2.5 md:w-[15px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
