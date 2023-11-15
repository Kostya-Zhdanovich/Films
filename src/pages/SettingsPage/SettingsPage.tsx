import React from "react";
import MainMenuContent from "../../client/components/Navigation/Navigation";
import {
  Wrapper,
  SettingsContentWrapper,
  SectionTitle,
  SectionWrapper,
  SectionInfo,
  StyledColorModeWrapper,
  StyledColorMode,
  StyledLabel,
} from "./styles";
import { useSelector } from "react-redux";
import { selectors } from "../../store/Hooks/selectors";
import ThemeToggle from "../../client/components/ThemeToggler/ThemeToggler";

const SettingsPage = () => {
  const width = window.innerWidth;
  const userInfo = useSelector(selectors.getUserInfo);

  return (
    <Wrapper>
      {width >= 1440 && <MainMenuContent />}

      <SettingsContentWrapper>
        <SectionTitle>
          Profile
          <SectionWrapper>
            <StyledLabel>
              Name
              <SectionInfo>{userInfo.username}</SectionInfo>
            </StyledLabel>
            <StyledLabel>
              Email
              <SectionInfo>{userInfo.email}</SectionInfo>
            </StyledLabel>
          </SectionWrapper>
          
        </SectionTitle>

        <SectionTitle>
          Theme
          <StyledColorModeWrapper>
            <StyledColorMode>Choose your theme</StyledColorMode>
            <ThemeToggle></ThemeToggle>
          </StyledColorModeWrapper>
        </SectionTitle>
      </SettingsContentWrapper>
    </Wrapper>
  );
};

export default SettingsPage;
