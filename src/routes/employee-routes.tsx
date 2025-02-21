import { Route, Routes } from "react-router";
import { Refund } from "../pages/refund";
import { NotFound } from "../pages/notfound";
import { AppLayout } from "../components/app-layout";

export function EmployeeRoutes() {
  return(
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<Refund/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}