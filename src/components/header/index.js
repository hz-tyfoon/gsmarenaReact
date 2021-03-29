import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.png";
import Section from "../helpers/Section";

export default function Header() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <>
      <Section className="header">
        <div className="d_flx ali_c">
          <div className="logo d_flx ali_c">
            <div
              className="toggler d_flx ali_c "
              onClick={() => setMenuExpanded((prevState) => !prevState)}
            >
              {menuExpanded ? (
                <span class="minus"></span>
              ) : (
                <i class="hzt-icon bars">&#xf0c9;</i>
              )}
            </div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="search">
            <form
              className="d_flx "
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input type="search" name="search" placeholder="Search" />
              <button type="submit">
                <i class="hzt-icon search">&#xe801;</i>{" "}
              </button>
            </form>
          </div>
          <div className="socials ">
            <ul className="d_flx">
              <li>
                <a href="http://google.com" target="_blank">
                  <i class="hzt-icon user-plus">&#xf234;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank">
                  <i class="hzt-icon instagram">&#xf16d;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank">
                  <i class="hzt-icon youtube">&#xf16a;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank">
                  <i class="hzt-icon rss">&#xf09e;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank">
                  <i class="hzt-icon facebook">&#xf09a;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank">
                  <i class="hzt-icon twitter">&#xf099;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank">
                  <i class="hzt-icon login">&#xe800;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank">
                  <i class="hzt-icon bulb">&#xf0eb;</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {menuExpanded ? (
        <Section className="head_menu">
          <ul className="d_flx ali_c  flw_w menu_main">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">news</a>
            </li>
            <li>
              <a href="#">reviews</a>
            </li>
            <li>
              <a href="#">videos</a>
            </li>
            <li>
              <a href="#">featured</a>
            </li>
            <li>
              <a href="#">phone finder</a>
            </li>
            <li>
              <a href="#">dealsnew</a>
            </li>
            <li>
              <a href="#">tools</a>
            </li>
            <li>
              <a href="#">coverage</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </Section>
      ) : null}
      {/* 
      <h1>This is header</h1>
      <input
        type="search"
        placeholder="search here"
        onChange={(e) => console.log(e.target.value, "changed")}
        onFocus={(e) => console.log(e, "focused")}
        onBlur={(e) => console.log(e, "blurred")}
      />
      <i class="hzt-icon login">&#xe800;</i>
      <i class="hzt-icon search">&#xe801;</i>
      <i class="hzt-icon lists">&#xe802;</i>
      <i class="hzt-icon sound">&#xe803;</i>
      <i class="hzt-icon right-dir">&#xe804;</i>
      <i class="hzt-icon twitter">&#xf099;</i>
      <i class="hzt-icon facebook">&#xf09a;</i>
      <i class="hzt-icon rss">&#xf09e;</i>
      <i class="hzt-icon menu">&#xf0c9;</i>
      <i class="hzt-icon bulb">&#xf0eb;</i>
      <i class="hzt-icon phone">&#xf10b;</i>
      <i class="hzt-icon youtube">&#xf16a;</i>
      <i class="hzt-icon instagram">&#xf16d;</i>
      <i class="hzt-icon user-plus">&#xf234;</i>
       */}
    </>
  );
}
