import * as React from "react";
import Header from "./header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

// tslint:disable-next-line:no-any
export default (props: React.Props<any>) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);
