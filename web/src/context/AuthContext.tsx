import { createContext, useCallback, useContext, useState } from "react";
import { api } from "../service/api";

interface IAuthContextState {
  token: TokenState;
  signIn({ username, password }: IUserData): Promise<void>;
  userLogged(): boolean;
  user: IUserData | undefined;
}

interface IUserData {
  username: string;
  password: string;
  roles?: String[];
}

interface TokenState {
  token: string;
}

const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUserData | undefined>();

  const [token, setToken] = useState<TokenState>(() => {
    const token = localStorage.getItem("@PermissionYT:token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as TokenState;
  });

  const signIn = useCallback(async ({ username, password }: IUserData) => {
    const response = await api.post("/sessions", {
      username,
      password,
    });

    const { token } = response.data;

    setUser(response.data.user);
    setToken(token);

    localStorage.setItem("@PermissionYT:token", token);
   // api.defaults.headers.authorization = `Bearer ${token}`;

    console.log(response.data);
  }, []);

  const userLogged = useCallback(() => {
    const token = localStorage.getItem("@PermissionYT:token");
    if (token) {
      return true;
    }

    return false;
  }, []);

  return (
    <AuthContext.Provider value={{ token, signIn, userLogged, user }}>
      {children}
    </AuthContext.Provider>
  );
};

function userAuth(): IAuthContextState {
  const context = useContext(AuthContext);

  return context;
}

export { userAuth, AuthProvider };
