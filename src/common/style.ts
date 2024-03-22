import styled from "styled-components";

export const FlexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexSpaceBetween = `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRow = styled.div<{
  justifyContent?: string;
  alignItems?: string;
}>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
`;

export const Mask = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgb(192, 191, 191);
  z-index: 1;
  ${FlexCenter}
`;

export const Modal = styled.div`
  border-radius: 5%;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  content: "";
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;
