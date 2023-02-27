import React, { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../context/AuthContext";
import Product from "../Produto";
import { FormContainer, MainScreen, Wrapper } from "./style";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signIn } = userAuth();

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      await signIn({ username, password });
      navigate("/dashboard");
    },
    [username, password]
  );

  return (
    <Wrapper>
      <MainScreen>
        <h1>
          Bem vindo ao Sandy, <br />
          Seus sistema de gerenciamento de estágios
        </h1>
      </MainScreen>

      <FormContainer>
        <div className="form-box">

       <h1> Login </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor=""> Usuário: </label><br/>
            <input
              className="input-form"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Insira seu usuário'
            />
          </div>

          <div>
            <label htmlFor=""> Senha: </label><br/>
            <input
              type="password"
              className="input-form"
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Digite sua senha'
            />
          </div>

          <div>
            <button type="submit"> entrar </button>
          </div>
          
        </form>
        </div>
      </FormContainer>
    </Wrapper>
  );
};

export default Login;
