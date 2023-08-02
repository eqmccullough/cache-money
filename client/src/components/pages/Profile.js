import * as React from "react";
import PiePlot from "../PiePlot";
import PiePlot1 from "../PiePlot1";
import Drawer from "../Drawer";
import DataTable from "../Table";
import "../../styles/home.css";

export default function Profile() {
  return (
    <>
        <div className="chart-container">
          <div id="pie-box">
            <PiePlot />
            <h3> Goal </h3>
          </div>
          <div id="pie-box">
            <PiePlot1 />
            <h3> Current </h3>
          </div>
        </div>
        <div className="table-container">
              <DataTable/>    
        </div>
      </>
  );
}