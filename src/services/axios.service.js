import axios from "axios";
import { BASE_URL } from "./helper.service";
//jaba axios or API call garinxa barambaar baseurl pani callgarna pardaina yeti garepaxi we will call public axios
//  and baseurl will be automatically configure
export const publicAxios=axios.create({
    baseURL:BASE_URL 
})