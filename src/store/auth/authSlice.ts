/* eslint-disable no-case-declarations */
import { AuthLogin, AuthLoginData } from 'utils/interface';

export const InitialState: AuthLoginData = {
    validando: true,
    token: null,
    dni: '',
    clave:'',
    nombreCompleto: ''
}

export type AuthAction = 
    | { type: 'logout' } 
    | { type: 'login', payload: AuthLogin }

export const authReducer = ( state: AuthLoginData, action: AuthAction ): AuthLoginData => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                dni: '',
                clave:'',
                nombreCompleto: ''
            }
        case 'login':
            const { dni, clave, nombreCompleto } = action.payload;
            return {
                validando: false,
                token: '123ABC',
                dni,
                clave,
                nombreCompleto
            }
        default:
            return state;
    }
}