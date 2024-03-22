import styled from "styled-components";
import { FlexCenter, FlexSpaceBetween, Modal } from "../../common/style";
import Svg from "../Svg";

export { Mask } from "../../common/style";

export const Panel = styled(Modal)`
  padding: 20px;
  border-radius: 2%;
  background-color: var(--primaryColor);
  min-width: 400px;
  max-width: 60%;
  /* height: 600px; */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 28px;
  > b {
    font-size: 18px;
    color: var(--primaryTextColor);
  }
`;

export const HeaderIcon = styled.div`
  ${FlexCenter}
  background-color: var(--tagColor);
  border-radius: 20%;
  width: 25px;
  height: 25px;
`;

export const Row = styled.div`
  margin-top: 30px;
`;

export const AgentRow = styled(Row)`
  ${FlexSpaceBetween}
`;

export const TimeRow = styled(Row)`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: var(--secondaryColor);
  color: var(--primaryTextColor);
  padding: 0 10px;
  > p {
    margin-left: 12px;
  }
`;

export const ArrowSvg = styled(Svg)`
  margin-left: 8px;
  margin-right: 8px;
  position: relative;
  top: 10px;
`;

export const EditSvg = styled(Svg)`
  margin-left: auto;
`;

export const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: var(--primaryTextColor);
  color: var(--secondaryColor);
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  height: 60px;
`;

export const SecondaryButton = styled(Button)`
  color: var(--secondaryTextColor);
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  height: 20px;
  margin-top: 20px;
`;
