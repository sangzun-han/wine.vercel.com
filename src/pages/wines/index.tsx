import type { NextPage } from "next";

const wines: NextPage = () => {
  return (
    <div>
      <h1>Wines</h1>
      <ul>
        <li>
          <a href="wines/dessert">dessert</a>
        </li>
        <li>
          <a href="wines/port">port</a>
        </li>
        <li>
          <a href="wines/reds">reds</a>
        </li>
        <li>
          <a href="wines/rose">rose</a>
        </li>
        <li>
          <a href="wines/sparkling">sparkling</a>
        </li>
        <li>
          <a href="wines/whites">whites</a>
        </li>
      </ul>
    </div>
  );
};

export default wines;
