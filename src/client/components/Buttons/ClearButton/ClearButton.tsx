import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  children: string;
  onClick?: () => void;
}

const ClearButton = ({ children, onClick }: IProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default ClearButton;
