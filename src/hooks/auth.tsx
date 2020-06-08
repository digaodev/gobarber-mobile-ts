import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signOut(): void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children, ...props }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@gobarber:token',
        '@gobarber:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setIsLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@gobarber:token', token],
      ['@gobarber:user', JSON.stringify(user)],
    ]);

    setData({ token, user });
  }, []);

  const signUp = useCallback(async ({ name, email, password }) => {
    await api.post('/users', { name, email, password });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@gobarber:token', '@gobarber:user']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signUp, signOut, isLoading }}
      {...props}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
