import React, { useState } from "react";
import { times } from "loadsh/util";
import { MAX_POS } from "../constant";
import { getInitialTitleList } from "../util/tile";
import useMoveTile from "../hook/useMoveTile";
import Tile from "./Tile";

export default function Game({ setScore }) {
  const [tileList, setTileList] = useState(getInitialTitleList);
  // up, down, left, right
  useMoveTile({ tileList, setTileList, setScore });
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, (index) => (
          <div className="grid-row" key={index}>
            {times(MAX_POS, (index2) => (
              <div className="grid-cell" key={index2}></div>
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        {tileList.map((item) => (
          <Tile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
