import React from 'react'
import Svg, {Path, Circle, Defs, Stop, RadialGradient} from "react-native-svg"
 
const Sun = () => {
    return (
        <Svg
        width={300}
        height={300}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

      >
        <Circle cx={150} cy={150} r={150} fill="url(#a)" />
        <Defs>
          <RadialGradient
            id="a"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-90 150 0) scale(208)"
          >
            <Stop stopColor="#FFC702" />
            <Stop offset={0.264} stopColor="#EFC635" />
            <Stop offset={0.501} stopColor="#E1C666" stopOpacity={0.55} />
            <Stop offset={0.598} stopColor="#EBC12D" stopOpacity={0.22} />
            <Stop offset={0.661} stopColor="#F1DF9D" stopOpacity={0.21} />
            <Stop offset={0.714} stopColor="#FFFDF6" stopOpacity={0.13} />
            <Stop offset={0.775} stopColor="#F5DC84" stopOpacity={0.51} />
            <Stop offset={0.823} stopColor="#FFFDF6" />
          </RadialGradient>
        </Defs>
      </Svg>
    )
}
export default Sun; 
