import { requset } from "./base";

export const getBanner = () => requset.get("/banner?type=0");
