"use client";
// src/CandlestickChart.js

import React from "react";
import ApexCharts from "react-apexcharts";
import { candlestickData } from "../constants";

const options = {
  chart: {
    type: "candlestick",
    height: 350,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  title: {
    text: "Stock Price",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};

const CandlestickChart = () => (
  <div className="m-auto w-100 md:w-[80%]">
    <h2>Stock Chart</h2>
    <ApexCharts
      type="candlestick"
      series={[{ data: candlestickData }]}
      options={options as unknown as any}
      height={350}
    />
  </div>
);

export default CandlestickChart;
