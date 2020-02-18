import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AngularTraining from "../../containers/AngularTraining"

type AboutPageProps = {}

const AngularPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Angular Training | Canada | Angular 2 | Es6 | RXJS | Ngrx | Learn angular"
        description="Angular Training | Canada | Angular 2 | Es6 | RXJS | Ngrx | Learn angular"
      />
      <AngularTraining />
    </Layout>
  )
}

export default AngularPage
