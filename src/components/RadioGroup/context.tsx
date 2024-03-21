import React from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
} | null;

const RadioGroupContext = React.createContext<Props>(null);

export default RadioGroupContext;
