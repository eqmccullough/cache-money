import * as React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Auth from "../../utils/auth";
import { AnimatePresence, motion } from 'framer-motion'

export default function ResponsiveGrid() {
  const bill = require('../../assets/budgie-bill.jpg')
  return (
    <> 
      <div className="home-screen">
      <div className="bill-box">
      <motion.div  
      animate={{
        scale: [0.1, 0.2, 0.4, 0.7, 1],
        rotateX: [0, 90, 180, 270, 360],
      }}
      exit={{ x: window.innerWidth }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}>
          <img src={bill} className="bill-logo"></img>
          </motion.div>
        
        <motion.div
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }} 
          transition={{
            duration: 1,
            Delay: 1,
          }}>
        <h6> The only app you will ever need to manage your money and ball on a budgie.</h6>
        {/* <div className="home-button-group"> 
        <Link to="/login"><Button id="home-button" variant="contained" sx={{ m: 1 }} size="large">Login</Button></Link>
              <Link to="/signup"><Button id="home-button" variant="contained" sx={{ m: 1 }} size="large">SignUp</Button></Link>
        </div> */}
          </motion.div>
          </div>
      </div> 
      
        
      

    </>
  );
}
