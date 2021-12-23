import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../constants";
import { useBeerData } from "../hooks/useBeersData";
import { Beer } from "../types/Beer";
import { Error, Loading, BeerCard } from "./";

interface BeerContainerProps {
  name: string;
}

export const BeerContainer = ({ name }: BeerContainerProps) => {
  const { data, error } = useBeerData(name);
  Error;
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <BeerTitle>{name} beer</BeerTitle>
      <BeerCardContainer>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={`${name}-beer-list-${beerData.id}`}
              beerData={beerData}
            />
          );
        })}
      </BeerCardContainer>
    </div>
  );
};

const BeerTitle = styled.h1`
  line-height: 180%;
  border-bottom: 1px solid #eee;
`;

const BeerCardContainer = styled.main`
  display: grid;
  gap: 1em;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
