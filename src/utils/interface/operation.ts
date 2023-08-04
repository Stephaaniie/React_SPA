export interface Operation {
    setTimeOut: number;
    isContinue: boolean,
    isCancel: boolean,
    typeOperation: string,
    newAmount: number;
    moneyInAccount: number;
    detail: string;
    isSaving: boolean;
}