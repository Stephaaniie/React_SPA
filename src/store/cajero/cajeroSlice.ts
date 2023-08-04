import { createSlice } from '@reduxjs/toolkit';

export const cajeroSlice = createSlice({
    name: 'cajero',
    initialState: {
        setTimeOut: 0,
        isContinue: false,
        isCancel: false,
        typeOperation: null,
        newAmount: 0,
        moneyInAccount:0,
        detail: null,
        isSaving: false
    },
    reducers: {
        checkAccountBalance: ( state, { payload } ) => {
            state.moneyInAccount = payload.moneyInAccount;
        },
        setAddMoneyToYourAccount: (state, { payload } ) => {
            state.moneyInAccount =+ payload.newAmount;
            state.isSaving = false;
        },
        setSaving: (state ) => {
            state.isSaving = true;
        },
        setWithdrawMoneyFromTheAccount: (state, { payload } ) => {
            state.moneyInAccount =- payload.newAmount;
            state.isSaving = false;
        }
    }
});

export const { 
    setSaving,
    checkAccountBalance,
    setAddMoneyToYourAccount,
    setWithdrawMoneyFromTheAccount
} = cajeroSlice.actions;