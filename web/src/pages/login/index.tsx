import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {signIn} = useContext(AuthContext)

  const handleSubmit =  useCallback(async(event: React.FormEvent) => {
    event.preventDefault()
     await signIn({username, password})
  }, [username, password])

  return (
    <>
      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor=""> Usuário</label>
            <input type="text" onChange={(e) => setUsername(e.target.value) }/>
          </div>

          <div>
            <label htmlFor=""> Senha </label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div>
          
            <button type="submit"> entrar </button>
          </div>
      </form>
    </>
  );
};

export default Login;
