import React, { useState, useEffect, useMemo } from "react";
import { useAction } from "../../store/Hooks/useAction";
import { useSelector } from "react-redux";
import {
  Wrapper,
  CardsContentWrapper,
  CardsWrapper,
  ShowMoreButton,
  EmptyStateText,
} from "./styles";
import FilmCard from "../../client/components/FilmCard/FilmCard";
import Navigation from "../../client/components/Navigation/Navigation";
import { getFilmsPerList } from "../../client/Helpers/helpers";
import { selectors } from "../../store/Hooks/selectors";
import { ISearchFilm } from "../../types";
import { sectionsEnum } from "../../types";



  const getPage = (
    page: number,
    firstFilm: ISearchFilm,
    lastFilm: ISearchFilm,
    yearFrom: number
  ) => {
    const shouldUpdatePage = !(firstFilm.Year === lastFilm.Year) && yearFrom;
    return shouldUpdatePage ? 1 : page + 1;
  };

  const MainPage = () => {
    const [page, setPage] = useState(1);
    const [isThereMoreFilms, setIsThereMoreFilms] = useState(true);
  
    const { setFilmsAsync, setFilteredFilmsAsync, setSearchedFilmsAsync } =
      useAction();
  
    const width = useMemo(() => window.innerWidth, []);
  
    const filmsPerList = useMemo(() => getFilmsPerList(width), []);
    const isTrend = useSelector(selectors.getSection) === sectionsEnum.TRENDS;
    const filters = useSelector(selectors.getFilters);
    const searchTitle = useSelector(selectors.getFilms).searchTitle;
  
    useEffect(() => {
      if (searchTitle) {
        setSearchedFilmsAsync(searchTitle, filmsPerList, page);
      } else {
        filters.useFilters
          ? setFilteredFilmsAsync(false, filmsPerList, page, filters)
          : setFilmsAsync(false, filmsPerList, page);
      }
    }, [page]);
  
    const filmsResponse = useSelector(selectors.getFilms);
    const filmsArr = useMemo(
      () => filmsResponse.filmsObject.arrayOfFilmsList,
      [filmsResponse]
    );
  
    useEffect(() => {
      if (
        (filmsResponse &&
          !filmsResponse.filmsObject.remnant.length &&
          filters.yearTo > filters.ratingFrom) ||
        (!filmsResponse.totalResults && filmsArr.length)
      ) {
        setIsThereMoreFilms(false);
      } else if (!filmsResponse.totalResults && filmsResponse.searchTitle)
        setIsThereMoreFilms(false);
      else if (filmsResponse.totalResults) setIsThereMoreFilms(true);
    }, [filmsArr]);
  
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
        {isThereMoreFilms && (
          <ShowMoreButton
            onClick={() => {
              const newPage = getPage(
                page,
                filmsArr[filmsArr.length - 1][0],
                filmsResponse.filmsObject.remnant[
                  filmsResponse.filmsObject.remnant.length - 1
                ],
                filters.yearFrom
              );
              if (page === newPage) {
                setFilteredFilmsAsync(false, filmsPerList, page, filters);
              } else setPage(newPage);
            }}
          >
            Show more
          </ShowMoreButton>
        )}
        {!filmsResponse.totalResults && (
          <EmptyStateText>Oops, nothing had been found</EmptyStateText>
        )}
      </Wrapper>
    );
  };
  
  export default MainPage;