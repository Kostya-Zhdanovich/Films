import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background};
  padding: 49px 56px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
    margin: 0 auto;
  }
`;

export const ReturnArrow = styled(Link)`
  height: max-content;
  padding: 5px;
`;

export const FilmContentWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

export const LeftContentWrapper = styled.div`
  width: max-content;
  padding-right: 42px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  width: clamp(208px, 1.2vw, 266px);
  height: clamp(278px, 1.2vw, 357px);
  border-radius: 20px;
  position: relative;
  margin-bottom: 32px;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1px;
`

export const FavButton = styled.button`
  width: 50%;
  padding: 16px 0;
  text-align: center;
  background-color: ${(props) => props.theme.palette.primary.grey};
  border: 0;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: clamp(208px, 1.2vw, 266px);
    margin-bottom: 32px;
  }
`;

export const ShareButton = styled.button`
width: 50%;
  padding: 16px 0;
  text-align: center;
  background-color: ${(props) => props.theme.palette.primary.grey};
  border: 0;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: clamp(208px, 1.2vw, 266px);
    margin-bottom: 32px;
  }
wid`

export const RightContentWrapper = styled.div`
  width: 59%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GenresWrapper = styled.div`
  display: flex;
`;

export const StyledGenre = styled.p`
  display: flex;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #afb2b6;
  &:after {
    content: "";
    display: flex;
    width: 4px;
    height: 4px;
    background-color: #afb2b6;
    border-radius: 50%;
    margin: 10px 8px;
  }
  &:last-child {
    &:after {
      width: 0;
      display: none;
    }
  }
`;

export const Title = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.palette.primary.text};
  padding-bottom: 24px;
`;

export const NumberDataWrapper = styled.div`
  display: grid;
  grid: 1fr / repeat(2, 1fr);
  gap: 20px;
  width: max-content;
`;

export const NumberData = styled.p`
  background-color: green;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding: 2px 8px;
  color: white;
  width: max-content;
  display: flex;
  border-radius: 6px;
`;

export const PlotText = styled.p`
  width: 100%;
  color: ${(props) => props.theme.palette.primary.text};
  padding: 40px 0;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ProductionDataWrapper = styled.div`
  width: 100%;
`;

export const ProductionDataElementWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
`;

export const ProductionDataType = styled.p`
  width: 82px;
  margin-right: 24px;
  color: #afb2b6;
  font-family: "Exo 2", sans-serif;
  font-size: clamp(14px, 1.2vw, 16px);
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ProductionData = styled.p`
  color: ${(props) => props.theme.palette.primary.text};
  font-family: "Exo 2", sans-serif;
  font-size: clamp(14px, 1.2vw, 16px);
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  width: clamp(74%, 1.2vw, 46%);
`;
