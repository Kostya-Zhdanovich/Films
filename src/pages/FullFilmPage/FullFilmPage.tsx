import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../store/Hooks/selectors";
import { useParams, Navigate } from "react-router-dom";
import { useAction } from "../../store/Hooks/useAction";
import {
  Wrapper,
  ReturnArrow,
  FilmContentWrapper,
  LeftContentWrapper,
  ImageWrapper,
  Image,
  FavButton,
  RightContentWrapper,
  GenresWrapper,
  StyledGenre,
  Title,
  NumberDataWrapper,
  NumberData,
  PlotText,
  ProductionDataWrapper,
  ProductionDataElementWrapper,
  ProductionDataType,
  ProductionData,
  ButtonsContainer,
  ShareButton,
} from "./styles";
import ArrowSvg from "../../Resourse/Svg/ArrowSvg";
import BookmarkSvg from "../../Resourse/Svg/BookmarkSvg";
import IMDBRatingSvg from "../../Resourse/Svg/IMDBRatingSvg";
import { isFilmFav } from "../../client/Helpers/helpers";
import ShareSvg from "../../Resourse/Svg/ShareSvg";

const FullFilmPage = () => {
  const { id } = useParams();

  const fullFilmInfo = useSelector(selectors.getFullFilm);

  const favFilms = useSelector(selectors.getFavFilms);
  const isFavDefault = isFilmFav(id!, favFilms);

  const [isFav, setIsFav] = useState(isFavDefault);

  const { addToFavs, removeFromFavs } = useAction();

  const handlePressOnFavSvg = () => {
    isFav ? removeFromFavs(fullFilmInfo!) : addToFavs(fullFilmInfo!);
    setIsFav(!isFav);
  };

  const getColorOfFavSvg = (isFav: boolean) => {
    return isFav ? "#7b61ff" : "#80858B";
  };

  const getStringFromArr = (Genre: string) => {
    const genresArr = Genre.split(", ");
    return genresArr;
  };

  if (fullFilmInfo.Genre) {
    const genresArr = getStringFromArr(fullFilmInfo.Genre);

    return (
      <Wrapper>
        <ReturnArrow to="/main">
          <ArrowSvg />
        </ReturnArrow>

        <FilmContentWrapper>
          <LeftContentWrapper>
            <ImageWrapper>
              <Image src={fullFilmInfo.Poster} />
            </ImageWrapper>

            <ButtonsContainer>
              {" "}
              <FavButton onClick={handlePressOnFavSvg}>
                <BookmarkSvg fill={getColorOfFavSvg(isFav)} />
              </FavButton>
              <ShareButton>
                <ShareSvg></ShareSvg>
              </ShareButton>
            </ButtonsContainer>
          </LeftContentWrapper>
          <RightContentWrapper>
            <GenresWrapper>
              {genresArr.map((genre, idx) => (
                <StyledGenre key={idx}>{genre}</StyledGenre>
              ))}
            </GenresWrapper>

            <Title>{fullFilmInfo!.Title}</Title>

            <NumberDataWrapper>
              <NumberData>
                <IMDBRatingSvg /> {fullFilmInfo.imdbRating}
              </NumberData>
              <NumberData>{fullFilmInfo.Runtime}</NumberData>
            </NumberDataWrapper>

            <PlotText>{fullFilmInfo.Plot}</PlotText>

            <ProductionDataWrapper>
              <ProductionDataElementWrapper>
                <ProductionDataType>Year</ProductionDataType>
                <ProductionData>{fullFilmInfo.Year}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Released</ProductionDataType>
                <ProductionData>{fullFilmInfo.Released}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>BoxOffice</ProductionDataType>
                <ProductionData>{fullFilmInfo.BoxOffice}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Country</ProductionDataType>
                <ProductionData>{fullFilmInfo.Country}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Production</ProductionDataType>
                <ProductionData>{fullFilmInfo.Production}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Actors</ProductionDataType>
                <ProductionData>{fullFilmInfo.Actors}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Director</ProductionDataType>
                <ProductionData>{fullFilmInfo.Director}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Writers</ProductionDataType>
                <ProductionData>{fullFilmInfo.Writer}</ProductionData>
              </ProductionDataElementWrapper>
            </ProductionDataWrapper>
          </RightContentWrapper>
        </FilmContentWrapper>
      </Wrapper>
    );
  } else {
    return <Navigate to="/error" />;
  }
};

export default FullFilmPage;
