import { Outlet } from "react-router";
import { Header } from "./header";

export function AppLayout() {
  return(
    <div className="w-full h-screen flex flex-col items-center bg-gray-400 text-gray-100">
      <main className="p-3 w-[80%] lg:w-full">
        <Header/>
        <Outlet/>
      </main>
    </div>
  )
}