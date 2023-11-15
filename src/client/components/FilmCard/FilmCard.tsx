import React, { memo } from "react";
import {
  Wrapper,
  ImageWrapper,
  Image,
  Rating,
  HotRatingWrapper,
  HotRating,
  FavWrapper,
  CardTitle,
} from "./styles";
import BookmarkSvg from "../../../Resourse/Svg/BookmarkSvg";
import FireSvg from "../../../Resourse/Svg/FireSvg";
import { IFilmCard } from "../../../types";
import { useSelector } from "react-redux";
import { selectors } from "../../../store/Hooks/selectors";
import { isFilmFav } from "../../Helpers/helpers";
import { useAction } from "../../../store/Hooks/useAction";
import { useNavigate } from "react-router-dom";

const FilmCard = ({ Poster, Title, imdbRating, imdbID }: IFilmCard) => {
 
  const { setFullFilmAsync } = useAction();

  const navigate = useNavigate();

  const goToTheFilm = () => {
    setFullFilmAsync(imdbID);

    setTimeout(() => navigate(`/film/${imdbID}`), 500);
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={Poster} />
        {+imdbRating >= 8 ? (
          <HotRatingWrapper>
            <FireSvg fill="white" />
            <HotRating>{imdbRating}</HotRating>
          </HotRatingWrapper>
        ) : (
          <Rating>{imdbRating}</Rating>
        )}
        
      </ImageWrapper>
      <CardTitle onClick={goToTheFilm}>{Title}</CardTitle>
    </Wrapper>
  );
};

export default FilmCard;
