import { useEffect, useState } from "react";
import { OnlyFans } from "./components/advertising/onlyFans/onlyFans";
import { Container } from "./components/container/container";
import { SwiperGirls } from "./components/swiperGirls/swiperGirls";
import { BlinkingQuestion } from "./components/blinkingQuestion/blinkingQuestion";
import data from "./data/girls.json";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 10000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Container>
      {" "}
      <OnlyFans />
      {showAlert && <BlinkingQuestion />}
      <SwiperGirls data={data} />
    </Container>
  );
}

export default App;
