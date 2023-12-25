import React from "react";
import { Chart as Chartjs } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { setType } from "../redux_stor/features/ChartSlice";
import { useDispatch } from "react-redux";

const ChartGen = ({ type, data, id }) => {
  const dispatch = useDispatch();

  return (
    <div className=" w-[100%] md:w-[95%] lg:w-[40%] h-80 flex flex-col gap-2 items-center ">
      <form className="w-full">
        <label
          htmlFor="services"
          className="  bg-white flex py-1 flex-col justify-center items-center px-3 rounded-lg w-full"
        >
          <span className="my-1 font-bold text-slate-400 text-sm  ">
            Chart Type
          </span>
          <select
            name="services"
            id="services"
            className="rounded-md px-3 py-1 w-full bg-white"
            value={type}
            onChange={e => dispatch(setType({ type: e.target.value, id }))}
          >
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="radar">Radar</option>
            <option value="pie">Pie</option>
          </select>
        </label>
      </form>
      <Chart type={type} data={data} className="h-full overflow-auto w-full " />
    </div>
  );
};

export default ChartGen;