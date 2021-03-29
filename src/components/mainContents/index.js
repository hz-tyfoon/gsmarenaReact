import Section from "../helpers/Section";
import Content from "./contents";
import Sidebar from "./sidebar";

export default function Contents() {
  return (
    <Section className="main_contents">
      <div className="d_flx flw_w wrapper_contents">
        <Sidebar className="sidebar" />
        <Content className="contents_all" />
      </div>
    </Section>
  );
}
