import React from "react";

type Props = React.ComponentProps<"form"> & {}


export function Form({ children, ...rest }: Props) {
  return (
    <form 
    { ...rest }
    className="max-w-full w-96 flex flex-col 
    items-center justify-center gap-4"
    >
      { children }
    </form>
  )
}