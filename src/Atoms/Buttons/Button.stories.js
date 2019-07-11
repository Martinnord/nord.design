import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { Button } from "./Button";
import { wInfo } from "../../../utils";

storiesOf("Atoms/Buttons", module)
  .add("Plain", () => <Button width={100}>Click Me</Button>)
  .add("Primary", () => <Button width={100}>Im primary</Button>);

// .addWithJSX("Button", () => (
//   <Button width={100}>Click Me</Button>
// ));
