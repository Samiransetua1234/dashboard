import React from "react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import { store } from "../redux_stor/store";
import CardWrap from "../components/CardWrap";
import ChartWrap from "../components/ChartWrap";

function DashBoard() {
  return (
    <>
      <section className="bg-slate-100  h-screen overflow-auto pb-48 w-full">
        <article className="px-4 md:px-7  py-5 flex flex-col flex-wrap gap-4  w-full">
          <h1 className="text-3xl my-5 md:text-4xl font-semibold">
            Executive Reporting Dashboard
          </h1>
          <Header/>
          <Provider store={store}>
          <div className=" flex gap-5 flex-wrap py-3 w-full">
          <CardWrap />
        </div>
        
        <ChartWrap/>
        
        </Provider>
        </article>
      </section>
    </>
  );
}

export default DashBoard;
