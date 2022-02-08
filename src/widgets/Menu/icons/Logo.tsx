import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="201" height="49" viewBox="0 0 201 49">
  <text id="Samuswap" transform="translate(0 37)" fill="#0583d2" font-size="35" font-family="Poppins-SemiBold, Poppins" font-weight="600"><tspan x="0" y="0">Samuswap</tspan></text>
</Svg>  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
