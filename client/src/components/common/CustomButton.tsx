import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  icon?: React.ReactNode;
}
const CustomButton = ({
  title,
  className,
  icon,
  ...properties
}: CustomButtonProps) => {
  return (
    <button
      className={`flex w-full items-center justify-center hover:bg-primary-800 hover:text-primary-100 gap-2 rounded-lg bg-primary-900 px-[18px] py-[10px] border-primary-200 border text-base font-semibold   shadow-sm ${
        className && className
      }`}
      {...properties}
    >
      {icon}
      <div>{title}</div>
    </button>
  );
};

export default CustomButton;
