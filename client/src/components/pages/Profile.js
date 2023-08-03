import * as React from "react";
import PiePlot from "../PiePlot";
import PiePlot1 from "../PiePlot1";
import Drawer from "../Drawer";
import DataTable from "../Table";
import { AnimatePresence, motion } from 'framer-motion'
import "../../styles/home.css";


export default function Profile() {
  return (
    <>

      <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 1 }}
    >

    <Drawer />

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
      </motion.div>
      <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 80 }}
      exit={{ x: window.innerWidth }}
      transition={{ type: "tween", delay: 2 }}
    >
        <div className="table-container">
              <DataTable/>    
      </div>
      </motion.div>
      </>
  );
}