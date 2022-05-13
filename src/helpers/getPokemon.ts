import axios from "axios";
import { API_URL } from "./constants";


export const getPokemons = async (limit: number, offset: number)  => {
  try {
    return  await axios.get(
      `${API_URL}/pokemon?limit=${limit}&offset=${offset}`
    );

   
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};