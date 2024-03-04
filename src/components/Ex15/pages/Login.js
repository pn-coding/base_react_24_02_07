import { useForm } from "react-hook-form";
import {
  Form,
  Container,
  ErrorMessage,
  Seper,
  Title,
} from "../styles/loginStyle";
import { ButtonUi } from "../components/ButtonUi";
import { BottomConUi } from "../components/BottomConUi";
import { useNavigate } from "react-router-dom";

const user = {
  id: 0,
  username: "test",
  password: "test123123",
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm();
  const nav = useNavigate();

  const handleLogin = (data) => {
    const { username, password } = data;

    if (username != user.username) {
      setError("username", {
        message: "아이디가 틀렸습니다.",
      });
    }

    if (password != user.password) {
      setError("password", {
        message: "비밀번호가 틀렸습니다.",
      });
    }

    if (username == user.username && password == user.password) {
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Title>LOGIN</Title>
        <input
          {...register("username", {
            required: "아이디는 필수입니다.",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.username?.message}</ErrorMessage>

        <input
          {...register("password", {
            required: "패스워드는 필수입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 최소 8자리 이상 입니다.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <ButtonUi isValid={isValid} text={"로그인"} />

        <Seper>
          <div></div>
          <h4>OR</h4>
          <div></div>
        </Seper>

        <BottomConUi
          message={"아이디가 없으신가요?"}
          text={"회원가입"}
          link="/signup"
        />
      </Form>
    </Container>
  );
};
