import { useSelector } from "react-redux";
import { AuthLoginData } from "utils/interface/authLogin";

export const useCheckAuth = () => {
    return useSelector((state: AuthLoginData) => state.status);
}
