import { withRouter, WithRouterProps } from "next/router";
import * as React from "react";
import Layout from "../components/layout";

const toTitle = (props: WithRouterProps) => {
  if (props.router && props.router.query) {
    return props.router.query.title;
  }
  return "No Title";
};

export default withRouter((props: WithRouterProps) => (
  <Layout>
    <h1>{toTitle(props)}</h1>
    <div className="markdown">
      {`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}
    </div>
    <style jsx global>{`
      .markdown {
        font-family: "Arial";
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
));
