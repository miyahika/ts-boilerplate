import * as React from "react";

import Axios from "axios";
import Link from "next/link";
import Layout from "../components/layout";
import { Detail, Show, Shows } from "../models/show";

const index = (props: Shows) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }: { show: Detail }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

index.getInitialProps = async (): Promise<Shows> => {
  const res = await Axios.get<Show[]>(
    "https://api.tvmaze.com/search/shows?q=batman"
  );

  // tslint:disable-next-line:no-console
  console.log(`Show data fetched. Count: ${res.data.length}`);

  return new Shows(res.data);
};

export default index;
