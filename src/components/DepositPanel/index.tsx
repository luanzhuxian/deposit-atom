import { useState } from "react";
import { Panel, Mask } from "./style";

const DepositPanel = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Mask>
        <Panel>
          <header>456</header>
        </Panel>
      </Mask>
    </>
  );
};

export default DepositPanel;
