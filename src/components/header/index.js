import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.png";
import Section from "../helpers/Section";
import { Context } from "../../context";

export default function Header() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const { datas } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", e);
  };
  const handleFocus = (e) => {
    console.log("focus", e);
    setIsSearchFocused(true);
  };
  const handleBlur = (e) => {
    console.log("blur", e);
    setIsSearchFocused(false);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

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
                <span className="minus"></span>
              ) : (
                <i className="hzt-icon bars">&#xf0c9;</i>
              )}
            </div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="search">
            <form className="d_flx " onSubmit={handleSubmit}>
              <input
                type="search"
                name="search"
                value={searchValue}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder="Search"
              />
              <button type="submit">
                <i className="hzt-icon search">&#xe801;</i>{" "}
              </button>
            </form>

            {isSearchFocused ? (
              <div className="suggessions">
                <div className="matched_item d_flx">
                  <h3 className="tite">GOOGLE Redmi nice</h3>
                </div>
              </div>
            ) : null}
          </div>
          <div className="socials ">
            <ul className="d_flx">
              <li>
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  <i className="hzt-icon user-plus">&#xf234;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  <i className="hzt-icon instagram">&#xf16d;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  <i className="hzt-icon youtube">&#xf16a;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  <i className="hzt-icon rss">&#xf09e;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  <i className="hzt-icon facebook">&#xf09a;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  <i className="hzt-icon twitter">&#xf099;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  <i className="hzt-icon login">&#xe800;</i>
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  <i className="hzt-icon bulb">&#xf0eb;</i>
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
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">news</Link>
            </li>
            <li>
              <Link to="/">reviews</Link>
            </li>
            <li>
              <Link to="/">videos</Link>
            </li>
            <li>
              <Link to="/">featured</Link>
            </li>
            <li>
              <Link to="/">phone finder</Link>
            </li>
            <li>
              <Link to="/">dealsnew</Link>
            </li>
            <li>
              <Link to="/">tools</Link>
            </li>
            <li>
              <Link to="/">coverage</Link>
            </li>
            <li>
              <Link to="/">contact</Link>
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
      <i className="hzt-icon login">&#xe800;</i>
      <i className="hzt-icon search">&#xe801;</i>
      <i className="hzt-icon lists">&#xe802;</i>
      <i className="hzt-icon sound">&#xe803;</i>
      <i className="hzt-icon right-dir">&#xe804;</i>
      <i className="hzt-icon twitter">&#xf099;</i>
      <i className="hzt-icon facebook">&#xf09a;</i>
      <i className="hzt-icon rss">&#xf09e;</i>
      <i className="hzt-icon menu">&#xf0c9;</i>
      <i className="hzt-icon bulb">&#xf0eb;</i>
      <i className="hzt-icon phone">&#xf10b;</i>
      <i className="hzt-icon youtube">&#xf16a;</i>
      <i className="hzt-icon instagram">&#xf16d;</i>
      <i className="hzt-icon user-plus">&#xf234;</i>
       */}
    </>
  );
}
