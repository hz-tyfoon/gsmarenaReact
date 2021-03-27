import logo from "../../logo.png";
import Section from "../helpers/Section";

export default function Header() {
  return (
    <Section className="header">
      <img src={logo} alt="logo" />
      <h1>This is header</h1>
      <a href="#"></a>
    </Section>
  );
}
