import React, { useState } from "react";

import line from "../assest/Line.svg";
import Login from "./Login";
import SignUp from "./SignUp";

interface Tab {
  id: number;
  label: string;
  component: React.ReactNode;
}

const Taps: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [
    {
      id: 0,
      label: "انشاء حساب",
      component: <SignUp />,
    },
    {
      id: 1,
      label: "تسجيل دخول",
      component: <Login />,
    },
  ];

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className="p-[0.6rem]">
      <div className="relative mt-4 flex items-center justify-around border-b-2 text-xl text-[#7D7E82]">
        <div className="absolute right-[50%]">
          <img src={line} alt="lineImg" />
        </div>
        <div className="tab flex w-full justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${activeTab === tab.id ? "active" : ""}
             "bg-white border-b-4" }
            border-white px-12 py-2 text-gray-500`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">{tabs[activeTab].component}</div>
    </div>
  );
};

export default Taps;
