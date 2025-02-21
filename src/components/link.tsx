import { ReactNode } from "react";
import { NavLink } from "react-router";

type Props = {
  children: ReactNode
  to: string
}

export function Link({children, to,  ...rest}: Props) {
  return(
  <NavLink to={to}
      {...rest}
      className="text-sm font-semibold text-gray-100 mt-10 mb-7
       hover:text-green-800 transition ease-linear"
    >{children}
  </NavLink>
  )
}