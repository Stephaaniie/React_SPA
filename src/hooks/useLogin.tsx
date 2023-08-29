export const isDisabled = (dni: string, password: string) => {
    return ((dni && (dni.length >= 7 && dni.length <= 8)) && (password.length === 4));
}