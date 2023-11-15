import { IFilmsObject, ISearchFilm } from "../types";
import { Dispatch } from "redux";
import { userApi } from "../client/api/userApi";



export const getRatingForFilters = (
  lengthOfFilmsArr: number,
  ratingFrom: number,
  ratingTo: number
) => {
  const numberOfRatigs = ratingTo - ratingFrom + 1;
  const numberOfParts = Math.ceil(lengthOfFilmsArr / numberOfRatigs);
  const numberOfFilmsInOnePart = Math.ceil(lengthOfFilmsArr / numberOfParts);

  const ratings = [];

  for (let i = 1; i <= lengthOfFilmsArr; i++) {
    const inWichPartIsFilm = Math.ceil(i / numberOfFilmsInOnePart);
    const rating = ratingFrom + inWichPartIsFilm - 1;
    ratings.push(rating);
  }

  return ratings;
};


export const isTokenValid = async (token: string) => {
    try {
        const response = await userApi.verifyToken(token);

        return response.status === 200;
    } catch (error) {
        return false;
    }
};

export const refreshTokenRequest = async (refreshToken: string) => {
    const response = await userApi.refreshToken(refreshToken);

    return response?.data;
};

export const refreshAccessToken = async() => {
    const refreshToken = localStorage.getItem('refresh_token');

    if(refreshToken) {
        const parsedRefreshToken = JSON.parse(refreshToken);
        const { access: newAccessToken } = await refreshTokenRequest(parsedRefreshToken);

        if(newAccessToken) {
            localStorage.setItem('access_token', JSON.stringify(newAccessToken));
        };

        return newAccessToken
    };
}


export const getFilmsObject = (
  filmsArr: ISearchFilm[],
  limit: number,
  filmsObject?: IFilmsObject
) => {
  if (filmsObject) {
    const neededLimit = limit - filmsObject.remnant.length;

    const anotherFilmsListArr = filmsObject.remnant.concat(
      filmsArr.slice(0, neededLimit)
    );

    const newFilmsList = [...filmsObject.arrayOfFilmsList];
    newFilmsList.push(anotherFilmsListArr);

    const newRemnant = filmsArr.slice(-(filmsArr.length - neededLimit));

    return {
      ...filmsObject,
      arrayOfFilmsList: newFilmsList,
      remnant: newRemnant,
    };
  } else {
    if (filmsArr) {
      const filmsListArr = filmsArr.slice(0, limit);
      const remnantArr = filmsArr.slice(-(filmsArr.length - limit));

      return {
        arrayOfFilmsList: [filmsListArr],
        remnant: remnantArr,
      };
    } else {
      return {
        arrayOfFilmsList: [],
        remnant: [],
      };
    }
  }
};

export const setRemnant = (filmsObject: IFilmsObject) => {
  const filmsListArr = [...filmsObject.arrayOfFilmsList];
  filmsListArr.push(filmsObject.remnant);

  return {
    arrayOfFilmsList: filmsListArr,
    remnant: [],
  };
};
