import { ReactNode } from "react";

const Protected = (children: ReactNode) => {
  return <div>
    <div>
        this is protected
    </div>
    {children}</div>;
};

export default Protected;
