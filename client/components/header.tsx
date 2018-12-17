import Link from "next/link";
import * as React from "react";

const linkStyle = {
  marginRight: 15
};

export default () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
  </div>
);
