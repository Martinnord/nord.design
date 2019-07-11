import React from "react";
import { storiesOf } from "@storybook/react";
import NumPad from "./NumPad";
import { wInfo } from "../../../utils";
import { text } from "@storybook/addon-knobs/react";

storiesOf("Components/NumPad", module).addWithJSX(
  "Advanced Numpad",
  wInfo(`
    text coming soon
 `)(() => (
    <NumPad
      placeholder={text("label", "Enroll")}
      buttonArray={[]}
      onClick={() => alert("hello there")}
    />
  )),
);
