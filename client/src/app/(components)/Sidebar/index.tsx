import React from "react";
import { useState } from "react";
const [showProject, setshowProject] = useState(true);
const [showPriority, setshowPriority] = useState(true);

const Sidebarclassname = `fixed flex flex-col h-[100%] justify-between shadow-xl 
transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
w-64 `;

const Sidebar = () => {
  return (
    <div className={Sidebarclassname}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px]"></div>
      </div>
    </div>
  );
};

export default Sidebar;
