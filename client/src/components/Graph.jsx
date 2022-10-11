import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Label from "./Label";
import { chart_Data, getTotal } from "../helper/helper";
import { default as api } from "../store/apiSlice";

Chart.register(ArcElement);

export default function Graph() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let graphData;

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <div className="flex justify-content pt-4 max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {graphData}
          <h3 className="mb-4  text-center font-bold title">
            Total Expense
            <span className="block text-3xl text-emerald-400">
              ${getTotal(data) ?? 0}
            </span>
          </h3>
        </div>

        <div className="flex flex-col py-10 gap-4">
          {/* Labels */}
          <Label></Label>
        </div>
      </div>
    </div>
  );
}
