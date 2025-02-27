import {
  KeyboardArrowDownOutlined,
  KeyboardArrowLeftOutlined,
  PhotoCameraOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import house1 from "../../assets/images/house1.png";
import Slider from "react-slick";

const GuruPropertyDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="pt-6 pb-12 productDetail">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button className=" text-text2 text-sm font-medium flex items-center">
            <KeyboardArrowLeftOutlined className="!text-2xl" /> Back{" "}
          </button>
        </div>
        <div className="mt-6">
          <div className="flex flex-col 2xl:flex-row gap-6">
            <div className="2xl:w-[65%]">
              <h4 className="text-[#333333] text-3xl font-bold">
                The Sustainable City
              </h4>
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
              <div className="mt-12">
                <h6 className="text-[#333333] text-xl font-semibold">
                  About The Sustainable City
                </h6>
                <p className="text-sm text-[#707070] my-3">
                  Eco-friendly community  •   Innovative architecture  •  
                  Various Facilities
                </p>
                <p className="text-[#333333] text-sm sm:text-base">
                  The Sustainable City is Dubai's first operational net zero
                  energy city, paving the way for sustainable living in the
                  emirate. It's a unique and vibrant community with a variety of
                  attractions and amenities for families and professionals. The
                  area is characterized by a modern, eco-friendly atmosphere,
                  with a variety of extraordinary features such as solar powered
                  homes designed with energy efficiency in mind to reduce the
                  carbon footprint. It also offers modern villas equipped with
                  state-of-the-art
                </p>
                <button className="flex items-center gap-3 text-[#00858E] inline-block mt-3">
                  Read more <KeyboardArrowDownOutlined />
                </button>
              </div>
              <div className="mt-12 flex-wrap gap-5 flex items-center justify-between">
                <h6 className="text-[#333333] text-3xl font-bold">
                  Price Insights
                </h6>
                <div className="flex items-center gap-3">
                  <select
                    name=""
                    id=""
                    className="border-[#00858E] text-[#00858E] bg-white rounded-lg"
                  >
                    <option value="Rent">Rent</option>
                    <option value="Rent">Buy</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="border-[#00858E] text-[#00858E] bg-white rounded-lg"
                  >
                    <option value="Rent">Villa</option>
                    <option value="Rent">Appartment</option>
                  </select>
                </div>
              </div>
              <div className="mt-12">
                <h6 className="text-[#333333] text-xl font-semibold">
                  Average prices
                </h6>
                <div className="mt-6">
                  <table className="w-full rounded-lg border-2 border-white">
                    <thead>
                      <tr className="bg-white">
                        <th className="text-left text-[#1A1A1A] font-bold p-3">
                          Type
                        </th>
                        <th className="text-left text-[#1A1A1A] font-bold p-3">
                          Avg. Price (AED/ year)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b-2 border-white last:border-0">
                        <td className="text-[#1A1A1A] p-3 border-r-2 border-white last:border-r-0">
                          3 Bedrooms
                        </td>
                        <td className="text-[#1A1A1A] p-3 border-r-2 border-white last:border-r-0">
                          278,000
                        </td>
                      </tr>
                      <tr className="border-b-2 border-white last:border-0">
                        <td className="text-[#1A1A1A] p-3 border-r-2 border-white last:border-r-0">
                          4 Bedrooms
                        </td>
                        <td className="text-[#1A1A1A] p-3 border-r-2 border-white last:border-r-0">
                          278,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-[#707070] mt-3">
                    The data displayed is based on Property Finder’s last 12
                    months listing data.
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <h6 className="text-[#333333] text-xl font-semibold">
                  Frequently asked questions
                </h6>
                <div className="mt-6 text-center">
                  <p className="text-[#333333] text-xl font-semibold">
                    No data available
                  </p>
                  <p className="text-sm text-[#707070] mt-3">
                    The data displayed is based on Property Finder’s last 12
                    months listing data.
                  </p>
                </div>
              </div>
              <hr className="my-12 border-gray-300" />
              <div className="">
                <h6 className="text-[#333333] text-xl font-semibold">
                  People also searched for
                </h6>
                <div className="mt-6">
                  <Slider {...settings}>
                    <div className="px-3">
                      <div className="rounded-2xl p-3 flex gap-4 bg-white">
                        <div className="w-3/12 rounded-2xl overflow-hidden ">
                          <img
                            src={house1}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-[#707070]">
                            Community Insights
                          </p>
                          <h6 className="text-[#333333] text-xl font-semibold py-2">
                            Arabian Ranches
                          </h6>
                          <div className="flex items-center gap-2">
                            <span className="inline-block bg-[#00A663] rounded-lg px-2 py-2 text-sm text-white">
                              4.2/5
                            </span>
                            <span className="text-[#707070] text-xs">
                              18 building reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3">
                      <div className="rounded-2xl p-3 flex gap-4 bg-white">
                        <div className="w-3/12 rounded-2xl overflow-hidden ">
                          <img
                            src={house1}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-[#707070]">
                            Community Insights
                          </p>
                          <h6 className="text-[#333333] text-xl font-semibold py-2">
                            Arabian Ranches
                          </h6>
                          <div className="flex items-center gap-2">
                            <span className="inline-block bg-[#00A663] rounded-lg px-2 py-2 text-sm text-white">
                              4.2/5
                            </span>
                            <span className="text-[#707070] text-xs">
                              18 building reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3">
                      <div className="rounded-2xl p-3 flex gap-4 bg-white">
                        <div className="w-3/12 rounded-2xl overflow-hidden ">
                          <img
                            src={house1}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-[#707070]">
                            Community Insights
                          </p>
                          <h6 className="text-[#333333] text-xl font-semibold py-2">
                            Arabian Ranches
                          </h6>
                          <div className="flex items-center gap-2">
                            <span className="inline-block bg-[#00A663] rounded-lg px-2 py-2 text-sm text-white">
                              4.2/5
                            </span>
                            <span className="text-[#707070] text-xs">
                              18 building reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="2xl:w-[35%] hidden 2xl:block">
              <div className="pt-12">
                <h6 className="text-[#333333] text-xl font-semibold">
                  Properties in The Sustainable City
                </h6>
                <div className="my-5">
                  <div className="grid grid-cols-2 border border-[#c4c4c4] rounded-xl">
                    <button className="py-2 border border-[#00858E] rounded-l-xl capitalize text-[#00858E]">
                      for rent
                    </button>
                    <button className="py-2 rounded-r-xl capitalize text-[#707070]">
                      for rent
                    </button>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="rounded-2xl p-3 flex gap-4 bg-white">
                    <div className="min-w-[120px] max-w-[120px] rounded-2xl overflow-hidden ">
                      <img
                        src={house1}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[#707070]">VILLA</p>
                      <h6 className="text-[#333333] text-base font-semibold py-1">
                        300,000 AED/year
                      </h6>
                      <p className="text-xs text-[#707070] text-nowrap text-ellipsis overflow-hidden">
                        Cluster 3, The Sustainable City, Dubai
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span>4 Beds</span>
                        <span>4 Baths</span>
                        <span>3,800 sqft</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl p-3 flex gap-4 bg-white">
                    <div className="min-w-[120px] max-w-[120px] rounded-2xl overflow-hidden ">
                      <img
                        src={house1}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[#707070]">VILLA</p>
                      <h6 className="text-[#333333] text-base font-semibold py-1">
                        300,000 AED/year
                      </h6>
                      <p className="text-xs text-[#707070] text-nowrap text-ellipsis overflow-hidden">
                        Cluster 3, The Sustainable City, Dubai
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span>4 Beds</span>
                        <span>4 Baths</span>
                        <span>3,800 sqft</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl p-3 flex gap-4 bg-white">
                    <div className="min-w-[120px] max-w-[120px] rounded-2xl overflow-hidden ">
                      <img
                        src={house1}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[#707070]">VILLA</p>
                      <h6 className="text-[#333333] text-base font-semibold py-1">
                        300,000 AED/year
                      </h6>
                      <p className="text-xs text-[#707070] text-nowrap text-ellipsis overflow-hidden">
                        Cluster 3, The Sustainable City, Dubai
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span>4 Beds</span>
                        <span>4 Baths</span>
                        <span>3,800 sqft</span>
                      </div>
                    </div>
                  </div>
                  <button className="inline-block w-full bg-white rounded-xl text-[#00858E] border border-[#00858E] py-2.5">
                    See All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuruPropertyDetail;
