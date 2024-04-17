import { LoggedInUser } from "@/models/LoggedInUser";
import axios from "axios";
import { LoginRequest } from "@/models/LoginRequest";

const DEFAULT_API_URL = process.env.NEXT_PUBLIC_ENV_VARIABLE_API_URL;

export default async function login(
  loginRequest: LoginRequest,
): Promise<LoggedInUser> {
  try {
    const response = await axios.post(
      `${DEFAULT_API_URL}Auth/login`,
      loginRequest,
    );
    return response.data as LoggedInUser;
  } catch (error) {
    throw error;
  }
}
