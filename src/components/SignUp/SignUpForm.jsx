import {
  SignUpCompWrapper,
  Logo,
  SignUpFormTitle,
  FormTitle,
  FormInput,
  SignUpBtn,
  LoginWrapper,
  LoginLink,
} from "./SignUpForm.styled";

const SignUpForm = () => {
  return (
    <SignUpCompWrapper>
      <Logo to={"/"}>AquaTrack</Logo>
      <SignUpFormTitle>Sign Up</SignUpFormTitle>
      <form>
        <FormTitle htmlFor="signupemail">Email</FormTitle>
        <FormInput
          type="email"
          id="signupemail"
          placeholder="Enter your email"
        />

        <FormTitle htmlFor="signuppassword">Password</FormTitle>
        <FormInput
          type="password"
          id="signuppassword"
          placeholder="Enter your password"
        />
        <FormTitle htmlFor="repeatpassword">Repeat Password</FormTitle>
        <FormInput
          type="password"
          id="repeatpassword"
          placeholder="Repeat your password"
          className="isLast"
        />
        <SignUpBtn type="submit">Sign Up</SignUpBtn>
      </form>
      <LoginWrapper>
        <p>Already have account? </p>
        <LoginLink to={"/signin"}>Sign In</LoginLink>
      </LoginWrapper>
    </SignUpCompWrapper>
  );
};

export default SignUpForm;
