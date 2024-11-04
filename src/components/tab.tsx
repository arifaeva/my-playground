"use client";

import React, { useEffect, useRef, useState } from "react";

interface IData {
  title: string;
  content: string;
}
interface TabComponentProps {
  datas: IData[];
}

export const TabComponent: React.FC<TabComponentProps> = ({ datas }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  return (
    <div className="bg-sky-100 flex justify-between items-center py-12">
      <div className="max-w-md flex flex-col gap-y-2 w-full">
        <div className="bg-blue-400 p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-white">
          {datas.map((data, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              className={`outline-none w-full hover:bg-blue-300 rounded-xl text-center focus:ring-2 focus:bg-white focus:text-blue-600 ${
                selectedTab === index ? "ring-2 bg-white text-blue-600" : ""
              }`}
              key={index}
              onClick={() => setSelectedTab(index)}
            >
              {data.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-2 rounded-xl">
          {datas.map((data, index) => (
            <div
              key={index}
              className={`${
                selectedTab === index ? "" : "hidden text-black"
              } text-black`}
            >
              {data.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
