import axios from "axios";
import { API_URL } from "./constants";


export const getPokemons = async (limit: number, offset: number)  => {
  try {
    const {data} =  await axios.get(
      `${API_URL}/pokemon?limit=${limit}&offset=${offset}`
    );

   return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};