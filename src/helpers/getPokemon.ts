import axios from "axios";
import { Pokemon } from "../interfaces/interfaces";
import { API_URL } from "./constants";

export const getPokemons = async (limit: number, offset: number) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/pokemon?limit=${limit}&offset=${offset}`
    );

    data.results = await Promise.all(
      await data.results.map(async (item: Pokemon) => {
        const { data: information } = await axios.get(item.url);

        return {
          name: item.name,
          url: item.url,
          information,
        };
      })
    );

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};
