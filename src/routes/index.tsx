import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routes";
// import { EmployeeRoutes } from "./employee-routes";

export function Routes() {
  return(
    <BrowserRouter>
      <AuthRoutes/>
      {/* <EmployeeRoutes/> */}
    </BrowserRouter>
  )
}