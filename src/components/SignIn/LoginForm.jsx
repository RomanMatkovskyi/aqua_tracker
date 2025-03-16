import {
  LoginCompWrapper,
  Logo,
  LoginFormTitle,
  FormTitle,
  FormInput,
  LoginBtn,
  SignUpWrapper,
  SignUpLink,
} from "./loginForm.styled";
const LoginForm = () => {
  return (
    <LoginCompWrapper>
      <Logo to={"/"}>AquaTrack</Logo>
      <LoginFormTitle>Sign In</LoginFormTitle>
      <form>
        <FormTitle htmlFor="loginemail">Email</FormTitle>
        <FormInput
          type="email"
          id="loginemail"
          placeholder="Enter your email"
        />

        <FormTitle htmlFor="loginpassword">Password</FormTitle>
        <FormInput
          type="password"
          id="loginpassword"
          placeholder="Enter your password"
          className="isLast"
        />
        <LoginBtn type="submit">Sign In</LoginBtn>
      </form>
      <SignUpWrapper>
        <p>Don’t have an account? </p>
        <SignUpLink to={"/signup"}>Sign Up</SignUpLink>
      </SignUpWrapper>
    </LoginCompWrapper>
  );
};

export default LoginForm;
