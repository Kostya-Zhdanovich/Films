import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const StyledSwitch = styled.div`
  position: relative;
  width: 32px;
  height: 20px;
  background: #b3b3b3;
  border-radius: 16px;
  transition: 300ms all;

  &:hover {
    background-color: #AFB2B6;
  }

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: 50%;
    left: 2px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledSwitch} {
    background: #7B61FF;

    &:before {
      transform: translate(12px, -50%);
    }

    &:hover {
      background-color: #917CFF;
    }
  }
`;
