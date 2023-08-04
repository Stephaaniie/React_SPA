/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkingCredentials, logout, login } from './';
import { AuthLoginData } from 'utils/interface/authLogin';

export const checkingAuthentication = () => {
    return async (dispatch: (arg0: { payload: undefined; type: "auth/checkingCredentials"; }) => void) => {
        dispatch(checkingCredentials());
    }
}

export const startLoginWithDniAndClave = (data: AuthLoginData) => {
    return async (dispatch: (arg0: { payload: any; type: "auth/checkingCredentials" | "auth/login"; }) => void) => {
        dispatch(checkingCredentials());
        dispatch(login(data));
    }
}

export const startLogout = (data: AuthLoginData) => {
    return async (dispatch: (arg0: { payload: any; type: "auth/logout"; }) => void) => {
        dispatch(logout(data));
    }
}