import { createContext, useCallback } from "react";
import { api } from "../service/api";


interface IAuthContextState{
    token:string;
    signIn({username, password}:IUserData): Promise<void>
}

interface IUserData{
    username:string;
    password:string;
}

const AuthContext = createContext<IAuthContextState>({} as IAuthContextState)


const AuthProvider = ({children}:any) =>{

    const signIn = useCallback(async ({username, password}: IUserData) => {
     const response = await  api.post('/sessions', {
            username, 
            password
        })

        console.log(response.data)
    },[])

    return(
        <AuthContext.Provider value={{token: '876876yui', signIn}}>
            {children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthProvider}