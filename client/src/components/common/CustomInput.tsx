import React, { InputHTMLAttributes, useState } from "react";

type Obj = {
  [key: string]: any;
};

export type inputField = {
  title?: string;
  className?: string;
  validation?: Obj;
  name: string;
  icon?: React.ReactNode;
  options?: {
    name: string;
    value: string;
    icon?: React.ReactNode;
  }[];
  eyeIcon?: boolean;
  titleclassName?: string;
  inputClassName?: string;
  placeholder?: string;
  type?: "number" | "text" | "password" | "email" | "date" | "time";
};

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors: any;
  register: any;
  inputfield: inputField;
}

const CustomInput = ({
  inputfield,
  register,
  errors,
  ...rest
}: CustomInputProps) => {
  const [type, setType] = useState<string>(inputfield.type ?? "text");

  const onclickHandler = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  return (
    <div className="w-full">
      <div className="space-y-2">
        {inputfield.title && (
          <span
            className={`${inputfield.titleclassName} text-base font-medium `}
          >
            {inputfield.title}
            {inputfield?.validation?.required?.value && inputfield.title && (
              <span className="text-red-600">*</span>
            )}
          </span>
        )}
        <label
          htmlFor={inputfield.name}
          style={{
            boxShadow: "0px 1px 2px 0px rgba(14, 24, 41, 0.05)",
          }}
          className={`${inputfield.className} bg-white border border-slate-300 rounded-md shadow-md text-slate-800 font-medium
           relative flex w-full items-center gap-3 overflow-hidden px-[14px] py-[10px]`}
        >
          {inputfield.icon && <div className="text-lg">{inputfield.icon}</div>}
          <input
            {...register(inputfield.name, inputfield.validation)}
            type={type}
            id={inputfield.name}
            placeholder={inputfield?.placeholder}
            autoComplete="new-password"
            className={` ${inputfield.inputClassName} w-full text-base text-primary-600 outline-none placeholder:text-sm`}
            {...rest}
          />
          {inputfield.eyeIcon && (
            <div className="absolute right-3 top-0 flex h-full cursor-pointer items-center justify-center">
              <button onClick={onclickHandler} className="text-xs text-slate-800" > {
              type === "text" ? "Hide" : "Show"
              } </button>
            </div>
          )}
        </label>
        {errors[inputfield.name] && (
          <div className="ml-2 text-xs text-red-500">
            {errors[inputfield.name]?.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
