import styled from "styled-components";

import { FlexRow, Img } from "../../../common/style";
import Svg from "../../Svg";

export const Container = styled.div`
  /* width: 100%; */
  min-width: 0;
  flex: 1;
`;

export const Label = styled.label`
  color: var(--secondaryTextColor);
  line-height: 18px;
  font-weight: bold;
`;

export const Image = styled(Img)`
  width: 25px;
  height: 1;
  /* flex-shrink: 0; */
`;

export const Field = styled(FlexRow)`
  justify-content: space-between;
  padding: 12px;
  background-color: var(--secondaryColor);
  color: var(--secondaryTextColor);
  border-radius: 5%;
  margin-top: 5px;
  flex: 1;
  min-width: 0;
`;

export const Text = styled.p`
  margin-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Icon = styled(Svg)`
  margin-left: 15px;
  fill: var(--secondaryTextColor);
`;
