import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findUser(username : string) {
    return axios.get(`${BASE_URL}${username}`);
}