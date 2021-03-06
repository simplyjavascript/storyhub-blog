import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/SocialProfile"
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
} from "./style"
import {
  // IoLogoFacebook,
  // IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io"
import TerminalCard from "../../../components/TerminalCard/TerminalCard"
// import TerminalStyledWrapper from "../../../components/TerminalCard/TerminalCardStyled"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/hari.broo/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/simplyjavascript",
    tooltip: "Github",
  },
]

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  // const { author, about } = Data.site.siteMetadata
  // const AuthorImage = Data.avatar.childImageSharp.fluid

  return (
    <IntroWrapper>
      <IntroInfo>
        <IntroTitle>
          Hey there ! <b> I’m </b>
        </IntroTitle>

        <TerminalCard />

        {/* <Desciption>{about}</Desciption> */}
        <SocialProfile items={SocialLinks} />
      </IntroInfo>
    </IntroWrapper>
  )
}

export default Intro
