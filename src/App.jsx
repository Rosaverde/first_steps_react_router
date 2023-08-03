import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./About"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< App/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}
