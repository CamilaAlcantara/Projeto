import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"

import Home from "./components/pages/home/Home"
import SideBar from "./components/pages/sidebar/SideBar"

function Rotas() {
  return (
    <div className="flex">
      <BrowserRouter>
        <SideBar />
        <div className="flex-col w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={""} />
            <Route path="/register" element={""} />
            <Route path="/geral/:idSingle" element={""} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default Rotas