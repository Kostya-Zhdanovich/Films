import React from "react";
import {
  Wrapper,
  SectionWrapper,
  SectionText,
  SectionLink,
} from "./styles";
import { useAction } from "../../../../store/Hooks/useAction";

interface IProps {
  $isAuthorized: boolean;
}

const UserInfoContent = ({ $isAuthorized }: IProps) => {
  const { logOut } = useAction();

  return $isAuthorized ? (
    <Wrapper>
      <SectionWrapper $isAuthorized>
        <SectionLink to="/settings">Edit profile</SectionLink>
      </SectionWrapper>
      <SectionWrapper $isAuthorized>
        <SectionText onClick={logOut}>Log Out</SectionText>
      </SectionWrapper>
    </Wrapper>
  ) : (
    <Wrapper>
      <SectionWrapper $isAuthorized>
        <SectionLink to="/sign-in">Log In</SectionLink>
      </SectionWrapper>
    </Wrapper>
  );
};

export default UserInfoContent;
