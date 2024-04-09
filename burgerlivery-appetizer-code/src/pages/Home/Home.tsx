import { Button, Layout } from "../../components";
import {
  HomeActionContentElement,
  HomeBgImage,
  HomeWrapperElement,
} from "./Home.style";
import HomeBg from "../../assets/bg-top.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hamburgers");
  };

  return (
    <Layout>
      <HomeWrapperElement>
        <HomeActionContentElement>
          <h1>Hamburgers para todos os gostos</h1>
          <p>Nós fazemos deliciosos hamburgers e entregamos na sua porta</p>
          <Button onClick={handleClick}>Peça agora</Button>
        </HomeActionContentElement>
        <HomeBgImage src={HomeBg} alt="placeholder" />
      </HomeWrapperElement>
    </Layout>
  );
}
