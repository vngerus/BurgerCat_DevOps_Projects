import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    userId: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
    const [userId] = useState<string>(() => localStorage.getItem('userId') || 'defaultUserId');

    return (
        <AuthContext.Provider value={{ userId }}>
            {children}
        </AuthContext.Provider>
    );
};
