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

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const handleLogin = () => {
    console.log("서브밋 이벤트 작동함");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Title>SIGN UP</Title>
        <input
          {...register("username", {
            required: "아이디는 필수입니다.",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.username?.message}</ErrorMessage>

        <input
          {...register("name", {
            required: false,
          })}
          type="text"
          placeholder="이름(*선택사항)"
        />

        <input
          {...register("email", {
            required: "이메일은 필수입니다.",
          })}
          type="text"
          placeholder="이메일"
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>

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

        <ButtonUi isValid={isValid} text={"회원가입"} />

        <Seper>
          <div></div>
          <h4>OR</h4>
          <div></div>
        </Seper>

        <BottomConUi
          message={"아이디가 있으신가요?"}
          text={"로그인"}
          link="/login"
        />
      </Form>
    </Container>
  );
};
