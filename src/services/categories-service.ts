import axios from "axios";
import { Category } from "@/models/Category";

const DEFAULT_API_URL = process.env.NEXT_PUBLIC_ENV_VARIABLE_API_URL;

export default async function getCategories(): Promise<Category[]> {
  try {
    const response = await axios.get(`${DEFAULT_API_URL}/Category`);
    return response.data as Category[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
