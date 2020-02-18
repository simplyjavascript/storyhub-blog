import styled from "styled-components"

const screen = {
  phone: (...args) => {
    const styles = args
    return `@media (max-width:600px){
        ${styles};
      }`
  },
}

const SizeProps = `
    width: 750px;
    margin: 0 auto 30px;
    max-width: 100%;
    border-radius: 4px;
    padding: 75px 45px 35px;
    position: relative;
    box-sizing: border-box;
`
const TerminalStyledWrapper = styled.div`
  background: ${props => props.theme.terminalColorBg};
  color: ${props => props.theme.terminalColorText};
  font-size: ${props => props.theme.terminalFontSize};
  font-family: ${props => props.theme.terminalFontFamily};
  ${SizeProps}
  ${screen.phone`
    padding: 55px 15px 15px;
    font-size: 12px;
  `}
  &:before {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #d9515d;
    -webkit-box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;
    box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;
  }
  [data-ty] {
    display: block;
    line-height: 2;
    &:before {
      content: "";
      display: inline-block;
      vertical-align: middle;
    }
  }
  [data-ty="input"]:before,
  [data-ty-prompt]:before {
    margin-right: 0.75em;
    color: ${props => props.theme.terminalColorTextSubtle};
  }

  [data-ty="input"]:before {
    content: "$";
  }
  [data-ty="progress"] {
    color: ${props => props.theme.terminalColor};
    ${screen.phone`
       font-size: 10px;
  `}
  }
  [data-ty][data-ty-prompt]:before {
    content: attr(data-ty-prompt);
  }

  [data-ty-cursor]:after {
    content: attr(data-ty-cursor);
    color: ${props => props.theme.terminalColor};
    font-family: monospace;
    margin-left: 0.5em;
    -webkit-animation: blink 1s infinite;
    animation: blink 1s infinite;
  }
  @-webkit-keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`

export default TerminalStyledWrapper
