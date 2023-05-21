"use client";

import Circle from "@components/Circle";
import Cross from "@components/Cross";
import { Fragment, useState } from "react";

function GameBoard() {
  const [crosses, setCrosses] = useState<number[]>([]);
  const [circles, setCircles] = useState<number[]>([]);
  const [turn, setTurn] = useState("cross");
  const gridCells: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleCellClick = (cell: number): void => {
    if (turn === "cross") {
      setCrosses((prev) => [...prev, cell]);
      setTurn("circle");
    }
    if (turn === "circle") {
      setCircles((prev) => [...prev, cell]);
      setTurn("cross");
    }
  };
  return (
    <Fragment>
      <h3 className="my-16 text-center text-4xl uppercase">Your turn</h3>
      <section className="mx-auto grid w-fit grid-cols-3 gap-2 bg-slate-500">
        {gridCells.map((cell) => {
          return (
            <div
              key={cell}
              className="cell"
              onClick={() => handleCellClick(cell)}
            >
              {(crosses.includes(cell) && <Cross />) ||
                (circles.includes(cell) && <Circle />)}
            </div>
          );
        })}
        {/* <div className="cell"></div>
        <div className="cell">
          <Cross />
        </div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell">
          <Circle />
        </div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div> */}
      </section>
      <p className="mt-10 text-center text-2xl">
        <span className="bold uppercase text-orange-400">Crosses</span> 2 : 0
        <span className="bold uppercase text-violet-500"> Circles</span>
      </p>
    </Fragment>
  );
}

export default GameBoard;
