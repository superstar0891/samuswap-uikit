import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (

    <Svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="36" height="36" viewBox="0 0 225 225"
    >

      <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
        fill="#6d6d6d" stroke="#606571">
        <path d="M1022 2048 c-49 -26 -745 -591 -773 -627 -18 -23 -19 -51 -19 -593 0
-400 3 -576 11 -591 29 -56 31 -57 332 -57 l279 0 29 29 29 29 0 366 0 366
215 0 215 0 0 -366 0 -366 29 -29 29 -29 279 0 c301 0 303 1 332 57 8 15 11
191 11 591 0 548 -1 570 -19 594 -29 36 -724 599 -773 626 -30 16 -58 22 -103
22 -45 0 -73 -6 -103 -22z m169 -101 c20 -12 192 -148 382 -302 l346 -280 0
-542 1 -543 -240 0 -240 0 0 355 c0 381 -2 395 -51 421 -40 20 -488 20 -528 0
-49 -26 -51 -40 -51 -421 l0 -355 -240 0 -240 0 1 543 0 542 339 275 c187 151
358 287 382 303 51 33 91 34 139 4z"/>
      </g>
    </Svg>


  );
};

export default Icon;
