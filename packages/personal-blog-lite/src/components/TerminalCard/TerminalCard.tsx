import React, { Component } from "react"
import TerminalStyledWrapper from "./TerminalCardStyled"

class TerminalCard extends Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.setAttribute("data-termynal-container", "#termynal")
    script.src = "/termynal.js"
    script.async = true
    script.onload = () => this.scriptLoaded()

    document.body.appendChild(script)
  }

  scriptLoaded() {
    // Do something after the script is loaded.
  }

  render() {
    const darkTheme = {
      name: "dark",
      fgColor: "#E0E5EB",
      bgColor: "#191919",
      terminalColorBg: "#2A2C28",
      terminalColorText: "#E0E5EB",
      terminalColorTextSubtle: "#D76D77",
      terminalColor: "#0080ff",
      terminalFontSize: "16px",
      terminalFontFamily:
        "'Fira Mono', Consolas, Menlo, Monaco, 'Courier New',Courier, monospace ",
    }
    return (
      <TerminalStyledWrapper theme={darkTheme} id="termynal" data-termynal>
        <span data-ty="input" data-ty-prompt="➾">
          Name: Hari Krishnan
        </span>
        <span data-ty="input" data-ty-prompt="➾">
          Location: Toronto / Canada
        </span>
        <span data-ty="input" data-ty-prompt="➾">
          Passion: Javascript development 💖 / Blogging / Teaching
        </span>
        <span data-ty>[Downloading necessary packages... ]</span>
        <span data-ty="input">npm install @hari/profile</span>
        <span data-ty="progress"></span>
        <span data-ty>Successfully loaded awesome stuffs! </span>
      </TerminalStyledWrapper>
    )
  }
}

export default TerminalCard
