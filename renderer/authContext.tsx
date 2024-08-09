// contexts/AuthContext.tsx
import { createContext, useState, useContext, ReactNode, FC } from 'react';

interface AuthState {
  sucid: BigInteger,
  slug: string,
  name: string,
  user_name: string,
  email: string,
  role_id: string,
  role_name: string,
  token: string,
  distributor_id: string
  // Add other fields as needed
}

interface AuthContextProps {
  authState: AuthState | null;
  loginData: (data: AuthState) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState | null>(() => {
    if (typeof window !== 'undefined') {
      const savedAuthData = localStorage.getItem('authData');
      return savedAuthData ? JSON.parse(savedAuthData) : null;
    }
    return null;
  });

  const loginData = (data: AuthState) => {
    setAuthState(data);
    localStorage.setItem('authData', JSON.stringify(data));
  };

  const logout = () => {
    setAuthState(null);
    localStorage.removeItem('authData');
  };

  const isAuthenticated = !!authState;

  return (
    <AuthContext.Provider value={{ authState, loginData, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
