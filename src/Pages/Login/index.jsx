import styled from "styled-components";

import Input from "../../Components/Input/input";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Hoc/authContext";

export default function Login() {
  const navigate = useNavigate();

  const { loginUser, user } = useContext(AuthContext);

  if (!user) {
    return (
      <MainSection>
        <Div>
          <h1>Login</h1>
          <form onSubmit={loginUser}>
            <Input
              type={"text"}
              placeholder={"Type Your username"}
              name={"username"}
            />

            <Input
              type={"password"}
              placeholder={"Type Your Password"}
              name={"password"}
            />

            <Button type='submit'>Click Me</Button>
          </form>
        </Div>
      </MainSection>
    );
  } else {
    return navigate("/admin");
  }
}

const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Div = styled.div`
  width: 50%;
  height: 50%;
  background-color: red;
  align-self: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
