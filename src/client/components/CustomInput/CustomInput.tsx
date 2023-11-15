import React, { HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./styles";

interface IProps {
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | string;
}

const CustomInput = ({ inputType, placeholder, onChange, value }: IProps) => {
  return (
    <div>
      <StyledInput
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CustomInput;
