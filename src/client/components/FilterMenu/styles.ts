import styled from "styled-components";

export const Wrapper = styled.div`
  transition: 0.3s;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  width: clamp(41%, 1.2vw, 27%);;
  height: 100%;
  background-color: ${(props) => props.theme.palette.primary.dark};
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px 0 0 10px;

  @media (max-width: 768px) {
    width: 67%;
  }
  @media (max-width: 465px) {
    width: 100%;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 48px;
`;

export const Title = styled.p`
  color: white;
  font-family: "Exo 2", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
`;

export const SortByWrapper = styled.div`
  padding-bottom: 32px;
  border-bottom: 1px solid ${(props) => props.theme.palette.primary.grey};
`;

export const FilterValueWrapper = styled.div`
  padding-top: 24px;
`;

export const FilterValue = styled.p`
  color: white;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  padding-bottom: 8px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputOrButtonWrapper = styled.div`
  width: 45%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
`;

export const CursorPounterWrapper = styled.div`
cursor: pointer;
`