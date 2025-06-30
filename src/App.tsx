// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from "react-router";
import Header from './components/Header';
import { ThemeProvider } from "./providers/theme-provider";
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="lg:flex text-foreground bg-background">
        <div className="lg:order-2 gap-0 flex flex-col justify-between w-full">
          <Header />
          <div className="flex-1 bg-secondary-background min-h-[100svh] overflow-hidden">
            <Outlet />
          </div>
          <Footer />
        </div>
        <Aside />
      </div>
    </ThemeProvider>
  )
}

export default App
