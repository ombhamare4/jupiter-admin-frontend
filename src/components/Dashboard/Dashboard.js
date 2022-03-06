import React from "react";

import SideBar from "../SlideBar/SideBar";
import ScreenPage from "../ScreenPage/ScreenPage";

const Dashboard = () => {
  return (
    <div className="text-lg">
      {/* <div className="sticky">
        <h1 className="p-3 text-center bg-blue-800 ">Navbar</h1>
      </div> */}
      <main className="relative">
        <div className="h-screen flex">
          <div className="  sm:hidden w-52">
            <SideBar />
          </div>
          <div className="flex-1 flex overflow-hidden ">
            <div className="flex-1 overflow-y-scroll">
              <ScreenPage />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
