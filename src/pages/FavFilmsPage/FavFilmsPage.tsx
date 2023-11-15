import React from "react";
import { useSelector } from "react-redux";

import {
  Wrapper,
  CardsContentWrapper,
  CardsWrapper,
  EmptyStateText,
} from "./styles";
import { IFilm } from "../../types";
import FilmCard from "../../client/components/FilmCard/FilmCard";
import Navigation from "../../client/components/Navigation/Navigation";
import { selectors } from "../../store/Hooks/selectors";
import { getFilmsPerList } from "../../client/Helpers/helpers";

const FavFilmsPage = () => {

  const getFilmsArr = (arr: IFilm[], size: number) => {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
  
    return result;
  };
  
  const width = window.innerWidth;

  const favFilms = useSelector(selectors.getFavFilms);
  const filmsPerList = getFilmsPerList(width);
  const filmsArr = getFilmsArr(favFilms, filmsPerList);
  return (
    <Wrapper>
      {width >= 1440 && <Navigation />}

      <CardsContentWrapper>
        {filmsArr &&
          filmsArr.map((filmsList, idx) => {
            return (
              <CardsWrapper key={idx}>
                {filmsList.map((film, idx) => {
                  return (
                    <FilmCard
                      imdbID={film.imdbID}
                      key={idx}
                      Poster={film.Poster}
                      Title={film.Title}
                      imdbRating={film.imdbRating}
                    />
                  );
                })}
              </CardsWrapper>
            );
          })}
      </CardsContentWrapper>

      {!favFilms.length && <EmptyStateText>No favourites</EmptyStateText>}
    </Wrapper>
  );
};

export default FavFilmsPage;
