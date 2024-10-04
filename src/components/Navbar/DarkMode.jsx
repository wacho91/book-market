import { useState } from "react"

import DarkPng from "../../assets/website/dark-mode-button.png"
import LightPng from "../../assets/website/light-mode-button.png"

const DarkMode = () => {
  return (
    <div className="">
      <img 
        src={LightPng} 
        alt=""  
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all hover:drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
      />
      {/* <img src={DarkPng} alt="" className="w-12"/> */}
    </div>
  )
}

export default DarkMode
