import React from "react";

type Props = React.ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset
      className="flex max-h-20 w-full flex-1 
      text-gray-200 focus-within:text-green-100"
    >
      <legend className="text-xxs mb-2 uppercase text-inherit">{legend}</legend>
      <select
        {...rest}
        className="
          h-12 w-full rounded-lg  border border-gray-300 bg-transparent
          px-4 text-sm text-gray-100 outline-none 
          focus:border focus:border-green-100"
      >
        <option value="" hidden disabled>
          Selecione
        </option>
        {children}
      </select>
    </fieldset>
  );
}
