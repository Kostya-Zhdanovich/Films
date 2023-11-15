import axios from "axios";

export const filmsUrl = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const mockRatingUrl = axios.create({
  baseURL: "https://654e8414cbc325355742ef6a.mockapi.io/api",
});

export const userUrl = axios.create({
  baseURL: "https://studapi.teachmeskills.by",
});
