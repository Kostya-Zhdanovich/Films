import styled from "styled-components";

export const StyledFooter = styled.footer`
background-color: ${props => props.theme.palette.primary.background}
`

export const Wrapper = styled.div`
  padding: 40px 3% 64px;
  display: flex;
  justify-content: space-between;
`;

export const FooterText = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #afb2b6;
`;
