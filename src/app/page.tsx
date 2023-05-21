import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div>home page</div>
      <Link href="/gameboard" className="text-blue-600 hover:underline">
        GameBoard
      </Link>
    </Fragment>
  );
}
