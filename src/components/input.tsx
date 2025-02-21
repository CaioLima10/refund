import React from "react";

type Props = React.ComponentProps<"input"> & {
  legend?: string
}

export function Input({ legend, type="text", ...rest }: Props) {
  return(
    <fieldset className="w-full flex flex-1 focus-within:text-green-100 
      max-h-20 text-gray-200">
      <legend className="uppercase text-inherit text-xxs mb-2">
        { legend }
      </legend>
      <input  
        type={type} 
        { ...rest } 
        className="
          w-full h-12 rounded-lg  px-4 text-sm text-gray-100
          bg-transparent border border-gray-300 outline-none 
          focus:border focus:border-green-100"
      />
    </fieldset>
  )
}