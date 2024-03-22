import { useMemo, useEffect } from "react";
import styled from "styled-components";

import { useTheme } from "./common/ThemeContext";
import DepositPanel from "./components/DepositPanel";
import RadioGroup from "./components/RadioGroup";
import Radio from "./components/RadioGroup/Radio";
import { updateCSSVariables } from "./common/utils";
import { lightTheme, darkTheme } from "./common/const";

export const Panel = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 5%;
  background-color: #fff;
  z-index: 99;
  width: 120px;
  height: 120px;
`;

const App = () => {
  const { theme, setTheme } = useTheme();

  const currentTheme = useMemo(() => {
    if (theme === "light") {
      return lightTheme;
    }
    if (theme === "dark") {
      return darkTheme;
    }
  }, [theme]);

  useEffect(() => {
    if (currentTheme) {
      updateCSSVariables(currentTheme);
    }
  }, [currentTheme]);

  return (
    <div>
      <Panel>
        <h5>Select Theme</h5>
        <RadioGroup value={theme} onChange={setTheme}>
          <Radio value="light">Light</Radio>
          <Radio value="dark">Dark</Radio>
        </RadioGroup>
      </Panel>
      <DepositPanel />
    </div>
  );
};

export default App;
