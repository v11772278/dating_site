import { OnlyFans } from "./components/advertising/onlyFans/onlyFans";
import { Container } from "./components/container/container";
import { SwiperGirls } from "./components/girlsSwiper/swiperGirls";
import data from "./data/girls.json";

function App() {
  return (
    <Container>
      {" "}
      <OnlyFans />
      <SwiperGirls data={data} />
    </Container>
  );
}

export default App;
