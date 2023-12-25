// ChartWrap.jsx
import React from "react";
import { useSelector } from "react-redux";
import ChartGen from "./ChartGen";

const ChartWrap = () => {
  const state = useSelector(state => state.chart_data.charts);

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap justify-around">
      {state.map(data => {
        return (
          <ChartGen
            type={data.type}
            key={data.id + data.type}
            id={data.id}
            data={data.data}
          />
        );
      })}
    </div>
  );
};

export default ChartWrap;
