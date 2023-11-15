import React, { useState } from "react";
import SubmitButton from "../../client/components/Buttons/SubmitButton/SubmitButton";
import CustomInput from "../../client/components/CustomInput/CustomInput";
import {
  Wrapper,
  Label,
  FromWrapper,
  Title,
  TextField,
  SubmitButtonWrapper,
  AlreadyHaveTextWrapper,
  AlreadyHaveText,
  TextLink,
} from "./styles";
import { useAction } from "../../store/Hooks/useAction";

const emptyUserData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const [userData, setUserData] = useState(emptyUserData);

  const { signUpAsync } = useAction();

  const handleSetUserData = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof emptyUserData
  ) => {
    setUserData(() => {
      return { ...userData, [field]: event.target.value };
    });
  };

  const signUp = () => {
      signUpAsync(userData);
  };

  return (
    <Wrapper>
    <FromWrapper>
      <Title>Sign Up</Title>
      <TextField>
      <Label>Name</Label>
          <CustomInput
            inputType="name"
            placeholder="Your name"
            onChange={(event) => handleSetUserData(event, "username")}
            value={userData.username}
          ></CustomInput>
       
      </TextField>

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

      <TextField>
      <Label>Confirm Password</Label>
          <CustomInput
            inputType="password"
            placeholder="Confirm password"
            onChange={(event) => handleSetUserData(event, "confirmPassword")}
            value={userData.confirmPassword}
          ></CustomInput>
      </TextField>

      <SubmitButtonWrapper to='/activate-account'>
        <SubmitButton onClick={signUp}>Sign Up</SubmitButton>
      </SubmitButtonWrapper>

      <AlreadyHaveTextWrapper>
        <AlreadyHaveText>Already have an account? </AlreadyHaveText>
        <TextLink to="/sign-in"> Sign in</TextLink>
      </AlreadyHaveTextWrapper>
    </FromWrapper>
    </Wrapper>
  );
};

export default SignUpPage;
