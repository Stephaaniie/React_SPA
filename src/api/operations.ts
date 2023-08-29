const API = 'https://nestspa-production.up.railway.app/api';

export const createOperation = async (dni: string, password: string) =>
    fetch(`${API}/operations`, {
        method: 'POST',
        body: JSON.stringify({ dni: dni, password: password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

export const getOperations = async () => fetch(`${API}/operations`);

export const getOperationById = (id: string) => fetch(`${API}/operations/${id}`);

export const updateOperation = async (id: string, task: string) =>
    fetch(`${API}/operations/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
        },
    });

export const deleteOperation = async (id: string) =>
    fetch(`${API}/operations${id}`, {
        method: "DELETE",
    });