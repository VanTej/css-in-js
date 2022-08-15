import styled from "styled-components";

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 70px);
  grid-template-columns: 150px 3fr;
  width: 400px;
  transition: 200ms;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #7c7c7c;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const CardTitle = styled.h2`
  grid-column: 2 / 4;
  grid-row: 1/2;
  align-self: end;
  padding-left: 1rem;
  color: #ff7c7c;
  font-size: 2rem;
`;

const CardSubTitle = styled.div`
  grid-column: 2/4;
  grid-row: 2/3;
  padding-left: 1rem;
  align-self: center;
  color: #ce9090;
`;

const CardText = styled.div`
  grid-column: 1/4;
  grid-row: 3/4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: solid 1px grey;
  height: 100%;
  color: #585555;

`;

const CardImage = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  border-radius: 5px 0 0 0;
`;

const Card2 = () => {
  return (
    <CardWrapper>
      <CardImage src="https://picsum.photos/200/300" alt="mon image" />
      <CardTitle>Mon titre</CardTitle>
      <CardSubTitle>
        <h3>Un sous-titre</h3>
        <p>(1981)</p>
      </CardSubTitle>
      <CardText>
        <h4>Magnifaïk :</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </CardText>
    </CardWrapper>
  );
};

export default Card2;
