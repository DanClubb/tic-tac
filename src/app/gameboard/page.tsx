import Circle from "@components/Circle";
import Cross from "@components/Cross";
import { Fragment } from "react";

function GameBoard() {
  return (
    <Fragment>
      <h3 className="text-center text-4xl uppercase my-16">Your turn</h3>
      <section className="grid grid-cols-3 gap-2 w-fit mx-auto bg-slate-500">
        <div className="cell"></div>
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
        <div className="cell"></div>
      </section>
      <p className="mt-10 text-center text-2xl">
        <span className="text-orange-400 bold uppercase">Crosses</span> 2 : 0
        <span className="text-violet-500 bold uppercase"> Circles</span>
      </p>
    </Fragment>
  );
}

export default GameBoard;
