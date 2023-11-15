import { filmsUrl, mockRatingUrl } from "../utils/https";
import { IFilm } from "../../types";

export const filmsApi = {
  getfilms: (page: number = 1, year?: number) =>
    filmsUrl.get(`/?s=man&page=${page}&apikey=9d0e2764&y=${year}`),

  getRatings: () => mockRatingUrl.get("/rating"),

  searchFilms: (searchTitle: string, page: number = 1) =>
    filmsUrl.get(`/?s=${searchTitle}&page=${page}&apikey=9d0e2764`),

  getFullFilm: (id: string) => filmsUrl.get<IFilm>(`/?i=${id}&apikey=9d0e2764`),
};
