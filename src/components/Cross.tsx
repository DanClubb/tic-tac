import { Fragment } from "react";

function Cross() {
  return (
    <Fragment>
      <div className="cross rotate-45"></div>
      <div
        className="cross -rotate-45"
        style={{ animationDelay: "1.1s;" }}
      ></div>
    </Fragment>
  );
}

export default Cross;
