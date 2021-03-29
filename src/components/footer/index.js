import Section from "../helpers/Section";
import { Link } from "react-router-dom";

import logo from "../../foo_logo.png";

export default function Footer() {
  return (
    <Section>
      <div className="d_flx ali_c">
        <Link to="/" className="foo_logo">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="foo_menu d_flx flw_w">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/">Reviews</Link>
          </li>
          <li>
            <Link to="/">Compare</Link>
          </li>
          <li>
            <Link to="/">Coverage</Link>
          </li>
          <li>
            <Link to="/">Glossary</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <a href="http://google.com" target="_blank">
              RSS feed
            </a>
          </li>
          <li>
            <a href="http://google.com" target="_blank">
              Youtube
            </a>
          </li>
          <li>
            <a href="http://google.com" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="http://google.com" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="http://google.com" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <Link to="/">© 2000-2021 GSMArena.com</Link>
          </li>
          <li>
            <Link to="/">Mobile</Link>
          </li>
          <li>
            <Link to="/">version</Link>
          </li>
          <li>
            <Link to="/">Android</Link>
          </li>
          <li>
            <Link to="/">app</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">us</Link>
          </li>
          <li>
            <Link to="/">Privacy</Link>
          </li>
          <li>
            <Link to="/">Terms of use</Link>
          </li>
        </ul>
      </div>
    </Section>
  );
}
