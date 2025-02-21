import { Route, Routes } from "react-router";
import { SignIn } from "../pages/signIn";
import { AuthLayout } from "../components/auth-layout";
import { SignUp } from "../pages/signup";
import { NotFound } from "../pages/notfound";

export function AuthRoutes() {
  return(
    <Routes>
      <Route path="/" element={<AuthLayout/>}>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}