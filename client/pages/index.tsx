import * as React from "react";

const index = () => {
  const [count, setCount] = React.useState(0);
  const clicker = () => setCount(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clicker}>Click me</button>
    </div>
  );
};

export default index;
