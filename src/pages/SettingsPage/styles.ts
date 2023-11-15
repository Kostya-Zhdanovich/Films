import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background};
  padding: 49px 56px;
  display: flex;
  justify-content: space-between;
`;

export const SettingsContentWrapper = styled.div`
  width: clamp(87%, 1.2vw, 83%);

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.label`
  font-family: "Exo 2", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.palette.primary.text};
  padding-bottom: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #242426;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SectionInfo = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.palette.primary.grey};
  padding: 40px;
  color:  white;
`;

export const StyledColorMode = styled.p`
  color:  white;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const StyledColorModeWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #242426;
  padding: 30px ;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
`;

export const StyledLabel = styled.label`
  color: white;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 8px;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
