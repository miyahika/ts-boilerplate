import Link from "next/link";
import * as React from "react";
import Layout from "../components/layout";

function getPosts(): Post[] {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

interface Post {
  id: string;
  title: string;
}

// tslint:disable-next-line:variable-name
const PostLink = ({ post }: { post: Post }) => (
  <li>
    <Link as={`/b/${post.id}`} href={`/blogpost?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post: Post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);
