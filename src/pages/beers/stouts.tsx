import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeerData } from "../../hooks/useBeersData";
import { Beer } from "../../types/Beer";

const AlePage: NextPage = () => {
  const name = "stouts";
  const { data, error } = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1>Beer</h1>
      <main>
        {data.map((beerData: Beer) => {
          const { id, name, price } = beerData;
          return (
            <BeerCard key={`ale-list-${beerData.id}`} beerData={beerData} />
          );
        })}
      </main>
    </div>
  );
};

export default AlePage;
