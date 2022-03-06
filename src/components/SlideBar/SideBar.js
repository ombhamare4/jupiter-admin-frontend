import { useState } from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineInventory2, MdPeopleAlt } from "react-icons/md";
import { FaPeopleCarry, FaCartArrowDown, FaBullhorn } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { AiFillTags, AiFillSetting } from "react-icons/ai";

// FaPeopleCarry
const SideBar = () => {
  return (
    // <Router>
      <div className=" h-screen text-white">
        <div className="">
          <ul>
            <li>
              Main
              <ul>
                <li className="p-2 font-semibold hover:shadow-xl transition-all duration-200 ease-in-out  hover:bg-white hover:text-blue-700 hover:rounded-l-full active:bg-white">
                  <NavLink to="/">
                    <h1 className="flex items-center">
                      <span className="mr-2">
                        <GoHome />
                      </span>
                      Home
                    </h1>
                  </NavLink>
                </li>

                <li className="p-2 font-semibold hover:shadow-xl transition-all duration-200 ease-in-out  hover:bg-white hover:text-blue-700 hover:rounded-l-full active:bg-white">
                  <NavLink to="/inventory">
                    <h1 className="flex items-center">
                      <span className="mr-2">
                      <MdOutlineInventory2 />
                      </span>
                      Inventory
                    </h1>
                  </NavLink>
                </li>

                <li className="p-2 font-semibold hover:shadow-xl transition-all duration-200 ease-in-out  hover:bg-white hover:text-blue-700 hover:rounded-l-full active:bg-white">
                  <NavLink to="/customers">
                    <h1 className="flex items-center">
                      <span className="mr-2">
                      <MdPeopleAlt />
                      </span>
                      Customers
                    </h1>
                  </NavLink>
                </li>

                <li className="p-2 font-semibold hover:shadow-xl transition-all duration-200 ease-in-out  hover:bg-white hover:text-blue-700 hover:rounded-l-full active:bg-white">
                  <NavLink to="/analytics">
                    <h1 className="flex items-center">
                      <span className="mr-2">
                      <VscGraphLine />
                      </span>
                      Analytics
                    </h1>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              Products
              <ul>
              <li className="p-2 font-semibold hover:shadow-xl transition-all duration-200 ease-in-out  hover:bg-white hover:text-blue-700 hover:rounded-l-full active:bg-white">
                  <NavLink to="/products">
                    <h1 className="flex items-center">
                      <span className="mr-2">
                      <AiFillTags />
                    </span>
                    Products
                    </h1>
                  </NavLink>
                </li>
                <li className="p-2 font-semibold hover:shadow-xl transition-all duration-200 ease-in-out  hover:bg-white hover:text-blue-700 hover:rounded-l-full active:bg-white">
                  <NavLink to="/orders">
                    <h1 className="flex items-center">
                      <span className="mr-2">
                      <FaCartArrowDown />
                    </span>
                    Orders
                    </h1>
                  </NavLink>
                </li>
                <li className="p-2 font-semibold hover:shadow-xl transition-all duration-200 ease-in-out  hover:bg-white hover:text-blue-700 hover:rounded-l-full active:bg-white">
                  <NavLink to="/shipments">
                    <h1 className="flex items-center">
                      <span className="mr-2">
                      <FaPeopleCarry />
                    </span>
                    Shipments
                    </h1>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              Others
              <ul>
              <li className="p-2 font-semibold hover:shadow-xl transition-all duration-200 ease-in-out  hover:bg-white hover:text-blue-700 hover:rounded-l-full active:bg-white">
                  <NavLink to="/marketing">
                    <h1 className="flex items-center">
                      <span className="mr-2">
                      <FaBullhorn />
                    </span>
                    Marketing
                    </h1>
                  </NavLink>
                </li>
                <li className="p-2 font-semibold hover:shadow-xl transition-all duration-200 ease-in-out  hover:bg-white hover:text-blue-700 hover:rounded-l-full active:bg-white">
                  <NavLink to="/account">
                    <h1 className="flex items-center">
                      <span className="mr-2">
                      <AiFillSetting />
                    </span>
                    Account Setting
                    </h1>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default SideBar;
