/* eslint-disable @typescript-eslint/no-explicit-any */
import { Operation } from 'utils/interface/operation';
import { checkAccountBalance, setAddMoneyToYourAccount, setWithdrawMoneyFromTheAccount, setSaving } from './';

export const checkAccountBalanceThunk = (data: Operation) => {
    return async (dispatch: (arg0: { payload: any; type: "cajero/checkAccountBalance"; }) => void) => {
        dispatch(checkAccountBalance(data));
    }
}

export const setAddMoneyToYourAccountThunk = (data: Operation) => {
    return async (dispatch: (arg0: { payload: any; type: "cajero/setAddMoneyToYourAccount"; }) => void) => {
        dispatch(setAddMoneyToYourAccount(data.newAmount));
    }
}

export const setWithdrawMoneyFromTheAccountThunk = (data: Operation) => {
    return async (dispatch: (arg0: { payload: any; type: "cajero/setWithdrawMoneyFromTheAccount"; }) => void) => {
        dispatch(setWithdrawMoneyFromTheAccount(data));
    }
}

export const setSavingThunk = () => {
    return async (dispatch: (arg0: { payload: undefined; type: "cajero/setSaving"; }) => void) => {
        dispatch(setSaving());
    }
}