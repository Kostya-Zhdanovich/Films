import styled from "styled-components";

interface IProps {
  $menuIsOpened: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  width: 264px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: max-content;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: #7b61ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconInitials = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-align: left;
  color: white;
`;

export const UserText = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  padding-left: 23px;
  height: max-content;
  color:${(props) => props.theme.palette.primary.text};
`;

export const ArrowWrapper = styled.div<IProps>`
transition: .3s;
${props => props.$menuIsOpened ? 'transform: rotate(0.25turn); transition: .3s;' : ''}
`