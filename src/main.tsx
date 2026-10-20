import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'

import { Header } from "./components/header/header"
import { Hero } from "./components/hero/hero"
import { Services } from "./components/services/services"
import {About} from "./components/about_us/about"
import {Videos} from "./components/videos/videos"


import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Videos/>
    </BrowserRouter>
  </StrictMode>
);
