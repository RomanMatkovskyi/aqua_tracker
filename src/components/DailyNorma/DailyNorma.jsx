import {
  Wrapper,
  Logo,
  BottleImg,
  NormaWrapper,
  SliderWrapper,
  AddWaterBtn,
} from './DailyNorma.styled';
import bottle from '../../assets/transparent_bottle.png';

const DailyNorma = ({ dailyNorma, waterIntake }) => {
  return (
    <Wrapper>
      <Logo to={'/'}>Aquatrack</Logo>
      <BottleImg src={bottle} alt="bootle image" width={262} height={335} />
      <NormaWrapper>
        <h2>{dailyNorma && dailyNorma}</h2>
        <p>My daily norma</p>
      </NormaWrapper>
      <SliderWrapper>
        <h2>Today</h2>
        <input
          type="range"
          min={0}
          max={100}
          value={waterIntake}
          className="slider"
        />
      </SliderWrapper>
      <AddWaterBtn type="button">Add water</AddWaterBtn>
    </Wrapper>
  );
};

export default DailyNorma;
