import React from "react";

type Props = React.ComponentProps<"span"> & {}

export function Danger({ children, ...rest }: Props) {
return(
  <span 
    { ...rest }
    className="text-red-500 text-sm"
    >
    { children }
  </span>
)  
}