import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { mockUsers } from '../data/mockUsers'
import type { UserRole } from '../data/roles'

const STORAGE_KEYS = {
  role: 'antbox_role',
  email: 'antbox_email',
  user: 'antbox_user',
} as const;

export interface AuthUser {
  email: string;
  role: UserRole;
  name: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function readStoredUser(): AuthUser | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const role = window.localStorage.getItem(STORAGE_KEYS.role);
  const email = window.localStorage.getItem(STORAGE_KEYS.email);
  const name = window.localStorage.getItem(STORAGE_KEYS.user);

  if (!role || !email || !name) {
    return null;
  }

  return {
    role: role as UserRole,
    email,
    name,
  };
}

function persistUser(user: AuthUser): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEYS.role, user.role);
  window.localStorage.setItem(STORAGE_KEYS.email, user.email);
  window.localStorage.setItem(STORAGE_KEYS.user, user.name);
}

function clearStoredUser(): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEYS.role);
  window.localStorage.removeItem(STORAGE_KEYS.email);
  window.localStorage.removeItem(STORAGE_KEYS.user);
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredUser());

  useEffect(() => {
    setUser(readStoredUser());
  }, []);

  const login = useCallback((email: string, password: string): boolean => {
    const normalizedEmail = email.trim().toLowerCase();
    const match = mockUsers.find(
      (candidate) =>
        candidate.email.toLowerCase() === normalizedEmail &&
        candidate.password === password,
    );

    if (!match) {
      return false;
    }

    const authenticatedUser: AuthUser = {
      email: match.email,
      role: match.role,
      name: match.name,
    };

    persistUser(authenticatedUser);
    setUser(authenticatedUser);
    return true;
  }, []);

  const logout = useCallback(() => {
    clearStoredUser();
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      login,
      logout,
    }),
    [user, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
