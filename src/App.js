import styled from "styled-components";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";

const HomeTitle = styled.h1`
  margin-block: 2rem;
  text-align: center;
  color: #ff7c7c;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  gap: 2rem;
`;

function App() {
  return (
    <>
      <HomeTitle>Mes cartes</HomeTitle>
      <CardsContainer>
        <Card1 />
        <Card2 />
        <Card3 />
      </CardsContainer>
    </>
  );
}

export default App;
