import React from "react";
import { render } from "react-testing-library";
import App from "./App";

test("renders withour crashing", () => {
  const component = render(
      <App header="fefe" initialCount={0} />
  );
  component.unmount();
});