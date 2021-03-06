export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthStateContextData {
  user: Record<string, unknown> | null;
  token: string | null;
  loading: boolean;
}

export interface AuthDispatchContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
}
