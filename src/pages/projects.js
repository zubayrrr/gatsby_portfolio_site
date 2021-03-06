import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import "./projects.css"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Title from "../components/Globals/Title"

const getCategories = items => {
  let tempItems = items
    .slice(0)
    .reverse()
    .map(items => {
      return items.node.category
    })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class projects extends Component {
  constructor({ data }) {
    super({ data })
    this.state = {
      items: data.menu.edges,
      projects: data.menu.edges,
      categories: getCategories(data.menu.edges),
      BackgroundSection: data.BackgroundSection.childImageSharp,
    }
  }

  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { projects: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { projects: items }
      })
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <Layout>
          <SEO title="Projects" />
          <BackgroundSection
            title="Projects I've worked on"
            styleClass="background-section-blog"
            img={this.state.BackgroundSection.fluid}
          />

          <div className="projects">
            <Title title="Projects I've worked on" />
            <Container>
              <Row className="mb-5">
                <Fade>
                  <div className="col-10 mx-auto text-center categories">
                    {this.state.categories.map((category, index) => {
                      return (
                        <button
                          className="btn-green"
                          key={index}
                          onClick={() => {
                            this.handleItems(category)
                          }}
                        >
                          {category}
                        </button>
                      )
                    })}
                  </div>
                </Fade>
              </Row>

              <Row className="pb-5 mb-5">
                {this.state.projects
                  .slice(0)
                  .reverse()
                  .map(({ node }) => {
                    return (
                      <Fade>
                        <div
                          key={node.id}
                          className="col-11 col-lg-4 col-md-6 my-3 d-flex mx-auto  "
                        >
                          <div class="post-module mx-auto hover">
                            <div class="thumbnail rounded">
                              <img src={node.image.fixed.src} />
                            </div>

                            <div class="post-content rounded-bottom">
                              <div class="category">{node.category}</div>
                              <h2 class="title">{node.title}</h2>
                              <div class="description">
                                <h4>{node.description.description}</h4>
                              </div>

                              <div class="post-button mt-3 ">
                                <span class="">
                                  <a
                                    href="www.netlify.com"
                                    target="_blank"
                                    title="Visit"
                                  >
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABOklEQVRYhe2WMVLDMBBF33o4BAWUOgFOkYJTMOEAyQz2AJfgBJR2YHKBcAyKMOBwAZWk4BJ4aWxIMjixHDkp8C/l1f6nXUkWdPrvkvWBMLXqkiCLjQCcje1AlGnd+FKBi1kbOtrwbSEwq5tIv/gIAp5WxuAcOG4EIDB7i81lXYD3a/MC/MSHiR0iXGyb10oLwtSOEB6L/DnwuTeAMLFD4KHIrSrcCjzvBaAoe7lyVeFmHplk0xxvAE3MvQE0NYfNx7CeeWpH/PY8B67mkZksxwjc57J6RL0A/LXh1s0BXmNTeZ80bsEuZV9Wowq4mvdSO1UYgId/ga+VNwLwbQ6uLQg4Rat3e+sAWWTuwrEFZZHFu5s7A5QQPoxLHfxB0gFU7gGFfi+1Wx+ZdaTQdwYATsrbq00dvAWdOn0Dt818vA+2DaIAAAAASUVORK5CYII=" />
                                  </a>
                                </span>
                                <span class="comments">
                                  <a
                                    href="www.github.com"
                                    target="_blank"
                                    title="Github"
                                  >
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABmJLR0QA/wD/AP+gvaeTAAAE+0lEQVRYhe2YW4hVVRjHf986jc7MKY2Zs/eeaRSlTg82U2A3sZsTRZnShR6kRMoghEwQgoR6iIiil4KMrCSCRPBBKugGRRleIim1RBTxQo2kzuy9z5xxRs9pZs7M/nrwWNO+nDkzR8SH+T/+v29934+z1jprrQ1TmtLlLal1vOM4HUEQdIpIB8ocYGY51o/QpaoHjTHbXdc9BOglBW1ra2suDZVWI6wErq1y2HFBPqkbqvvg5MDJ/ER7Tgg0m81OHzgzsA5hHXDlRJuVdVbRN23ffvsQh4arHVQ1aGtz67xRM7oV6JgUXlQHAg2W5XK5I9UkVwXakmnpDCT4AphRE1pU5xAe9zzv+/ESxwV1HOc+DfQbYPpFQYtq0Kh5qCfXs71SUkXQ8nT/Alx1Mcli1B9ocHsulzualGCSAtlsdnp5Tf4PUpA+hMWisgrlhwkCnUZ5VVQeRdgyxp9pxGxtp31a0sBUUqAuVfcS8EQkoHzn+d4bhWLht0KxsLmhsWGviCwB6oD9iu41mJ8FOS5IDrgaqEfY2JhuXHLq9KlthWLhSENDw5CILB9TuaWQLhSLxeJPcTyxU9/W1tZcGi51Ef8XtMnzvZVjjdbW1jmDg4Nn+vr6+mPyU47jzHNd9+BY07btO1HCUANDw0Nz+/v7+8JFYqe+NFRanQCJIFbY6+7uPpEACTAahizLifFm1E+rfy6uSByoIDyd0BRFb0qKTVCxdRR9hpiZjoA6jtMBXFehQS8V1na1kkDOJISyLS0tN4TNCGgQBJ0V6o+kgtSTwOjk8P6Tm3PXQ2SNXmBYFPYioCKSeEQq+ml3b/fhmgjHlhNej40E3Bi2omtUmZtU2aj5sgawiDzP+xE4FwlIlCFuMyWeQmq0qwauOJUU/SvGnxk24kBLSVVlVBpqoYqtKZKuhiEO1E8qGpjgYl3xAJg1Y1YTyjUxoVzYiFujXlJhQaJHag0arh9eBlwRw+CGreiuR36vUHuhbdsraqIry3EcG+WVuJiK7g170V80xbaKHZSPMpnM0skCAliW1RIEwddAa0LKzrARAXVd9w/gWIU+9UbMV3bGfr+pqWn2RADbaZ/mZJxnBdkvyG0JaUd83z8eNmNvT47lrFX0nSp6l1B2AN9iOFAqlX4NXU4kk8ncIiIdgiwClgKRS81YKbrW9/13w37s7Skg+BgYexb3KzofZXMotQ7hfoS3UFY0NzcPhvsaY+YI8iGwcjxIoH9kZGRTXCD2clEsFofTjekSwoNlq15U5ns575F0Y9pGuDU05Kjne4vz+Xzk+VsoFA6nG9N/IzwwDiSKvtjb27srLlbpzZSyLXsncMe/ySrL3Zy71bKs1wS5l/NTn5eUbHBdt9KzpM627BMkbx4E2ef67gISLjwVH3eWZV0vyG6guVxsh+u7nZXGJMm27PeA5xPCnkmZBT09PV1J4xMfdwC+7x8zgXkIOAug6D2WZS2ZDKiiSR8aCgiPVYKEKj9AWJZ1tyCfcX4zjABbFN1n1Ayq0ZzneZ+PV8PJOKtUdGPIdk1gHu7p7dkz3viKv+gF+b6/a2R05GZgN+ePvKcEWa+iG0Xl5WpqxGi3GFlYDWTVoAD5fP6k53uLFF0D0bO4WgnSp+gaz/fucl33z2rHVQ1aVsn3/Q2KZkXlBUX3KJr40SCk04quwTDb9/0NQDDB3rWpqalp1iVtOKUpXab6ByPhzHH37aNfAAAAAElFTkSuQmCC" />
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* <Card key={node.id}>
                            <Card.Img
                              variant="top"
                              src={node.image.fixed.src}
                            />
                            <Card.Body>
                              <Card.Title className="text-green text-center">
                                {node.title}
                              </Card.Title>
                              <Card.Text>
                                {node.description.description}
                              </Card.Text>
                              <div>
                                <a
                                  className="text-white"
                                  title="Visit"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={node.hyperlink}
                                >
                                  <img
                                    alt={node.description}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAQAAADYBBcfAAAAAmJLR0QA/4ePzL8AAACcSURBVDjLY2AYQeB/wv+ZRMAETI3z/xMD5mPXaPdfCQ+0w61RAa9nFIjQ+F/7vwsKFCRWI7qPHYjVGPq/Awwn/P9JkkaoGMf/nUDRHyRq/M/+fwtQbCfQXlI0wrVx/m8gxY9wbUA28RqRtZGgERokO/9zQGV8gWlUjaBGVNtISDn/5yLbRopGBaBWDrLTKqkayc5WZGVkcouOYQwAXHPF7f2PBrwAAAAASUVORK5CYII="
                                  />{" "}
                                </a>
                                &nbsp;
                                <a
                                  className="text-white"
                                  title="Github"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={node.github}
                                >
                                  <img
                                    alt={node.description}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAQAAADYBBcfAAAAAmJLR0QA/4ePzL8AAAFESURBVDgR5cHNSlRxHADQ34RQM7RqFS3a2KZ0VRsRZ9euQCwzSkIo2/ThwuFKTxJE01MUPobW0mGcxGXgpoS5CHFq+F/pOt4rbaNz4p9n2rJ165ZNxd/RlOkr6+u4EGcza1+VPTNRz5JcnaHFqGZWjgOHxh06wNBMnKZp38i8ljU7NnV1bdrxWtOCka/OxziZ5GZUcEvSiXH6krtRwR1JL04yLflsIiqY8EVyI8o8lryKGtYkj6JMR3Ivargv6USZTPI0anguyaLMiuRd1PBe8iTKTEm+uxwVXPFDcj3KNOxJtkzGGNdsSwYacZINfLBi6MhHmUb85pw3PjlyrBPjtAzw0kM/8TYKuv7Y1YzTtOW+uWTSbRej4IVjubmo5oHctiVtV6PgmSS3GPW0DYysRsGqkV1zcTYtG3rmo2BBT6YV/6FfzEDALqjVecAAAAAASUVORK5CYII="
                                  />
                                </a>
                              </div>
                            </Card.Body>
                          </Card> */}
                        </div>
                      </Fade>
                    )
                  })}
              </Row>
            </Container>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <SEO title="Projects" />
          <h1 className="text-center my-4">Projects that I've worked on.</h1>
          <h1>Content loading...</h1>
          <div></div>
        </Layout>
      )
    }
  }
}

export const query = graphql`
  {
    menu: allContentfulProjectItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          hyperlink
          category
          image {
            fixed {
              src
            }
          }
        }
      }
    }

    BackgroundSection: file(relativePath: { eq: "projects-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
