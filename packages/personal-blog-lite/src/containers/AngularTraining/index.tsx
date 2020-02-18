import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import {
  AngularTrainingWrapper,
  TrainingDetails,
  BannerTitle,
  BannerImage,
} from "./style"

interface AngularTrainingProps {}

const AngularTraining: React.FunctionComponent<
  AngularTrainingProps
> = props => {
  const Data = useStaticQuery(graphql`
    query {
      hari: file(absolutePath: { regex: "/hari_img.png/" }) {
        childImageSharp {
          fluid(maxWidth: 611, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      angular: file(absolutePath: { regex: "/angular_logo.png/" }) {
        childImageSharp {
          fluid(maxWidth: 91, quality: 100) {
            ...GatsbyImageSharpFluid
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

  return (
    <AngularTrainingWrapper>
      <BannerTitle>
        <h2>Angular trainings</h2>
        <p>
          StoryHub is a beautiful Gatsby Blog theme designed to showcase your
          work in style. Perfect for designers, artists, photographers and
          developers to use for their portfolio website.
        </p>
      </BannerTitle>

      <BannerImage>
        <Image fluid={Data.hari.childImageSharp.fluid} alt="author" />
      </BannerImage>

      <TrainingDetails>
        <h2>Hey there, what’s up?</h2>
        <p>
          RedQ Team is a creative agency specializing in building scalable,
          high-performance web & mobile application. Our main concern is
          creating more value into the application so that can help our
          customers to grow their business.
        </p>
      </TrainingDetails>
    </AngularTrainingWrapper>
  )
}

export default AngularTraining
