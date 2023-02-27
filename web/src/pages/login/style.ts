import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items:center;

  overflow-x:none:

`;

export const MainScreen = styled.div`
  display: flex;
  height: 100%;
  width: 50vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #2b2fc3;

  h1 {
    color: #fff;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-box {
    h1 {
      text-align: center;
    }

    .input-form {
      border-radius: 3px;
      height: 1.6rem;
      width: 15rem;
      margin-bottom: 13px;
      border: 1px solid;
      background: #DFE0E8;
      border: none;
      padding: 6px;
      outline:none;
    }

    form {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    button {
      margin-bottom: 1rem;
      width: 100%;
      padding: 8px;
      font-weight: bolder;
      background-color: #5e62ee;
      color: #fff;
      border: none;
    }
  }
`;
