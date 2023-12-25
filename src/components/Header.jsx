import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdDateRange } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="px-4 py-1 w-full lg:w-[400px] bg-white rounded-md mb-3 lg:mb-0">
        <span className="text-slate-400">Auto Date Range</span>
        <label htmlFor="date" className="flex flex-row items-center gap-2 text-black font-semibold">
          <MdDateRange id="date" className="text-gray-600" /> This Month
        </label>
      </div>
      <div className="px-4 py-1 w-full lg:w-[350px] bg-white rounded-md mb-3 lg:mb-0">
        <span className="text-slate-400">Services</span>
        <select name="service" id="service" className="flex flex-row items-center gap-2 text-black font-semibold">
          <option value="All">All</option>
          <option value="All">1</option>
          <option value="All">2</option>
        </select>
      </div>
      <div className="px-4 py-1 w-full lg:w-[350px] bg-white rounded-md">
        <span className="text-slate-400">Posts</span>
        <select name="service" id="service" className="flex flex-row items-center gap-2 text-black font-semibold">
          <option value="All">All</option>
          <option value="All">1</option>
          <option value="All">2</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
