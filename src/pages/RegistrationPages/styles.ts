import styled from "styled-components";
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
background-color: ${(props) => props.theme.palette.primary.form};
`
export const SuccessWrapper = styled.div`
background-color: ${(props) => props.theme.palette.primary.form};
padding: 150px; 0px;
`
export const FromWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.primary.darkGrey};
  width: 574px;
  padding: 40px;
  margin: 0 auto;
  border-radius: 10px;

  @media (max-width: 768px) : {
    width: 100%;
    margin: 0 24px;
  }
`;

export const Title = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.palette.primary.text};
  padding-bottom: 40px;
`;

export const TextField = styled.div`
  padding-bottom: 24px;
`;

export const SubmitButtonWrapper = styled(Link)`
  padding: 16px 0 0;
`;

export const AlreadyHaveTextWrapper = styled.div`
  width: max-content;
  margin: 0 auto;
  padding-top: 32px;
  display: flex;
`;

export const AlreadyHaveText = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #80858b;
`;

export const TextLink = styled(Link)`
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #7b61ff;
  text-decoration: none;
`;

export const ActivationText = styled.p`
  
  font-family: "Exo 2", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.palette.primary.text};
  text-align: center;
`;

export const Label = styled.label`
color: ${(props) => props.theme.palette.primary.text};
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 8px;
`
