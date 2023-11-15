import styled from "styled-components";

type TabType = {
  $active: boolean;
  $isFirst: boolean;
};

export const StyledTabsWrapper = styled.div`
  width: 100%;
  height: 59px;
  border: 2px solid ${(props) => props.theme.palette.primary.grey};
  border-radius: 14px;
  display: grid;
  grid: 1fr / repeat(2, 1fr);
`;

export const StyledTab = styled.button<TabType>`
  height: 56px;
  border: 0;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;

  ${(props) =>
    props.$active
      ? `background: ${props.theme.palette.primary.grey}; color: ${props.theme.palette.primary.text};`
      : `background: ${props.theme.palette.primary.darkGrey}; color: #80858B; cursor: pointer; &:hover { color: #ffffff; }`}

  border-radius: ${(props) =>
    props.$isFirst ? "12px 0 0 12px" : " 0 12px 12px 0"};
`;
