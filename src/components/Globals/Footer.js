import React, { Component } from "react"
import { Link } from "gatsby"
import "./Footer.css"
import gatsby_img from "../../images/gatsby.png"
import contentful_img from "../../images/contentful.png"
import wordpress_img from "../../images/wordpress.jpg"
import netlify_img from "../../images/netlify.png"

export default class Footer extends Component {
  render() {
    return (
      <footer class="page-footer">
        <div class="container ">
          <div className="text-center"></div>
          <div class="row pt-3 mt-5 align-items-center">
            <div class="col-md-6 text-center text-lg-left text-dark">
              <ul class="list-inline ">
                <li className="list-inline-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div class="col-md-6 text-center text-lg-right">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="www.github.com" target="_blank" title="Github">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABmJLR0QA/wD/AP+gvaeTAAAE+0lEQVRYhe2YW4hVVRjHf986jc7MKY2Zs/eeaRSlTg82U2A3sZsTRZnShR6kRMoghEwQgoR6iIiil4KMrCSCRPBBKugGRRleIim1RBTxQo2kzuy9z5xxRs9pZs7M/nrwWNO+nDkzR8SH+T/+v29934+z1jprrQ1TmtLlLal1vOM4HUEQdIpIB8ocYGY51o/QpaoHjTHbXdc9BOglBW1ra2suDZVWI6wErq1y2HFBPqkbqvvg5MDJ/ER7Tgg0m81OHzgzsA5hHXDlRJuVdVbRN23ffvsQh4arHVQ1aGtz67xRM7oV6JgUXlQHAg2W5XK5I9UkVwXakmnpDCT4AphRE1pU5xAe9zzv+/ESxwV1HOc+DfQbYPpFQYtq0Kh5qCfXs71SUkXQ8nT/Alx1Mcli1B9ocHsulzualGCSAtlsdnp5Tf4PUpA+hMWisgrlhwkCnUZ5VVQeRdgyxp9pxGxtp31a0sBUUqAuVfcS8EQkoHzn+d4bhWLht0KxsLmhsWGviCwB6oD9iu41mJ8FOS5IDrgaqEfY2JhuXHLq9KlthWLhSENDw5CILB9TuaWQLhSLxeJPcTyxU9/W1tZcGi51Ef8XtMnzvZVjjdbW1jmDg4Nn+vr6+mPyU47jzHNd9+BY07btO1HCUANDw0Nz+/v7+8JFYqe+NFRanQCJIFbY6+7uPpEACTAahizLifFm1E+rfy6uSByoIDyd0BRFb0qKTVCxdRR9hpiZjoA6jtMBXFehQS8V1na1kkDOJISyLS0tN4TNCGgQBJ0V6o+kgtSTwOjk8P6Tm3PXQ2SNXmBYFPYioCKSeEQq+ml3b/fhmgjHlhNej40E3Bi2omtUmZtU2aj5sgawiDzP+xE4FwlIlCFuMyWeQmq0qwauOJUU/SvGnxk24kBLSVVlVBpqoYqtKZKuhiEO1E8qGpjgYl3xAJg1Y1YTyjUxoVzYiFujXlJhQaJHag0arh9eBlwRw+CGreiuR36vUHuhbdsraqIry3EcG+WVuJiK7g170V80xbaKHZSPMpnM0skCAliW1RIEwddAa0LKzrARAXVd9w/gWIU+9UbMV3bGfr+pqWn2RADbaZ/mZJxnBdkvyG0JaUd83z8eNmNvT47lrFX0nSp6l1B2AN9iOFAqlX4NXU4kk8ncIiIdgiwClgKRS81YKbrW9/13w37s7Skg+BgYexb3KzofZXMotQ7hfoS3UFY0NzcPhvsaY+YI8iGwcjxIoH9kZGRTXCD2clEsFofTjekSwoNlq15U5ns575F0Y9pGuDU05Kjne4vz+Xzk+VsoFA6nG9N/IzwwDiSKvtjb27srLlbpzZSyLXsncMe/ySrL3Zy71bKs1wS5l/NTn5eUbHBdt9KzpM627BMkbx4E2ef67gISLjwVH3eWZV0vyG6guVxsh+u7nZXGJMm27PeA5xPCnkmZBT09PV1J4xMfdwC+7x8zgXkIOAug6D2WZS2ZDKiiSR8aCgiPVYKEKj9AWJZ1tyCfcX4zjABbFN1n1Ayq0ZzneZ+PV8PJOKtUdGPIdk1gHu7p7dkz3viKv+gF+b6/a2R05GZgN+ePvKcEWa+iG0Xl5WpqxGi3GFlYDWTVoAD5fP6k53uLFF0D0bO4WgnSp+gaz/fucl33z2rHVQ1aVsn3/Q2KZkXlBUX3KJr40SCk04quwTDb9/0NQDDB3rWpqalp1iVtOKUpXab6ByPhzHH37aNfAAAAAElFTkSuQmCC" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="www.linkedin.com" target="_blank" title="LinkedIn">
                    <img src="https://img.icons8.com/ios-glyphs/46/161516/linkedin.png" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="www.instagram" target="_blank" title="Instagram">
                    <img src="https://img.icons8.com/material/42/161516/instagram-new--v1.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#161516",
            padding: "15px 20px",
          }}
          className="mb-2 poweredby"
        >
          <ul
            className="list-inline"
            style={{
              marginBlockStart: "0",
              marginBlockEnd: "0",
              paddingInlineStart: "0",
            }}
          >
            <li className="list-inline-item">
              <img src={gatsby_img} alt="Gatsbyjs" />
            </li>
            <li className="list-inline-item">
              <img src={contentful_img} alt="Contentful" />
            </li>
            <li className="list-inline-item">
              <img src={wordpress_img} alt="Wordpress" />
            </li>
            <li className="list-inline-item">
              <img src={netlify_img} alt="Netlify" />
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-center" style={{ fontWeight: "700" }}>
            Zubayr
            <span
              style={{
                color: "#161516",
              }}
            >
              Ali
            </span>
          </h1>
        </div>

        <div class="footer-copyright text-center py-3 small">
          © {new Date().getFullYear()} Zubayr Ali
        </div>
      </footer>
    )
  }
}
