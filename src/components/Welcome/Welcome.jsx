import {
  Wrapper,
  Logo,
  PreTitle,
  MainTitle,
  SignUpBtn,
  SignInBtn,
} from "./Welcome.styled";

const Welcome = () => {
  return (
    <Wrapper>
      <Logo to={"/"}>AquaTrack</Logo>
      <PreTitle>Record daily water intake and track</PreTitle>
      <MainTitle>Water consumption tracker</MainTitle>
      <SignUpBtn to={"/signup"}>Try tracker</SignUpBtn>
      <SignInBtn to={"signin"}>Sign In</SignInBtn>
    </Wrapper>
  );
};

export default Welcome;
