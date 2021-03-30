import { useContext } from "react";

import { Context } from "../../context";

import Section from "../helpers/Section";
import Content from "./contents";
import Sidebar from "./sidebar";

export default function Contents() {
  const valuesContext = useContext(Context);

  console.log({ valuesContext });

  return (
    <Section className="main_contents">
      <div className="d_flx flw_w wrapper_contents">
        <Sidebar className="sidebar" />
        <Content className="contents_all" />
      </div>
    </Section>
  );
}
