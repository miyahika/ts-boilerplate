import * as React from "react";

import Link from "next/link";

export default () => (
  <div>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);
