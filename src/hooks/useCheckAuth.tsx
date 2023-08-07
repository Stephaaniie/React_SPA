import { useSelector } from "react-redux";
import { AuthLoginData } from "utils/interface/authLoginInitial";

export const useCheckAuth = () => {
    return useSelector((state: AuthLoginData) => state.status);
}
