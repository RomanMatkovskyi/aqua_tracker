import dropdown from "../../assets/chevron-down.svg";

const WelcomeHome = ({ username }) => {
  return (
    <div>
      <h2>Hello, {username && username}</h2>
      <div>
        <h3>{username && username}</h3>
        <button>
          <svg width={16} height={16}>
            <use xlinkHref={dropdown}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WelcomeHome;
