import Svg from "../Svg";
import Agent from "./Agent";
import Amount from "./Amount";
import {
  Panel,
  Mask,
  Header,
  HeaderIcon,
  Row,
  AgentRow,
  TimeRow,
  ArrowSvg,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./style";
import CosmosLogo from "../../assets/cosmos-logo.png";
import OsmoLogo from "../../assets/osmo-logo.png";

const DepositPanel = () => {
  return (
    <>
      <Mask>
        <Panel>
          <Header>
            <b>Deposit ATOM</b>
            <HeaderIcon>
              <Svg
                name="decline"
                fill="var(--primaryTextColor)"
                width="16px"
                height="16px"
                onClick={() => {}}
              />
            </HeaderIcon>
          </Header>
          <AgentRow>
            <Agent
              label="From Cosmos Hub"
              img={CosmosLogo}
              text="atomasdsadasdasdasdas123123123213dasdasdsad"
            />
            <ArrowSvg
              name="arrow-right"
              fill="var(--secondaryTextColor)"
              width="15px"
              height="15px"
              onClick={() => {}}
            />
            <Agent
              label="To Osmosis"
              img={OsmoLogo}
              text="osmo123jlk123kl12jkl312l3kj1l2j3lkasdsad890as8d"
              icon="edit"
            />
          </AgentRow>
          <Row>
            <Amount
              data={{
                name: "ATOM",
                logo: CosmosLogo,
                count: 2,
                value: 1013,
                unit: "$",
                tags: ["Max", "1/2", "1/3"],
              }}
            />
          </Row>
          <TimeRow>
            <Svg
              name="clock"
              fill="var(--primaryTextColor)"
              width="16px"
              height="16px"
              onClick={() => {}}
            />
            <p>
              Estimated time: <b>20 seconds</b>
            </p>
          </TimeRow>
          <ButtonGroup>
            <PrimaryButton>Transfer</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
          </ButtonGroup>
        </Panel>
      </Mask>
    </>
  );
};

export default DepositPanel;
