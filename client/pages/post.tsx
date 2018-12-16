import Axios from "axios";
import * as next from "next";
import * as React from "react";
import Layout from "../components/layout";
import { Detail, Show } from "../models/show";

const post = (props: Show) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[\/]?p>/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

post.getInitialProps = async function(context: next.NextContext) {
  const { id } = context.query;
  const res = await Axios.get<Detail>(`https://api.tvmaze.com/shows/${id}`);
  const show = res.data;

  // tslint:disable-next-line:no-console
  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default post;
