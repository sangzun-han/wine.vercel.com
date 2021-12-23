import styled from "@emotion/styled";
import { Beer } from "../types/Beer";

interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, price, rating, image } = beerData;
  return (
    <Container>
      <img src={image} alt="beer" />
      <h2>{name}</h2>
      <p>
        <Average>{rating.average}</Average>
      </p>
      <p>{price}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;

const Average = styled.span`
  display: inline-block;
  padding: 0.3em;
  font-size: 16px;
  margin-left: 0.5em;
  color: white;
  background: #2ac1bc;
  border-radius: 3px;
`;
