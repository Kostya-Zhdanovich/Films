import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.palette.primary.grey};
  border-radius: 10px;
  border: 0;
  color: ${(props) => props.theme.palette.primary.text};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding: 16px 20px;
  font-family: "Exo 2", sans-serif;


  &:focus {
    border: 2px solid #7b61ff;
    outline: none;
  }
  &:invalid {
    border: 2px solid #ff5154;
  }
`;
