const API = '';

export const loginRequest = async (dni: string, password: string) =>
    fetch(`${API}/customer/login`, {
        method: 'POST',
        body: JSON.stringify({ dni: dni, password: password }),
        headers: {
            'Content-Type': 'application/json',
        },
});