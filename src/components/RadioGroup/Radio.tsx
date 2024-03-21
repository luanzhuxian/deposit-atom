import React, { PropsWithChildren } from "react";
import RadioGroupContext from "./context";

type Props = {
  value: string;
};

const Radio: React.FC<PropsWithChildren<Props>> = (props) => {
  const { value, children } = props;
  const { value: current, onChange } =
    React.useContext(RadioGroupContext) || {};

  return (
    <div>
      <label htmlFor={value}>{children}</label>
      <input
        type="radio"
        id={value}
        value={value}
        checked={value === current}
        onChange={() => onChange && onChange(value)}
      />
    </div>
  );
};

export default Radio;
