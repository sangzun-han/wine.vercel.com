import type { NextPage } from "next";
import WineContainer from "../../components/WineContainer";

const DessrtWinePage: NextPage = () => {
  const name = "reds";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default DessrtWinePage;
