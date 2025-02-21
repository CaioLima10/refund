import { Outlet } from "react-router";

import LogoSvg from "../assets/logo.svg"


export function AuthLayout() {
  return(
    <div className="w-full h-screen bg-gray-400 flex flex-col
       justify-center items-center text-gray-100 shadow-md">
      <main className="bg-gray-500 p-8 rounded-md flex flex-col items-center">
        <img src={LogoSvg} alt="logo-refund" className="my-8"/>
        <Outlet/>
      </main>
    </div>
  )
}