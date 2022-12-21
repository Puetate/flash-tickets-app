import { createContext, useState } from 'react';
export interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
    type?: string;
}
interface AuthContext {
    user: User | null;
    loginUser: (user: User) => void;
    logoutUser: () => void;
}
export const AuthContext = createContext<AuthContext | null>(null);

export default function AuthProvider({ children }: { children: JSX.Element }) {
    const defaultUser: User = {
        id: '',
        name: '',
        surname: '',
        email: ''
    }
    const [user, setUser] = useState<User | null>(null);

    const loginUser = (user: User) => {
        setUser((prevUser) => user)
    }
    const logoutUser = () => {
        setUser((prevUser) => null)
    }
    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )

}