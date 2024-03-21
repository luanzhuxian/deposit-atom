import React, { PropsWithChildren } from "react";
import RadioGroupContext from "./context";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const RadioGroup: React.FC<PropsWithChildren<Props>> = (props) => {
  const { value, onChange, children } = props;
  return (
    <RadioGroupContext.Provider value={{ value, onChange }}>
      {children}
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
