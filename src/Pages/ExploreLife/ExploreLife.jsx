import {
  ApartmentOutlined,
  HolidayVillageOutlined,
  HouseboatOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowLeftOutlined,
  PhotoCameraOutlined,
} from "@mui/icons-material";
import React, { useRef } from "react";
import searchIcon from "../../assets/icons/searchIcon.png";
import useHorizontalScroll from "../../Components/utils/useHorizontalScroll";
import greenAreas from "../../assets/icons/greenAreas.png";
import Slider from "react-slick";
import house1 from "../../assets/images/house1.png";

const ExploreLife = () => {
  const {
    scrollRef: communityScrollRef,
    handleMouseDown: handleCommunityMouseDown,
    handleMouseLeave: handleCommunityMouseLeave,
    handleMouseUp: handleCommunityMouseUp,
    handleMouseMove: handleCommunityMouseMove,
  } = useHorizontalScroll();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="pt-6 pb-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button className=" text-text2 text-sm font-medium flex items-center">
            <KeyboardArrowLeftOutlined className="!text-2xl" /> Back{" "}
          </button>
        </div>
        <div className="mt-6">
          <div className="text-center mt-10 max-w-[900px] mx-auto">
            <h4 className="text-[#333333] text-3xl font-bold">
              Explore Life In Dubai
            </h4>

            <div className="py-1.5 pl-3 md:pl-6 pr-2 md:pr-3 rounded-full border border-border1 hover:border-primary relative hover:text-primary text-sm duration-300 cursor-pointer font-medium flex mt-8">
              <input
                type="text"
                className="inline-block w-full border-none ring-0 focus:ring-0 text-text2 text-sm xs:text-base font-normal px-0 py-0 leading-4 md:leading-8 pr-4 placeholder:text-text2 bg-transparent"
                placeholder="Looking for something special?"
              />
              <span className="min-w-8 min-h-8 rounded-full flex items-center justify-center bg-primary ">
                <img src={searchIcon} alt="" className=" w-3 md:w-[15px]" />
              </span>
            </div>
          </div>
          <div className="mt-8">
            <div
              className="inline-flex overflow-y-hidden scrollHide select-none"
              ref={communityScrollRef}
              onMouseDown={handleCommunityMouseDown}
              onMouseLeave={handleCommunityMouseLeave}
              onMouseUp={handleCommunityMouseUp}
              onMouseMove={handleCommunityMouseMove}
            >
              <div className=" *:duration-300">
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center font-medium gap-1.5 rounded-full bg-primary border-primary text-white">
                  <img src={greenAreas} alt="" className="w-4" />{" "}
                  Budget-friendly
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Luxurious
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Family-friendly
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  High-rise
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Waterfront
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" /> Urban
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Suburban
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Affordable
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" /> Green
                  spaces
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Pet-friendly
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h6 className="text-[#333333] text-xl font-semibold">
              Best Areas to Live in Dubai
            </h6>
            <p className="text-[#333333] text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus.
            </p>
            <button className="flex items-center gap-3 text-[#00858E] mt-3">
              Read more <KeyboardArrowDownOutlined />
            </button>
          </div>
          <div className="mt-8">
            <Slider {...settings}>
              <div className="px-3">
                <div className="w-full rounded-2xl overflow-hidden relative mt-5">
                  <div className="h-full max-h-[487px]">
                    <img
                      src={house1}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div
                    className="bg-white rounded-lg border border-border1 absolute bottom-3 left-3 px-2.5 py-1 flex items-center justify-center gap-1.5 !text-text2 cursor-pointer"
                    onClick={() => setOpenModal(true)}
                  >
                    <span>
                      <PhotoCameraOutlined />
                    </span>
                    Show 8 photos
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="w-full rounded-2xl overflow-hidden relative mt-5">
                  <div className="h-full max-h-[487px]">
                    <img
                      src={house1}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div
                    className="bg-white rounded-lg border border-border1 absolute bottom-3 left-3 px-2.5 py-1 flex items-center justify-center gap-1.5 !text-text2 cursor-pointer"
                    onClick={() => setOpenModal(true)}
                  >
                    <span>
                      <PhotoCameraOutlined />
                    </span>
                    Show 8 photos
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="w-full rounded-2xl overflow-hidden relative mt-5">
                  <div className="h-full max-h-[487px]">
                    <img
                      src={house1}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div
                    className="bg-white rounded-lg border border-border1 absolute bottom-3 left-3 px-2.5 py-1 flex items-center justify-center gap-1.5 !text-text2 cursor-pointer"
                    onClick={() => setOpenModal(true)}
                  >
                    <span>
                      <PhotoCameraOutlined />
                    </span>
                    Show 8 photos
                  </div>
                </div>
              </div>
            </Slider>
            <div className="mt-5 flex items-end gap-3">
              <span className="text-[#333333] text-2xl font-semibold">
                Palm Jumeirah
              </span>
              <span className="px-2 py-1 text-sm text-white bg-[#00A663] rounded">
                4.1/5
              </span>
            </div>
          </div>
          <div className="mt-8">
            <h6 className="text-[#333333] text-xl font-semibold">About</h6>
            <p className="text-[#333333] text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus.
            </p>
            <button className="flex items-center gap-3 text-[#00858E] mt-3">
              Read more <KeyboardArrowDownOutlined />
            </button>
          </div>
          <div className="mt-8">
            <h6 className="text-[#333333] text-xl font-semibold">
              Property Type
            </h6>
            <div className="flex gap-4 mt-6">
              <div className="py-3 px-5 bg-white rounded-lg shadow-[0px_2px_4px_0px_#0000000D] text-center text-[#333333] ">
                <ApartmentOutlined />
                <p className="text-sm py-2 font-medium">Apartment</p>
                <hr />
                <span className="mt-1 inline-block text-lg">%76</span>
              </div>
              <div className="py-3 px-5 bg-white rounded-lg shadow-[0px_2px_4px_0px_#0000000D] text-center text-[#333333] ">
                <HolidayVillageOutlined />
                <p className="text-sm py-2 font-medium">Villa</p>
                <hr />
                <span className="mt-1 inline-block text-lg">%76</span>
              </div>
              <div className="py-3 px-5 bg-white rounded-lg shadow-[0px_2px_4px_0px_#0000000D] text-center text-[#333333] ">
                <HouseboatOutlined />
                <p className="text-sm py-2 font-medium">Villa</p>
                <hr />
                <span className="mt-1 inline-block text-lg">%76</span>
              </div>
            </div>
            <p className="text-[#707070] text-sm mt-5">
              * Distribution of property types in this community.
            </p>
            <p className="text-[#333333] font-semibold mt-5">
              Apartment prices starting from
            </p>
            <ul className="mt-4 flex-col flex gap-3">
              <li className="flex gap-1 text-[#333333]">
                <span className="font-semibold">For rent : </span>
                <span>75,000 AED/year</span>
              </li>
              <li className="flex gap-1 text-[#333333]">
                <span className="font-semibold">For Buy : </span>
                <span>75,000 AED/year</span>
              </li>
            </ul>
            <p className="text-[#707070] text-sm mt-5">
              * Based on listing prices in last 3 months.
            </p>
          </div>
          <hr className="my-8 border-gray-300" />
          <div>
            <h6 className="text-[#333333] text-xl font-semibold">
              Reviews from residents
            </h6>
            <div className="mt-6">
              <div className="shadow-[0px_8px_15px_0px_#00000026] rounded-xl p-4 border border-[#F7F7F7] max-w-[400px]">
                <div className="flex items-center gap-3">
                  <span className="rounded text-white bg-[#F7C55F] p-3">
                    3/5
                  </span>
                  <div>
                    <p className="text-sm text-[#333333]">
                      Tanzanite tiara residences
                    </p>
                    <p className="text-xs text-[#707070]">
                      Shimas, 9 years ago
                    </p>
                  </div>
                </div>
                <p className="mt-5 mb-3 text-[#00858E] text-sm font-medium border-b border-[#00858E] w-fit">
                  Tiara Residences
                </p>
                <p className="line-clamp-3 text-sm text-[#33333]">
                  Love the pool , Construction site is too noisy , gym and beach
                  are amazing , solid Restuarant management is really poor ,
                  kids friendly , nice view and good sec...
                </p>
                <button className="mt-2 text-[#00858E] text-sm font-medium border-b border-[#00858E] w-fit">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid md:grid-cols-2 gap-5">
              <button className="text-[#00858E] w-full font-medium py-2 px-4 rounded-md bg-white border border-[#8C84CC">
                Learn more about Palm Jumeirah
              </button>
              <button className="text-[#fff] w-full font-medium py-2 px-4 rounded-md bg-[#EA3934] border border-[#EA3934">
              Discover the available properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLife;
