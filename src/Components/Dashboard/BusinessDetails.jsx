import {
  CloudUploadOutlined,
  Delete,
  DeleteOutlined,
  EditOutlined,
  FilePresentOutlined,
} from "@mui/icons-material";
import React from "react";
import house1 from "../../assets/images/house1.png";
import trashIcon from "../../assets/icons/trashIcon.png";

const BusinessDetails = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h6 className="text-lg font-medium">Edit Business Details</h6>
        <div className="flex gap-4">
          <button className="border border-primary text-primary h-9 sm:h-10 px-4 sm:px-10 rounded-lg">
            Discard
          </button>
          <button className="border border-primary bg-primary text-white h-9 sm:h-10 px-4 sm:px-10 rounded-lg">
            Save
          </button>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <div className="bg-[#F7F7F7] rounded-xl w-full p-5">
              <div className="flex items-center gap-8 w-full">
                <div className="relative min-w-20 w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
                  <FilePresentOutlined className="!text-4xl text-[#d5d5d5]" />
                  <button className="absolute -right-3 -bottom-2 w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary">
                    <EditOutlined className="!text-xl" />
                  </button>
                </div>
                <div>
                  <p className="text-[#1D1A22] text-lg font-semibold">
                    OPC Corporation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-xl w-full p-5">
            <p className="text-lg font-medium">Details</p>
            <div className="mt-3.5">
              <form>
                <div className="mb-5">
                  <label className="text-[#77767A] mb-2 inline-block">
                    Name of Business
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value="OPC Corporation"
                    className="bg-white border border-[#D3D8DF] rounded-md w-full"
                  />
                </div>
                <div className="mb-5">
                  <label className="text-[#77767A] mb-2 inline-block">
                    Description
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="bg-white border border-[#D3D8DF] rounded-md w-full"
                    value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
                  ></textarea>
                </div>
                <div className="mb-5">
                  <p className="text-[#77767A] mb-2 inline-block">Documents</p>
                  <label
                    htmlFor="docsFile"
                    className="flex items-center justify-center h-20 bg-white border border-[#D3D8DF] rounded-md w-full gap-2 text-[#898896]"
                  >
                    <CloudUploadOutlined className="text-primary" /> Upload jpg
                    or png
                  </label>
                  <input type="file" className="hidden" id="docsFile" />

                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="w-24 h-24 relative">
                      <button className="w-7 h-7 rounded-full bg-white absolute -right-2 -top-2 border shadow-lg flex items-center justify-center">
                        <DeleteOutlined className="!text-lg text-red-600" />
                      </button>
                      <img
                        src={house1}
                        alt=""
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="w-24 h-24 relative">
                      <button className="w-7 h-7 rounded-full bg-white absolute -right-2 -top-2 border shadow-lg flex items-center justify-center">
                        <DeleteOutlined className="!text-lg text-red-600" />
                      </button>
                      <img
                        src={house1}
                        alt=""
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
