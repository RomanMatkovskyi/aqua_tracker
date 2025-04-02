import DailyNorma from "../components/DailyNorma/DailyNorma";
import WelcomeHome from "../components/WelcomeHome/WelcomeHome";
import { InfoWrapper } from "./Home.styled";

const Home = () => {
  return (
    <div>
      <DailyNorma dailyNorma={"1.5 L"} waterIntake={"50"} />
      <InfoWrapper>
        <WelcomeHome username={"Roman"} />
      </InfoWrapper>
    </div>
  );
};

export default Home;
