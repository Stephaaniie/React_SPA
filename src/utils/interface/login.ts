export interface AuthRegister {
    dni:      string;
    password: string;
    fullName: string;
    id?:       string;
    isActive?: boolean;
    roles?:    string[];
    token:    string;
}

export type CreateLogin = Omit<AuthRegister, "status" | "fullName" | "id" | "isActive" | "roles" | "token" >;

export type AuthLogin = Partial<CreateLogin>;