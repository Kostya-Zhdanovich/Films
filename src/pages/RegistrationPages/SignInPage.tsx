import React, { useState } from "react";
import { useAction } from "../../store/Hooks/useAction";
import {
  Wrapper,
  FromWrapper,
  Title,
  TextField,
  SubmitButtonWrapper,
  AlreadyHaveTextWrapper,
  AlreadyHaveText,
  TextLink,
  Label
} from "./styles";
import CustomInput from "../../client/components/CustomInput/CustomInput";
import SubmitButton from "../../client/components/Buttons/SubmitButton/SubmitButton";

const emptyUserData = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const [userData, setUserData] = useState(emptyUserData);

  const { signInAsync } = useAction();

  const handleSetUserData = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof emptyUserData
  ) => {
    setUserData(() => {
      return { ...userData, [field]: event.target.value };
    });
  };

  const signIn = () => {
      signInAsync(userData);
  };

  return (
    <Wrapper>
    <FromWrapper>
      <Title>Sign In</Title>

      <TextField>
        <Label>Email</Label>
          <CustomInput
            inputType="email"
            placeholder="Your email"
            onChange={(event) => handleSetUserData(event, "email")}
            value={userData.email}
          ></CustomInput>
      </TextField>

      <TextField>
        <Label>Password</Label>
          <CustomInput
            inputType="password"
            placeholder="Your password"
            onChange={(event) => handleSetUserData(event, "password")}
            value={userData.password}
          ></CustomInput>
      </TextField>

      <SubmitButtonWrapper to="/main">
        <SubmitButton onClick={signIn}>Sign In</SubmitButton>
      </SubmitButtonWrapper>

      <AlreadyHaveTextWrapper>
        <AlreadyHaveText>Already have an account? </AlreadyHaveText>
        <TextLink to="/sign-up"> Sign up</TextLink>
      </AlreadyHaveTextWrapper>
    </FromWrapper>
    </Wrapper>
  );
};

export default SignInPage;
