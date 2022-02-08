import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="32" height="32" viewBox="0 0 225.000000 225.000000"
    preserveAspectRatio="xMidYMid meet">
   
   <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
   fill="#000000" stroke="none">
   <path d="M975 1894 c-97 -21 -237 -90 -319 -156 -127 -102 -225 -253 -272
   -418 -26 -91 -26 -299 0 -390 70 -247 243 -443 475 -538 190 -78 455 -66 644
   29 182 92 333 271 396 469 82 258 15 564 -166 760 -105 113 -205 177 -350 226
   -101 33 -299 42 -408 18z m327 -69 c117 -25 242 -92 334 -178 248 -234 300
   -595 128 -887 -41 -71 -54 -81 -54 -43 0 15 -9 47 -20 71 -17 37 -29 47 -87
   74 -37 18 -115 48 -173 68 -98 33 -105 37 -114 68 -14 51 10 167 41 196 13 13
   28 40 33 62 13 52 12 60 -2 76 -8 8 -13 40 -13 78 0 160 -118 247 -266 195
   -97 -35 -136 -89 -152 -215 -13 -107 -12 -142 9 -181 24 -45 43 -115 44 -162
   0 -49 -43 -97 -88 -97 -42 0 -178 -36 -227 -61 -49 -25 -90 -88 -101 -157 -4
   -23 -10 -42 -13 -42 -21 0 -110 181 -132 270 -18 71 -18 259 0 330 43 176 160
   339 310 435 166 105 353 140 543 100z"/>
   </g>
   </svg>
  );
};

export default Icon;
