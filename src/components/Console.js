import React, {useState} from "react";
import Flex from "./Flex";
import Line from "./Line";
import styled from "styled-components";

const StyledConsole = styled.textarea `
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color:  ${props => props.color || props.theme.colors.primary};
  &:focus {
   outline: none;
  }
  @media ${props => props.theme.media.phone} {
    border: 1px solid red;
}
@media ${props => props.theme.media.tablet} {
    border: 1px solid green;
}
`

const Console = ( {color, ...props}) => {
    const [lines, setLines] = useState(['/Users/user/Documents>'])

    const onKeyPress = e => {
        if (e.charCode === 13) {
            setLines([...lines, '/Users/user/Documents>'])
        }
    }

  return (
      <Flex>
          <Flex direction={"column"} margin="0 10px">
          {lines.map((line, index) =>
            <Line key={index} color={color}>{line}</Line>
            )}
          </Flex>
          <StyledConsole onKeyPress={onKeyPress} color={color}/>
      </Flex>
  )
};

export default Console;
