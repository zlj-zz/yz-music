import { request } from "./base";

export const getBanner = () => request.get("/banner?type=0");
