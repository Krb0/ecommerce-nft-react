import { useEffect } from "react";
import HomeSection from "../components/Home/HomeSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <HomeSection />;
};
export default Home;
