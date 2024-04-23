import react from 'react';

type Obj = {
    [ key : string] : any
}

export type  inputField  = {
  title?: string,
  className?: string,
  validation?: Obj,
  name: string,
  icon?: React.ReactNode,
  options?: {
    name: string,
    value: string,
    icon?: React.ReactNode,
  }[],
  eyeIcon?: React.ReactNode;
  titleclassName?: string;
  inputClassName?: string;
}
