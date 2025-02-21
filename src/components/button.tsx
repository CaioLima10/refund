import React from "react";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
}

export function Button({ children, type="button", isLoading, ...rest }: Props){
  return(
    <button 
      type={type} 
      { ...rest } 
      disabled={isLoading}
      className="w-full bg-green-100 text-gray-500 h-12 
        rounded-lg cursor-pointer hover:bg-green-200 
        disabled:opacity-60 disabled:cursor-not-allowed"
    >
      { children }
    </button>
  )
}