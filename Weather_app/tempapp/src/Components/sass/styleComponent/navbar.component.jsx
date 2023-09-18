import {styled ,css} from "styled-components"
export  const navbar=styled.navlinkcustom`
color:blue;

${props=>props.$blue && css`
color:"red";
`}
${props=>props.$green && css`
color:"red";
`}

`