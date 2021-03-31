import { Link } from "react-router-dom";
import adImg from "../../../advertisement.png";

import { useContext } from "react";
import { Context } from "../../../context";

export default function Sidebar({ className }) {
  const { brands, topHits, topLiked, urlFy } = useContext(Context);

  const top10 = (arr) => {
    const newArr = [];

    if (arr.length >= 10) {
      for (let i = 0; i < 10; i++) {
        newArr.push(arr[i]);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  };

  console.log(top10(topHits), top10(topLiked));

  return (
    <div className={className}>
      <div className="phone_finder">
        <Link to="/search">
          <h3 className="title d_flx ali_c jc_c">
            <i className="hzt-icon phone">&#xf10b;</i>
            <span className="text">phone finder</span>
          </h3>
        </Link>

        <div className="brands ">
          <ul className="d_grid ta_c">
            {brands.length > 0
              ? brands.map((item, index) => (
                  <li key={index}>
                    <Link to={`/phones/${urlFy(item)}`}>{item}</Link>
                  </li>
                ))
              : null}
            <>
              {/* <li>
              <Link to="/">samsung</Link>
            </li>
            <li>
              <Link to="/">APPLE</Link>
            </li>
            <li>
              <Link to="/">HUAWEI</Link>
            </li>
            <li>
              <Link to="/">NOKIA</Link>
            </li>
            <li>
              <Link to="/">SONY</Link>
            </li>
            <li>
              <Link to="/">LG</Link>
            </li>
            <li>
              <Link to="/">HTC</Link>
            </li>
            <li>
              <Link to="/">MOTOROLA</Link>
            </li>
            <li>
              <Link to="/">LENOVO</Link>
            </li>
            <li>
              <Link to="/">XIAOMI</Link>
            </li>
            <li>
              <Link to="/">GOOGLE</Link>
            </li>
            <li>
              <Link to="/">HONOR</Link>
            </li>
            <li>
              <Link to="/">OPPO</Link>
            </li>
            <li>
              <Link to="/">REALME</Link>
            </li>
            <li>
              <Link to="/">ONEPLUS</Link>
            </li>
            <li>
              <Link to="/">VIVO</Link>
            </li>
            <li>
              <Link to="/">MEIZU</Link>
            </li>
            <li>
              <Link to="/">BLACKBERRY</Link>
            </li>
            <li>
              <Link to="/">ASUS</Link>
            </li>
            <li>
              <Link to="/">ALCATEL</Link>
            </li>
            <li>
              <Link to="/">ZTE</Link>
            </li>
            <li>
              <Link to="/">MICROSOFT</Link>
            </li>
            <li>
              <Link to="/">VODAFONE</Link>
            </li>
            <li>
              <Link to="/">ENERGIZER</Link>
            </li>
            <li>
              <Link to="/">CAT</Link>
            </li>
            <li>
              <Link to="/">SHARP</Link>
            </li>
            <li>
              <Link to="/">MICROMAX</Link>
            </li>
            <li>
              <Link to="/">INFINIX</Link>
            </li>
            <li>
              <Link to="/">ULEFONE</Link>
            </li>
            <li>
              <Link to="/">TECNO</Link>
            </li>
            <li>
              <Link to="/">BLU</Link>
            </li>
            <li>
              <Link to="/">ACER</Link>
            </li>
            <li>
              <Link to="/">WIKO</Link>
            </li>
            <li>
              <Link to="/">PANASONIC</Link>
            </li>
            <li>
              <Link to="/">VERYKOOL</Link>
            </li>
            <li>
              <Link to="/">PLUM</Link>
            </li> */}
            </>
          </ul>
        </div>

        <div className="bottom_titles d_flx jc_spb">
          <Link to="/brands">
            <h3 className="title d_flx ali_c jc_c">
              <i className="hzt-icon lists">&#xe802;</i>
              <span className="text">all brands</span>
            </h3>
          </Link>
          <Link to="/rumored">
            <h3 className="title d_flx ali_c jc_c">
              <i className="hzt-icon sound">&#xe803;</i>
              <span className="text">rumor mill</span>
            </h3>
          </Link>
        </div>
      </div>

      <div className="top_10 interest">
        <h3 className="title">TOP 10 BY DAILY INTEREST</h3>
        <div className="list_head d_flx jc_spb top_10_typo_style">
          <h2 className="device">Device</h2>
          <h2 className="favorites ta_r">Daily hits</h2>
        </div>
        <ul className="phones">
          {topHits.length > 0
            ? top10(topHits).map((item, index) => (
                <li key={item.id}>
                  <div className=" d_flx jc_spb">
                    <span className="d_flx">
                      <span className="index ta_r">{`${index + 1}.`}</span>
                      <Link
                        to={`/details/${urlFy(item.brand)}/${urlFy(
                          item.modelName
                        )}/`}
                      >{`${item.brand} ${item.modelName}`}</Link>
                    </span>
                    <span className="count ta_r">{item.hitsAvg}</span>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>

      <div className="top_10 fans">
        <h3 className="title">top 10 by fans</h3>
        <div className="list_head d_flx jc_spb top_10_typo_style">
          <h2 className="device">Device</h2>
          <h2 className="favorites ta_r">Favorites</h2>
        </div>
        <ul className="phones">
          {topLiked.length > 0
            ? top10(topLiked).map((item, index) => (
                <li key={item.id}>
                  <div className=" d_flx jc_spb">
                    <span className="d_flx">
                      <span className="index ta_r">{index + 1}.</span>
                      <Link
                        to={`/details/${urlFy(item.brand)}/${urlFy(
                          item.modelName
                        )}/`}
                      >{`${item.brand} ${item.modelName}`}</Link>
                    </span>
                    <span className="count ta_r">{item.usersLike}</span>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>

      <div className="advertise">
        <img src={adImg} alt="advertisement" />
      </div>
    </div>
  );
}
