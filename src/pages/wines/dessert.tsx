import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

const DessrtWinePage: NextPage = () => {
  const name = "dessert";
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1>Wine</h1>

      <main>
        {data.map((wineData: Wine) => {
          const { id, wine, winery } = wineData;
          return (
            <WineCard
              key={`dessert-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default DessrtWinePage;
