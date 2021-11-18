import StyledHomeMain from "./StyledHomeMain";
import { Link } from "react-router-dom";
const HomeSection = () => {
  return (
    <StyledHomeMain>
      <div>
        <h2>CreaturesNFT</h2>
        <Link to="/products">
          <button className="btn-explore">Explore</button>
        </Link>
      </div>
    </StyledHomeMain>
  );
};

export default HomeSection;
