import { mount, shallow } from "enzyme";
import * as React from "react";

test("simple component test", () => {
  const wrapper = mount(
    <div>
      <input id="checked" defaultChecked />
      <input id="not" defaultChecked={false} />
    </div>
  );
  expect(wrapper.find("#checked")).toBeChecked();
  expect(wrapper.find("#not")).not.toBeChecked();
});
