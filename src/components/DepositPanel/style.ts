import styled from "styled-components";

export const Mask = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgb(192, 191, 191);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Panel = styled.div`
  padding: 5px;
  border-radius: 2%;
  background-color: var(--primaryColor);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
  width: 400px;
  height: 600px;
`;
