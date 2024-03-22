import styled from "styled-components";
import { FlexCenter, FlexSpaceBetween, Img } from "../../../common/style";

export const TitleRow = styled.div`
  ${FlexSpaceBetween}
  color: var(--secondaryTextColor);
  > .left {
    font-size: 18px;
  }
  > .right {
  }
`;

export const SelectRow = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(102, 117, 134, 0.5);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

export const TagRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 0;
`;

export const Left = styled.div`
  ${FlexCenter}
  height: 100%;
  padding: 12px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: block;
    width: 1px;
    background-color: rgb(102, 117, 134, 0.5);
  }
`;

export const Logo = styled(Img)`
  width: 40px;
  height: 1;
`;

export const Right = styled.div`
  ${FlexSpaceBetween}
  flex: 1;
  height: 100%;
  padding: 12px;
  color: var(--secondaryTextColor);
  input {
    background-color: transparent;
    outline: none;
    border: none;
    height: 100%;
    flex: 1;
  }
  .highlight {
    font-size: 14px;
    color: var(--primaryTextColor);
  }
  .count {
    font-size: 18px;
  }
`;

export const Tag = styled.span`
  border-radius: 5px;
  background-color: var(--tagColor);
  color: var(--secondaryTextColor);
  padding: 3px 8px;
  font-weight: bold;
  margin-left: 10px;
`;
