import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  padding: 17px 0;
  border-radius: 10px;
  text-align: center;
  font-family: "Exo 2", sans-serif;
  font-size: clamp(12px, 1.2vw, 16px);
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  color: #ffffff;
  background-color: #7b61ff;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: #917cff;
    cursor: pointer;
    transition: 0.3s;
  }
`;
