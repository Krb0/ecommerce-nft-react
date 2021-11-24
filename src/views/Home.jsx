import { useEffect } from "react";
import HomeSection from "../components/Home/HomeSection";
import styled from "styled-components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledHome>
      <HomeSection />
    </StyledHome>
  );
};
export default Home;

const StyledHome = styled.div``;
