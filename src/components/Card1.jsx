import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  width: 300px;
  box-shadow: 2px 2px 5px #7c7c7c;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const CardTitle = styled.h2`
  color: #ff7c7c;
  font-size: 2rem;
`;

const CardSubTitle = styled.h3`
  margin-block: 0.5rem;
  color: #ce9090;

`;

const CardText = styled.p`
  font-size: 0.8rem;
  color: #585555;
`;

const CardImage = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const Card1 = () => {
  return (
    <CardWrapper>
      <CardImage src="https://picsum.photos/200/300" alt="mon image" />
      <CardBody>
        <CardTitle>Mon titre</CardTitle>
        <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
        <CardSubTitle>Un sous-titre</CardSubTitle>
        <CardText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
          quaerat? Excepturi quas fugiat eum quaerat voluptatibus quasi
          voluptatem qui officiis iure consectetur nobis cum, similique, ex
          ipsam, voluptatum vel dolorem!
        </CardText>
      </CardBody>
    </CardWrapper>
  );
};

export default Card1;
