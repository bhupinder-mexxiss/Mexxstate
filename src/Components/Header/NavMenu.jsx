import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavMenu = () => {
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const location = useLocation();
  const explorePaths = ["/explore", "/blog", "/insightshub", "/mortgage"];
  const isExploreActive = explorePaths.includes(location.pathname);

  return (
    <div className="hidden lg:block">
      <ul className="flex gap-6 xl:gap-8 2xl:gap-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              ` xl:text-lg text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary text-[#00C4F4] isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/buy"
            className={({ isActive, isPending }) =>
              ` xl:text-lg text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary text-[#00C4F4] isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            Buy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rent"
            className={({ isActive, isPending }) =>
              ` xl:text-lg text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary !text-[#00C4F4] isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            Rentals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/commercial"
            className={({ isActive, isPending }) =>
              ` xl:text-lg text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary !text-[#00C4F4] isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            Commercial
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-projects"
            className={({ isActive, isPending }) =>
              ` xl:text-lg text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary !text-[#00C4F4] isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            New projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/find-agent"
            className={({ isActive, isPending }) =>
              ` xl:text-lg text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary !text-[#00C4F4] isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            Find Agent
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
